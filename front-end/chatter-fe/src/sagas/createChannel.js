import { eventChannel } from 'redux-saga';
import * as type from '../actions/type';
import { changeAllUserOnline } from '../actions/userList';
import { publicChatLog, addPrivateRoom, addPrivateMsg } from '../actions/socket';
import { toastRequest } from '../actions/toast';

export function createChannel(socket) {
  return eventChannel((emit) => {
    socket.on(type.BROADCASTING, (onUsers) => {
      emit(changeAllUserOnline(onUsers));
    });

    socket.on('MESSAGE', (message) => {
      emit(publicChatLog(message));
    });

    socket.on(type.SUCCESS_CREATE_ROOM, (roomName) => {
      emit(addPrivateRoom(roomName));
    });

    socket.on(type.RECEIVE_PRIVATE_MSG, ({ msgInfo, toastMsg }) => {
      emit(addPrivateMsg(msgInfo));
      emit(toastRequest(toastMsg));
    });
    return () => {
      socket.off(type.BROADCASTING, (onUsers) => {
        emit(changeAllUserOnline(onUsers));
      });
    };
  });
}

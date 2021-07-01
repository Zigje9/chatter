import { eventChannel } from 'redux-saga';
import * as type from '../actions/type';
import { changeAllUserOnline } from '../actions/userList';

export function createChannel(socket) {
  return eventChannel((emit) => {
    socket.on('BROADCASTING', (onUsers) => {
      emit(changeAllUserOnline(onUsers));
    });
    return () => {
      socket.off(type.BROADCASTING, (onUsers) => {
        emit(changeAllUserOnline(onUsers));
      });
    };
  });
}

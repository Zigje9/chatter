import { eventChannel } from 'redux-saga';
import * as type from '../actions/type';
import { changeAllUserOnline } from '../actions/userList';

export function createChannel(socket) {
  return eventChannel((emit) => {
    socket.on(type.BROADCASTING, (onUsers) => {
      emit(changeAllUserOnline(onUsers));
    });

    socket.on('MESSAGE', (message) => {
      emit({ type: 'RECEIVE_MSG', payload: message });
    });
    return () => {
      socket.off(type.BROADCASTING, (onUsers) => {
        emit(changeAllUserOnline(onUsers));
      });
    };
  });
}

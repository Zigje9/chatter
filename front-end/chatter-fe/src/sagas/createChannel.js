import { eventChannel } from 'redux-saga';
import * as type from '../actions/type';
import { changeAllUserOnline } from '../actions/userList';

export function* createChannel(socket) {
  console.log(socket);
  return eventChannel((emit) => {
    socket.on(type.BROADCASTING, (onUsers) => {
      console.log(onUsers);
      emit(changeAllUserOnline(onUsers));
    });
    return () => {
      // socket.off(type.BROADCASTING, (onUsers) => {
      //   emit(changeAllUserOnline(onUsers));
      // });
    };
  });
}

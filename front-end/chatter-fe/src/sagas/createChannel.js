import { eventChannel } from "redux-saga";
import * as type from "../actions/type";
import { changeAllUserOnline } from "../actions/userList";
import { publicChatLog } from "../actions/socket";

export function createChannel(socket) {
  return eventChannel((emit) => {
    socket.on(type.BROADCASTING, (onUsers) => {
      emit(changeAllUserOnline(onUsers));
    });

    socket.on("MESSAGE", (message) => {
      console.log(message);
      emit(publicChatLog(message));
    });
    return () => {
      socket.off(type.BROADCASTING, (onUsers) => {
        emit(changeAllUserOnline(onUsers));
      });
    };
  });
}

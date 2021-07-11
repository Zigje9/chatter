import { eventChannel } from "redux-saga";
import * as type from "../actions/type";
import { changeAllUserOnline } from "../actions/userList";
import { publicChatLog, addPrivateRoom } from "../actions/socket";

export function createChannel(socket) {
  return eventChannel((emit) => {
    socket.on(type.BROADCASTING, (onUsers) => {
      emit(changeAllUserOnline(onUsers));
    });

    socket.on("MESSAGE", (message) => {
      emit(publicChatLog(message));
    });

    socket.on(type.SUCCESS_CREATE_ROOM, (roomName) => {
      console.log(roomName);
      emit(addPrivateRoom(roomName));
    });
    return () => {
      socket.off(type.BROADCASTING, (onUsers) => {
        emit(changeAllUserOnline(onUsers));
      });
    };
  });
}

import { eventChannel, buffers } from 'redux-saga';
import store from '../store';

const defaultMatcher = () => true;

export function createSocketChannel(eventType, buffer, matcher) {
  const socket = store.getState().socket.socket;
  const { type } = eventType;
  return eventChannel(
    (emit) => {
      const emitter = (message) => {
        emit(message);
      };

      socket.on(type, emitter);
      return function unsubscribe() {
        socket.off(type, emitter);
      };
    },
    buffer || buffers.none(),
    matcher || defaultMatcher,
  );
}

export function closeChannel(channel) {
  if (channel) {
    channel.close();
  }
}

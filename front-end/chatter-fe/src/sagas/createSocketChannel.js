import { eventChannel, buffers } from 'redux-saga';
import socket from '../../../mySocket';

const defaultMatcher = () => true;

export function createSocketChannel(eventType, buffer, matcher) {
  return eventChannel(
    (emit) => {
      const emitter = (message) => emit(message);

      socket.on(eventType, emitter);
      return function unsubscribe() {
        socket.off(eventType, emitter);
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

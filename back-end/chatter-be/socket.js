const express = require('express');
const { createServer } = require('http');
const createChatServer = require('socket.io');

const server = createServer(express());
const io = createChatServer(server, {
  cors: { origin: '*', credentials: true },
});

io.on('connection', (socket) => {
  const onUsers = [];
  for (const [id, socket] of io.of('/').sockets) {
    onUsers.push({
      userID: id,
      userName: socket.handshake.auth.userName,
    });
  }
  console.log('onUsers', onUsers);
  io.emit('broadCasting', onUsers);
});

server.listen(8000, () => {
  console.log('socket server listening port 8000');
});

module.exports = server;

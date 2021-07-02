const express = require('express');
const { createServer } = require('http');
const createChatServer = require('socket.io');

const server = createServer(express());
const io = createChatServer(server, {
  cors: { origin: '*', credentials: true },
});

io.on('connection', (socket) => {
  const onUsers = {};
  for (const [id, socket] of io.of('/').sockets) {
    onUsers[id] = socket.handshake.auth.userInfo.userId;
  }
  console.log('onUsers', onUsers);
  // io.emit('BROADCASTING', onUsers);

  socket.on('USER_ACCOUNTS', (a) => {
    console.log(a);
  });

  socket.on('BROADCASTING', () => {
    io.emit('BROADCASTING', onUsers);
  });

  socket.on('disconnect', () => {
    console.log(socket.id);
    delete onUsers[socket.id];
    socket.broadcast.emit('BROADCASTING', onUsers);
  });
});

server.listen(8000, () => {
  console.log('socket server listening port 8000');
});

module.exports = server;

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

  socket.on('MESSAGE', (req) => {
    console.log(req);
    const res = { message: req.message, from: req.from };
    console.log(res);
    io.sockets.emit('MESSAGE', res);
  });

  socket.on('REQUEST_CREATE_ROOM', (req) => {
    const [userA, userB] = req;
    const roomName = `${userA}_${userB}`;
    for (const [_, socket] of io.of('/').sockets) {
      if (
        socket.handshake.auth.userInfo.userId === userB ||
        socket.handshake.auth.userInfo.userId === userA
      ) {
        socket.join(roomName);
        socket.emit('SUCCESS_CREATE_ROOM', roomName);
      }
    }
  });

  socket.on('SEND_PRIVATE_MSG', (req) => {
    const { roomName, from, msg } = req;
    const roomArr = roomName.split("_");
    const to = roomArr[0] === from.userId ? roomArr[1] : roomArr[0]
    const msg_date = new Date()
    const res = {}
    res[roomName] = {from, to, msg, msg_date}
    io.to(roomName).emit('RECEIVE_PRIVATE_MSG', res);
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

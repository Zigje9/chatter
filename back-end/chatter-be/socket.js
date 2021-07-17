const express = require('express');
const { createServer } = require('http');
const createChatServer = require('socket.io');

const server = createServer(express());
const io = createChatServer(server, {
  cors: { origin: '*', credentials: true },
});

const sql = require('./model/db');
const query = require('./model/query/index');

io.on('connection', (socket) => {
  const onUsers = {};
  for (const [id, socket] of io.of('/').sockets) {
    onUsers[id] = socket.handshake.auth.userInfo.userId;
  }

  socket.on('USER_ACCOUNTS', (a) => {
    console.log(a);
  });

  /* Broadcasting */
  socket.on('BROADCASTING', () => {
    io.emit('BROADCASTING', onUsers);
  });

  /* Public Message */
  socket.on('MESSAGE', async (req) => {
    const date = new Date();
    const res = { message: req.message, from: req.from, date: date };
    await sql(query.INSERT_PUBLIC_LOG, [req.message, req.from.userId, date]);
    io.sockets.emit('MESSAGE', res);
  });

  /* Create Private Chat Room */
  socket.on('REQUEST_CREATE_ROOM', async (req) => {
    const [userA, userB] = req;
    const roomName = `${userA}_${userB}`;
    const data = await sql(query.READ_SPECIFIC_ROOM, roomName);
    if (data.length === 0) {
      //create new chat room
      const date = new Date();
      await sql(query.INSERT_SPECIFIC_ROOM, [roomName, date]);
      const values = [
        [roomName, userA],
        [roomName, userB],
      ];
      await sql(query.INSERT_USER_ROOM, [values]);
      for (const [_, socket] of io.of('/').sockets) {
        if (
          socket.handshake.auth.userInfo.userId === userB ||
          socket.handshake.auth.userInfo.userId === userA
        ) {
          socket.join(roomName);
          socket.emit('SUCCESS_CREATE_ROOM', roomName);
        }
      }
    }
  });

  /* Private Message */
  socket.on('SEND_PRIVATE_MSG', async (req) => {
    const { roomName, from, msg } = req;
    const roomArr = roomName.split('_');
    const to = roomArr[0] === from.userId ? roomArr[1] : roomArr[0];
    const date = new Date();
    const res = {};
    res[roomName] = { from: from.userId, to, msg, date };
    for (const [_, socket] of io.of('/').sockets) {
      if (
        socket.handshake.auth.userInfo.userId === from.userId ||
        socket.handshake.auth.userInfo.userId === to
      ) {
        socket.join(roomName);
      }
    }
    io.to(roomName).emit('RECEIVE_PRIVATE_MSG', res);
    await sql(query.INSERT_PRIVATE_LOG, [roomName, msg, from.userId, to, date]);
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

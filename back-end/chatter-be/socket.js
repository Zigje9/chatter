const express = require('express');
const { createServer } = require('http');
const createChatServer = require('socket.io');

const server = createServer(express());
const io = createChatServer(server, {
  cors: { origin: '*', credentials: true },
});

io.on('connection', (socket) => {
  console.log('here');
});

server.listen(8000, () => {
  console.log('socket server listening port 8000');
});

module.exports = server;

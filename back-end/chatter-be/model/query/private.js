const privateQuery = {
  READ_SPECIFIC_ROOM: 'SELECT * FROM chatter_room WHERE room_id=?',
  READ_PRIVATE_ROOMS: 'SELECT room_id FROM user_room WHERE user_id=?',
  INSERT_SPECIFIC_ROOM: 'INSERT INTO chatter_room(room_id,room_date) VALUES(?,?)',
  INSERT_USER_ROOM: 'INSERT INTO user_room(room_id,user_id) VALUES ?',
};

module.exports = privateQuery;

const userQuery = {
  READ_USER: 'SELECT * FROM chatter_user WHERE user_id=?',
  INSERT_USER: 'INSERT INTO chatter_user(user_id,user_name,user_password) VALUES(?,?,?)'
}

module.exports = userQuery;
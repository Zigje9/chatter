const logQuery = {
  INSERT_PUBLIC_LOG: 'INSERT INTO public_log(message,user_id,date) VALUES(?,?,?)',
  READ_PUBLIC_LOG:
    'SELECT message, user_id, user_name, date FROM public_log natural JOIN chatter_user',
};

module.exports = logQuery;

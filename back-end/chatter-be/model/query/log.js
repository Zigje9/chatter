const logQuery = {
  INSERT_PUBLIC_LOG: 'INSERT INTO public_log(message,user_id,user_name,date) VALUES(?,?,?,?)',
};

module.exports = logQuery;

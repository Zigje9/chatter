const mysql = require('mysql2');
const config = require('./config')

const db = mysql.createPool(config).promise();

const sql = async (syntax, param) => {
  const [rows] = await db.query(syntax, param);
  return rows
}

module.exports = sql;

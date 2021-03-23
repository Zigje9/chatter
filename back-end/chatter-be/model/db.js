const mysql = require('mysql2');

const dbConfig = {
}

const db = mysql.createPool(dbConfig).promise();

const sql = async (syntax, param) => {
  const [rows] = await db.query(syntax, param);
  return rows
}

export default sql;

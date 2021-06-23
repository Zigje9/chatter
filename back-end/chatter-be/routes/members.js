const express = require('express')
const router = express.Router();

const sql = require('../model/db')
const query = require('../model/query/user')

router.get('/members', async (req, res) => {
  const [result] = await sql(query.READ_ALL_USER)
  console.log(result.data)
  return res.status(200).json({"hi":1})
})

module.exports = router;
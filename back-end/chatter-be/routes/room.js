const express = require('express');
const router = express.Router();

const sql = require('../model/db');
const query = require('../model/query/index');

router.get('/room', async (req, res) => {
  try {
    const sid = req.headers.cookies;
    const [result] = await sql(query.READ_SESSION_USER, sid);
    const userId = JSON.parse(result.data).userId;
    const data = await sql(query.READ_PRIVATE_ROOMS, userId);
    return res.status(200).json([...data]);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

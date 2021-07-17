const express = require('express');
const router = express.Router();

const sql = require('../model/db');
const query = require('../model/query/index');

router.get('/public', async (req, res) => {
  try {
    const result = await sql(query.READ_PUBLIC_LOG);
    return res.status(200).json({ data: [...result] });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

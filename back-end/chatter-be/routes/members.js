const express = require('express');
const router = express.Router();

const sql = require('../model/db');
const query = require('../model/query/index');

router.get('/members', async (req, res) => {
  try {
    const result = await sql(query.READ_ALL_USER);
    const resData = {};
    result.map(
      (user) =>
        (resData[user.user_name] = { user_id: user.user_id, user_profile: user.user_profile }),
    );
    return res.status(200).json(resData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

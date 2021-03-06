const express = require('express');
const sql = require('../model/db');
const query = require('../model/query/user');
const router = express.Router();

router.get('/auth', async (req, res) => {
  const sid = req.headers.cookies;
  if (sid) {
    try {
      const [result] = await sql(query.READ_SESSION_USER, sid);
      const userId = JSON.parse(result.data).userId;
      const userName = JSON.parse(result.data).name;
      const userProfileIdx = JSON.parse(result.data).profile;
      return res
        .status(200)
        .json({ isLogin: true, userName: userName, userProfile: userProfileIdx, userId: userId });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(401).send('Unauthenticated');
  }
});

module.exports = router;

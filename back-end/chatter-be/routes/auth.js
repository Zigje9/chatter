const express = require('express');
const sql = require('../model/db');
const query = require('../model/query/user')
const router = express.Router();

router.get('/auth', async (req, res) => {
  const sid = req.headers.cookies
  if (sid) {
    try {
      const [result] = await sql(query.READ_SESSION_USER, sid)
      const userName = JSON.parse(result.data).name
      return res.status(200).json({isLogin: true, userName: userName})
    } catch (error) {
      console.log(error)
    }
  }
  else{
    res.status(401).send("Unauthenticated")
  }
})

module.exports = router;
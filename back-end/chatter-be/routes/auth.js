const express = require('express');
const sql = require('../model/db');
const query = require('../model/query/user')
const router = express.Router();

router.get('/auth', async (req, res) => {
  const sid = req.headers.cookies
  if (sid) {
    try {
      const [result] = await sql(query.READ_SESSION_USER, sid)
      console.log("parse data@@@@@", JSON.parse(result.data))
      const userName = result.data.cookie.name
      console.log("userName", userName)
      return res.status(200).send(userName)
    } catch (error) {
      console.log(error)
    }
  }
  else{
    res.status(401).send("Unauthenticated")
  }
})

module.exports = router;
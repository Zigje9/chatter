const express = require('express')
const router = express.Router();

const sql = require('../model/db')
const query = require('../model/query/user')

router.post('/signup', async (req, res) => {
  const {id, pw, userName} = req.body;
  const [result] = await sql(query.READ_USER, id)
  if (result){
    console.log("headers", req.headers)
    console.log("header", req.header)
    res.send("가입된 회원입니다.")
  }
  else{
    await sql(query.INSERT_USER, [id, userName, pw])
    res.send("회원가입 완료.")
  }
})

module.exports = router;
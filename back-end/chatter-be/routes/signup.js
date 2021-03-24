const express = require('express')
const router = express.Router();

const sql = require('../model/db')
const query = require('../model/query/user')

router.post('/signup', async (req, res) => {
  const {id, pw, userName} = req.body;
  const [result] = await sql(query.READ_USER, id)
  if (result){
    res.send("가입된 회원입니다.")
  }
  else{
    //회원 가입 로직
  }
})

module.exports = router;
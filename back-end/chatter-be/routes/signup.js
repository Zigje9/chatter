const express = require('express');
const router = express.Router();

const sql = require('../model/db');
const query = require('../model/query/index');
const random = require('../utils/getRandom');

router.post('/signup', async (req, res) => {
  const { id, pw, userName } = req.body;
  const [result] = await sql(query.READ_USER, id);
  if (result) {
    res.status(401).send({ msg: '이미 가입된 회원입니다.' });
  } else {
    const profile_idx = random();
    await sql(query.INSERT_USER, [id, userName, pw, profile_idx]);
    res.status(200).send({ msg: '회원가입 완료,' });
  }
});

module.exports = router;

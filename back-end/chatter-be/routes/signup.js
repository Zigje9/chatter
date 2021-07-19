const express = require('express');
const router = express.Router();
const crypto = require('crypto');
require('dotenv').config();

const sql = require('../model/db');
const query = require('../model/query/index');
const random = require('../utils/getRandom');

const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString('base64'));
    });
  });
};

const createHashedPassword = (pw) => {
  return new Promise(async (resolve, reject) => {
    const salt = await createSalt();
    crypto.pbkdf2(pw, salt, +process.env.SALT_NUM, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString('base64'), salt });
    });
  });
};

router.post('/signup', async (req, res) => {
  const { id, pw, userName } = req.body;
  const { password, salt } = await createHashedPassword(pw);
  const [result] = await sql(query.READ_USER, id);
  if (result) {
    res.status(401).send({ msg: '이미 가입된 회원입니다.' });
  } else {
    const profile_idx = random();
    await sql(query.INSERT_USER, [id, userName, password, profile_idx, salt]);
    res.status(200).send({ msg: '회원가입 완료,' });
  }
});

module.exports = router;

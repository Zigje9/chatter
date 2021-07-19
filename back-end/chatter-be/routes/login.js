const express = require('express');
const router = express.Router();
const crypto = require('crypto');
require('dotenv').config();

const sql = require('../model/db');
const query = require('../model/query/user');

const getSaltPw = (id, pw) => {
  return new Promise(async (resolve, reject) => {
    const [result] = await sql(query.READ_USER, id);
    const salt = result.user_salt;
    crypto.pbkdf2(pw, salt, +process.env.SALT_NUM, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve(key.toString('base64'));
    });
  });
};

router.post('/login', async (req, res) => {
  const { id, pw } = req.body;
  const saltPassword = await getSaltPw(id, pw);
  const [result] = await sql(query.READ_USER, id);
  const originPassword = result.user_password;
  if (saltPassword === originPassword) {
    req.session.userId = result.user_id;
    req.session.name = result.user_name;
    req.session.profile = result.user_profile;
    req.session.save(() => {
      req.session.sid = req.sessionID;
      return res.status(200).send(req.session);
    });
  } else {
    res.status(401).send('login failed');
  }
});

module.exports = router;

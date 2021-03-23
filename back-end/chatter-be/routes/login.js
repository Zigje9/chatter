const express = require('express')
const router = express.Router();

const sql = require('../model/db')
const query = require('../model/query/user')

router.post('/login', async (req, res) => {
  const {id, pw} = req.body;
  const [result] = await sql(query.READ_USER, id)
  if (pw === result.user_password) {
    req.session.name = result.user_name;
    req.session.save(() => {
      return res.send("welcome")
    })
  }
})

module.exports = router;
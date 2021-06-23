const express = require('express')
const router = express.Router();

const sql = require('../model/db')
const query = require('../model/query/user')

router.get('/members', async () => {
  // const [result] = await sql(query.READ_USER, id)
  // if (pw === result.user_password) {
  //   req.session.name = result.user_name;
  //   req.session.save(() => {
  //     req.session.sid = req.sessionID
  //     return res.status(200).send(req.session)
  //   })
  // }
})

module.exports = router;
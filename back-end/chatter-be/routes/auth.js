const express = require('express')
const router = express.Router();

router.get('/auth', (req, res) => {
  console.log(req.header)
  console.log(req.headers)
  res.send("hhhhh")
})

module.exports = router;
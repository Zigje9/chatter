const express = require('express')
const router = express.Router();

router.get('/auth', (req, res) => {
  console.log("쿠키 쿠키 쿠키", req.headers.cookie)
  res.send("hhhhh")
})

module.exports = router;
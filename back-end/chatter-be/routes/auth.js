const express = require('express')
const router = express.Router();

router.get('/auth', (req, res) => {
  console.log("쿠키 쿠키 쿠키", req.headers.cookie)
  console.log("headerssss",req.headers)
  console.log("header",req.header)
  res.send("hhhhh")
})

module.exports = router;
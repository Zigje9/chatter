const express = require('express');
const sql = require('../model/db');
const router = express.Router();

router.get('/auth', (req, res) => {
  const sid = req.headers.cookies
  if (sid) {
    
  }
})

module.exports = router;
const express = require('express')
const router = express.Router();

router.post('/login', (req, res) => {
  const {id, pw} = req.body;
  console.log(id, pw)
})

module.exports = router;
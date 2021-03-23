const express = require('express')
const router = express.Router();

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send("logout")
  })
})

module.exports = router;
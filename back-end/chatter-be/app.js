const express = require('express')
const app = express()
const port = 5000
const loginRouter = require('./routes/login')

app.use(loginRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
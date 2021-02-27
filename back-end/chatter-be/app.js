const express = require('express')
const app = express()
const port = 3000
const loginRouter = require('./routes/login')

app.use(loginRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const sql = require('./model/db')
const query = require('./model/query')

const express = require('express')
const app = express()
const port = 5000

const loginRouter = require('./routes/login')

app.use(loginRouter)

app.get('/test', async (req, res) => {
  const [result] = await sql(query.READ_USER);
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
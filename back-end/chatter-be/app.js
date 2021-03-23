const express = require('express')
const app = express()
const port = 5000
const sql = require('./model/db')
const query = require('./model/query')
const dbConfig = require('./model/config')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)

const loginRouter = require('./routes/login')

const sessionStore = new MySQLStore(dbConfig)

app.use(session({
  secret: '!@#$%^&',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
}))

app.use(loginRouter)

app.get('/test', async (req, res) => {
  const [result] = await sql(query.READ_USER);
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
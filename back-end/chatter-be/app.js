const express = require('express')
const app = express()
const port = 5000
const dbConfig = require('./model/config')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
const signupRouter = require('./routes/signup')

const sessionStore = new MySQLStore(dbConfig)

app.use(session({
  secret: '!@#$%^&',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
}))

app.use(loginRouter)
app.use(logoutRouter)
app.use(signupRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const app = express();
const port = 5000;
const dbConfig = require('./model/config');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const socketServer = require('./socket');

const corsOptions = {
  origin: 'http://www.chatter.kro.kr',
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const signupRouter = require('./routes/signup');
const authRouter = require('./routes/auth');
const memberRouter = require('./routes/members');
const publicRouter = require('./routes/public');
const roomRouter = require('./routes/room');
const privateRouter = require('./routes/private');

const sessionStore = new MySQLStore(dbConfig);

app.use(
  session({
    secret: '!@#$%^&',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1800000,
    },
  }),
);

app.use(loginRouter);
app.use(logoutRouter);
app.use(signupRouter);
app.use(authRouter);
app.use(memberRouter);
app.use(publicRouter);
app.use(roomRouter);
app.use(privateRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

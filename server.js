'use strict';
const compression   = require('compression');
const passport      = require('passport');
const session       = require('express-session');
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const path          = require('path');
const models        = require('./models');
const userRouter    = express.Router();
const cardRouter    = express.Router();
const twitterRouter = express.Router();
const env           = process.env.NODE_ENV || 'devlopment';
const CONFIG        = require('./config/config.json')[env];
const port          = process.env.PORT || CONFIG.port || 3000;
const url           = process.env.URL || CONFIG.host || 'http://127.0.0.1:3000';




require('./controllers/user-controller')(userRouter, models);
require('./controllers/card-controller')(cardRouter, models);
require('./controllers/twitter-login-controller')(twitterRouter, models);

app.use(compression());
app.use(express.static(__dirname + '/src/client'));



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, authorization, token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(session({
  secret: CONFIG.secret,
  resave: true,
  saveUninitialized: true
}));




app.use(passport.initialize());
app.use(passport.session());

app.use('/', userRouter, cardRouter, twitterRouter);

app.get('/isLoggedIn', (req, res) => {
  res.json({user: req.session.user || '' });
});

app.get('*', function (request, response){
  response.sendFile(__dirname + '/src/client/index.html');
});


app.listen(port, () => {console.log('port up on '+ port);});

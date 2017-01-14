'use strict';

require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const expressJWT  = require('express-jwt');
const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(expressJWT({secret: process.env.secret}).unless(
  {path: ['/favicon.ico', '/user/signup', '/user/login']}
));

const userRouter = require('./routes/user.js');
app.use('/user', userRouter);

app.listen(PORT, () => console.log('Heyo!', PORT));

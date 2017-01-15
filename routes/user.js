const userRouter = require('express').Router()
const { createUser,
        authenticate,
      } = require('../models/user.js')

userRouter.route('/hi')
  .get((req, res, next) => res.json({message: 'hi'}));

userRouter.route('/signup')
  .post(createUser, (req, res, next) => res.json(res.signupResult));

userRouter.route('/login')
  .post(authenticate, (req, res, next) => res.json(res.match));

module.exports = userRouter;

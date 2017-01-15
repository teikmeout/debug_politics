const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;

function createUser(req, res, next) {
  if (req.body.signupPassword === req.body.signupConfirm) {
    db.none('INSERT INTO users (username, password, address) VALUES ($1, $2, $3);',
      [req.body.signupUsername, bcrypt.hashSync(req.body.signupPassword, salt), req.body.address])
      .then( () => {
        res.signupResult = {signup: true}
        next()
      })
    .catch(error => console.log(error))
  } else {
    res.signupResult = {signup: false}
    next();
    return;
  }
}

function authenticate(req, res, next) {
  db.one('SELECT * FROM users WHERE username = $/loginUsername/;', req.body)
    .then((data) => {
      const match = bcrypt.compareSync(req.body.loginPassword, data.password);
      if (match) {
        const token = jwt.sign({ username: req.body.username}, process.env.secret);
        res.match = {
          token: token,
          address: data.address
        }
        next();
      } else {
        res.token = {failed: 'failed'};
        next();
        return
      }
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate,
}

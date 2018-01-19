const express = require('express');
const router = express.Router();
const session = require('cookie-session');


const bcrypt = require('bcrypt-as-promised');
const saltRounds = 10;
const knex = require('../db/knex');


router.post('/signup', (req, res, next) => {
  console.log(req.body.password);
  bcrypt.hash(req.body.password, saltRounds)
  .then(hashed_password => knex('users')
    .insert({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      hashed_password,
      amazon_id: req.body.amazon_id,
      salary: req.body.salary
    }, '*'))
    .then(() => {
            res.send(req.body);
          })
    .catch((err) => {
      next(err);
    });
});


router.post('/login', (req, res) => {
  knex('users')
  .where({
    email: req.body.email
  })
  .first()
  .then(user => {
    bcrypt.compare(req.body.password, user.hashed_password)
    .then((valid) => {
      if (valid) {
        res.send(user);
      }
      else {
        res.send('invalid login');
      }
    });
  });
});


// remove logged in user from session
router.get('/logout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const saltRounds = 10;
const knex = require('../db/knex');


router.post('/signup', (req, res) => {
  console.log('signup works');
});


router.post('/login', (req, res) => {
  // knex('users')
  // .where({
  //   email: req.body.email
  // })
  // .first()
  // .then(user => {
  //   bcrypt.compare(req.body.password, user.hashedPassword)
  //   .then((valid) => {
  //     if (valid) {
  //       res.send(user);
  //     }
  //     else {
  //       res.send('invalid login');
  //     }
  //   });
  // });
  res.send(req.body.email);
})

// remove logged in user from session
router.get('/logout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;

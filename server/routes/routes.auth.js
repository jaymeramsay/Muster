const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

router.get('/login', (req, res) => {
  knex('users')
    .where({email: req.body.email})
    .first()
    .then((user) => {
      if (!user) {
        return callback("Email and password don't match");
      }
    })
  })

// remove logged in user from session
router.get('/logout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;

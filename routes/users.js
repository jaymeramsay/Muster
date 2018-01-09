const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('users')
    .then((users) => {
      res.send()
    })
})


module.exports = router;

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('items')
    .then((items) => {
      res.send('booyah');
    })
});

router.get('/:id/edit', (req, res) => {
  knex('items')
    .where({
      id: req.params.id
    })
    .first()
    .then((item) => {
      res.send(item)
    })
})

module.exports = router;

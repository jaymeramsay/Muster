const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('users')
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res) => {
  knex('users')
    .where({
      id: req.params.id
    })
    .first()
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      next(err);
    });
})

router.post('/', (req, res) => {
let newUser = {
first_name: req.body.first_name,
  last_name: req.body.last_name,
  email: req.body.email
}
  knex('users')
    .insert(newUser)
    .then((user) => {
      res.send(users)
    })
    .catch((err) => {
      next(err);
    });
})

module.exports = router;

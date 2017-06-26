const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const knex = require('../knex')


router.get('/:id', (req, res, next) => {
  let id = +req.params.id
  knex('families')
    .select('users.id', 'full_name', 'date_of_birth', 'role', 'family_name')
    .join('users_families', 'users_families.family_id', 'families.id')
    .join('users', 'users.id', 'users_families.user_id')
    .where('families.id', id)
    .then((members) => {
      res.send(members)
    })
})

router.post('/', (req, res, next) => {
  knex('users')
    .select(['users.id as u_id', 'users.password', 'users_families.family_id as f_id'])
    .join('users_families', 'users_families.user_id', 'users.id')
    .where('email', req.body.email)
    .then((user) => {
      if (user.length > 0) {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (result) {
              let token = jwt.sign({
                user: user
              }, 'secret_key')
              res.status(200).send({token: token, userId: user[0].u_id, family: user[0].f_id})
            } else {
              res.status(200).send({token: 'x', userId: 'x'})
            }
          })
      } else {
        res.status(200).send({token: 'x', userId: 'x'})
      }
    })
})

module.exports = router

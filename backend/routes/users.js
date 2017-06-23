const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = +req.params.id
  knex('families')
    .select('users.id', 'full_name', 'date_of_birth', 'parent_1', 'parent_2')
    .join('users_families', 'users_families.family_id', 'families.id')
    .join('users', 'users.id', 'users_families.user_id')
    .where('families.id', id)
    .then((members) => {
      res.send(members)
    })
})

module.exports = router

const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('users')
    .then((users) => {
      console.log('here', users)
      res.send(users)
    })
})

module.exports = router

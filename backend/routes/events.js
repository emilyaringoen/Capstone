const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = +req.params.id
  knex('users')
    .select(['users.id as u_id', 'users.full_name', 'events.title', 'events.id as e_id', 'media.id as m_id', 'events.description', 'events.event_date'])
    .join('users_events', 'users_events.user_id', 'users.id')
    .join('events', 'events.id', 'users_events.event_id')
    .leftOuterJoin('media', 'media.event_id', 'events.id')
    .where('users.id', id)
    .then((events) => {
      res.send(events)
    })
})

module.exports = router

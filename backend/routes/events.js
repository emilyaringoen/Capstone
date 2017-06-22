const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = +req.params.id
  console.log(id)
  knex('users')
    .select(['users.id', 'users.full_name', 'events.title', 'events.id', 'media.id', 'events.description', 'events.event_date'])
    .join('users_events', 'users_events.user_id', 'users.id')
    .join('events', 'events.id', 'users_events.event_id')
    .leftOuterJoin('media', 'media.event_id', 'events.id')
    .where('users.id', id)
    .then((events) => {
      console.log('here', events)
      res.send(events)
    })
})

module.exports = router


// select * from users join users_events on users_events.user_id = users.id join events on events.id = users_events.event_id left outer join media on events.id = media.event_id;

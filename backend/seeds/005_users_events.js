exports.seed = function(knex) {
  return knex('users_events').del()
    .then(function() {
      return knex('users_events').insert([
        { id: 1,
          user_id: 4,
          event_id: 1
        },
        { id: 2,
          user_id: 4,
          event_id: 2
        },
        { id: 3,
          user_id: 4,
          event_id: 3
        },
        { id: 4,
          user_id: 4,
          event_id: 4
        },
        { id: 5,
          user_id: 4,
          event_id: 5
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_events_id_seq\', (SELECT MAX(id) FROM users_events));')
    })
}

exports.seed = function(knex) {
  return knex('events').del()
    .then(function() {
      return knex('events').insert([
        { id: 1,
          title: 'Family Photo',
          description: 'The Ringoen family gathers for a family photo in early 1965.',
          event_date: '1965-01-01'
        },
        { id: 2,
          title: 'Picnic',
          description: 'Evelyn and Elmer gather the family for a picnic.',
          event_date: '1965-01-01'
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'events_id_seq\', (SELECT MAX(id) FROM events));')
    })
}

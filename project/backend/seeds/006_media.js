exports.seed = function(knex) {
  return knex('media').del()
    .then(function() {
      return knex('media').insert([
        { id: 1,
          media_url: 'https://ibb.co/enE5Xk',
          event_id: 2
        },
        { id: 2,
          media_url: 'https://ibb.co/mUeHdQ',
          event_id: 1
        },
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'media_id_seq\', (SELECT MAX(id) FROM media));')
    })
}

exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          full_name: 'Emily Ringoen',
          email: 'emilyringoen@gmail.com',
          password: 'password'
          profile_picture: '',
          bio: 'Human.',
          date: '1993-09-21'
        },
        { id: 2,
          full_name: 'Susan Ringoen',
          email: 'sringoen@me.com',
          password: 'password'
          profile_picture: '',
          bio: 'Human.',
          date: '1965-04-16'
        },
        { id: 1,
          full_name: 'Jamie Fischer',
          email: 'jamie.ringoen@yahoo.com',
          password: 'password'
          profile_picture: '',
          bio: 'Human.',
          date: '1993-09-21'
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));')
    })
}

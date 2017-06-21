exports.seed = function(knex) {
  return knex('users_families').del()
    .then(function() {
      return knex('users_families').insert([
        { id: 1,
          user_id: 1,
          family_id: 1
        },
        { id: 2,
          user_id: 2,
          family_id: 1
        },
        { id: 3,
          user_id: 3,
          family_id: 1
        },
        { id: 4,
          user_id: 4,
          family_id: 1
        },
        { id: 5,
          user_id: 5,
          family_id: 1
        },
        { id: 6,
          user_id: 6,
          family_id: 1
        },
        { id: 7,
          user_id: 7,
          family_id: 1
        },
        { id: 8,
          user_id: 8,
          family_id: 1
        },
        { id: 9,
         user_id: 9,
         family_id: 1
       }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_families_id_seq\', (SELECT MAX(id) FROM users_families));')
    })
}

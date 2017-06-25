exports.seed = function(knex) {
  return knex('users_families').del()
    .then(function() {
      return knex('users_families').insert([
        { id: 1,
          user_id: 1,
          family_id: 1,
          role: '1'
        },
        { id: 2,
          user_id: 2,
          family_id: 1,
          role: '2'
        },
        { id: 3,
          user_id: 3,
          family_id: 1,
          role: 'sib1'
        },
        { id: 4,
          user_id: 4,
          family_id: 1,
          role: '6'
        },
        { id: 5,
          user_id: 5,
          family_id: 1,
          role: '7'
        },
        { id: 6,
          user_id: 6,
          family_id: 1,
          role: '13'
        },
        { id: 7,
          user_id: 7,
          family_id: 1,
          role: '14'
        },
        { id: 8,
          user_id: 8,
          family_id: 1,
          role: '15'
        },
        { id: 9,
          user_id: 9,
          family_id: 1,
          role: '12'
        },
        { id: 10,
          user_id: 10,
          family_id: 1,
          role: '3'
        },
        { id: 11,
          user_id: 11,
          family_id: 1,
          role: '4'
        },
        { id: 12,
          user_id: 12,
          family_id: 1,
          role: '5'
        },
        { id: 13,
          user_id: 13,
          family_id: 1,
          role: '8'
        },
        { id: 14,
          user_id: 14,
          family_id: 1,
          role: '9'
        },
        { id: 15,
          user_id: 15,
          family_id: 1,
          role: '10'
        },
        { id: 16,
          user_id: 16,
          family_id: 1,
          role: '11'
        },
        { id: 17,
          user_id: 17,
          family_id: 1,
          role: '18'
        },
        { id: 18,
          user_id: 18,
          family_id: 1,
          role: '17'
        },
        { id: 19,
          user_id: 19,
          family_id: 1,
          role: '19'
        },
        { id: 20,
          user_id: 20,
          family_id: 1,
          role: '20'
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_families_id_seq\', (SELECT MAX(id) FROM users_families));')
    })
}

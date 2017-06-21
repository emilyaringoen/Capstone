exports.seed = function(knex) {
  return knex('families').del()
    .then(function() {
      return knex('families').insert([
        { id: 1,
          family_name: 'Ringoen',
        },
        { id: 2,
          family_name: 'Fischer',
        },
        { id: 3,
          family_name: 'Brandt',
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'families_id_seq\', (SELECT MAX(id) FROM families));')
    })
}

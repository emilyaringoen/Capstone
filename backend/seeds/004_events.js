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
          event_date: '1960-01-01'
        },
        { id: 3,
          title: 'Joan1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.',
          event_date: '1950-01-01'
        },
        { id: 4,
          title: 'Joan2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.',
          event_date: '1945-01-01'
        },
        { id: 5,
          title: 'Joan3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.',
          event_date: '1929-01-01'
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'events_id_seq\', (SELECT MAX(id) FROM events));')
    })
}

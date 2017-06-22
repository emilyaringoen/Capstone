exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        { id: 1,
          full_name: 'Emily Ann Ringoen',
          email: 'emilyringoen@gmail.com',
          password: 'password',
          profile_picture: null,
          bio: 'Human.',
          date_of_birth: '1993-09-21',
          parent_1: 2,
          parent_2: 10
        },
        { id: 2,
          full_name: 'Susan Leight Ringoen',
          email: 'sringoen@me.com',
          password: 'password',
          profile_picture: null,
          bio: 'Human.',
          date_of_birth: '1965-04-16'
        },
        { id: 3,
          full_name: 'Jamie Marie Fischer',
          email: 'jamie.ringoen@yahoo.com',
          password: 'password',
          profile_picture: null,
          bio: 'Human.',
          date_of_birth: '1991-12-13',
          parent_1: 2,
          parent_2: 10
        },
        { id: 4,
          full_name: 'Joan Marie Ringoen',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/jU8zsk',
          bio: 'Bassoon, Speech Pathologist, Mother of Three, Philanthropist',
          date_of_birth: '1929-03-10',
          parent_1: 9,
          parent_2: 6
        },
        { id: 5,
          full_name: 'Richard Ringoen',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/mUeHdQ',
          bio: 'Engineer. CEO. Father.',
          date_of_birth: '1929-01-01',
          parent_1: 7,
          parent_2: 8
        },
        { id: 6,
          full_name: 'John C Brandt',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/bG5esk',
          bio: 'Imigrant from Germany.',
          date_of_birth: '1929-01-01'
        },
        { id: 9,
          full_name: 'Marie Brandt',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/izng55',
          bio: 'Imigrant from Germany.',
          date_of_birth: '1929-01-01'
        },
        { id: 7,
          full_name: 'Evelyn Ringoen',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/enE5Xk',
          bio: 'Imigrant from Germany.',
          date_of_birth: '1929-01-01'
        },
        { id: 8,
          full_name: 'Elmer Ringoen',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/enE5Xk',
          bio: 'Imigrant from Germany.',
          date_of_birth: '1929-01-01'
        },
        { id: 10,
          full_name: 'John Ringoen',
          email: 'n/a',
          password: 'password',
          profile_picture: 'https://ibb.co/enE5Xk',
          bio: 'Imigrant from Germany.',
          date_of_birth: '1961-06-27',
          parent_1: 4,
          parent_2: 5
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));')
    })
}

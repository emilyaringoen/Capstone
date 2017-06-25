exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('full_name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('profile_picture')
    table.text('bio').notNullable()
    table.date('date_of_birth').notNullable()
    table.string('gender').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}

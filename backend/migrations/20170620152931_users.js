exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('full_name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('profile_picture')
    table.string('bio').notNullable()
    table.date('date_of_birth').notNullable()
    table.integer('parent_1').references('users.id')
    table.integer('parent_2').references('users.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}

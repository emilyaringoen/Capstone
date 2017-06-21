exports.up = function(knex) {
  return knex.schema.createTable('users_families', (table) => {
    table.increments()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.integer('family_id').references('families.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users_families')
}

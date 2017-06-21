exports.up = function(knex) {
  return knex.schema.createTable('families', (table) => {
    table.increments()
    table.string('family_name').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('families')
}

exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.date('event_date').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('events')
}

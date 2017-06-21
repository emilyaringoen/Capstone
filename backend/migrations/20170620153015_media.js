exports.up = function(knex) {
  return knex.schema.createTable('media', (table) => {
    table.increments()
    table.string('media_url').notNullable()
    table.integer('event_id').references('events.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('media')
}

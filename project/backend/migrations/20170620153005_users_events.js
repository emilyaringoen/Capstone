exports.up = function(knex) {
  return knex.schema.createTable('users_events', (table) => {
    table.increments()
    table.integer('user_id').references('users.id')
    table.integer('event_id').references('events.id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users_events')
}

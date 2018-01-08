exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('cost').notNullable();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('items');
};

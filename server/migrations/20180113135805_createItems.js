
exports.up = function (knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.string('name');
    table.string('picture');
    table.integer('old_price');
    table.integer('new_price');
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

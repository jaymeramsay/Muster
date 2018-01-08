exports.up = function (knex, Promise) {
  return knex.schema.createTable('users_items', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table.integer('items_id')
      .notNullable()
      .references('id')
      .inTable('items');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  knex.schema.dropTable();
};

exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.string('amazon_id').notNullable();
    table.integer('salary').notNullable();
    table.timestamps(true, true);
  });
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};

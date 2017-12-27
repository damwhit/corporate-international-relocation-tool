
exports.up = function (knex, Promise) {
  knex.schema.createTable('admins', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.timestamps(true, true);
  });

  knex.schema.createTable('families', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.time('move_out_date');
    table.integer('admin_id').unsigned();
    table.foreign('admin_id').references('admins.id');
    table.timestamps(true, true);
  });

  knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.integer('lead_time').unsigned();
    table.timestamps(true, true);
  });

  knex.schema.createTable('family_tasks', function (table) {
    table.increments('id').primary();
    table.integer('family_id').unsigned().references('families.id');
    table.integer('task_id').unsigned().references('tasks.id');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('admins'),
    knex.schema.dropTable('families'),
    knex.schema.dropTable('tasks'),
    knex.schema.dropTable('family_tasks'),
  ]);
};

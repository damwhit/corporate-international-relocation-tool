
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
  .then(function () {
    // Inserts seed entries
    return knex('admins').insert([
      {
        id: 1, 
        name: process.env.ADMIN_NAME, 
        email: process.env.ADMIN_EMAIL
      }
    ]);
  });
};


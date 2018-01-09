exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          first_name: 'Peter',
          last_name: 'Sarkis',
          email: 'petersarkis@gmail.com'
        },
        {
          id: 2,
          first_name: 'Daria',
          last_name: 'Morgandorfer',
          email: 'sicksadworld@madness.com'
        },
        {
          id: 3,
          first_name: 'PJ',
          last_name: 'Harvey',
          email: 'breathing@gmail.com'
        }
      ]);
    });
};

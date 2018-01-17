exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          first_name: 'Peter',
          last_name: 'Sarkis',
          email: 'petersarkis@gmail.com',
          hashed_password: 'wubbalubbadubdub',
          amazon_id: ''
        },
        {
          first_name: 'Daria',
          last_name: 'Morgandorfer',
          email: 'sicksadworld@madness.com',
          hashed_password: 'trent',
          amazon_id: ''
        },
        {
          first_name: 'PJ',
          last_name: 'Harvey',
          email: 'breathing@gmail.com',
          hashed_password: 'wickedtongue',
          amazon_id: ''
        }
      ]);
    });
};

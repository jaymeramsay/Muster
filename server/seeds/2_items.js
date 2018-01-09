exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
          id: 1,
          name: 'Pearl Premier Drum set',
          cost: 400,
          user_id: 1
        },
        {
          id: 2,
          name: 'Doc Martens Boots',
          cost: 120,
          user_id: 2
        },
        {
          id: 3,
          name: 'Instapot',
          cost: 150,
          user_id: 3
        }
      ]);
    });
};

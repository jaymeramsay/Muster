exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([{
          id: 1,
          name: 'Pearl Premier Drum set',
          picture: 'https://s3.amazonaws.com/images.static.steveweissmusic.com/products/images/uploads/1130852_23178_popup.jpg',
          old_price: 400,
          new_price: 325,
          user_id: 1
        },
        {
          id: 2,
          name: 'Doc Martens Boots',
          picture: 'https://media.journeys.com/images/products/1_74888_ZM.JPG',
          old_price: 175,
          new_price: 120,
          user_id: 2
        },
        {
          id: 3,
          name: 'Instapot',
          picture: 'https://instantpot.com/wp-content/uploads/2014/07/IP-DUO80.png',
          old_price: 150,
          new_price: 115,
          user_id: 3
        }
      ]);
    });
};


'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex('messages').del()
    .then(() => {
      return knex('messages').insert([
        {
        	id:1,
          name:'Criminal',
          message:'What Are You?',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'

        },
        {
        	id:2,
          name:'Batman',
          message:'I\'m Batman',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('messages_id_seq', (SELECT MAX(id) FROM messages));"
    );
  });
};
n

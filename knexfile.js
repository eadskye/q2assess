"use strict"
module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/messages_dev'
    },

    test: {
      client: 'pg',
      connection:'postgres://localhost/messages_test'
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL

        }
    };

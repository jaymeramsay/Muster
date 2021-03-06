// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/muster_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/muster_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

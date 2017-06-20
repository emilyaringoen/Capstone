'use strict'

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/artifacts_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/artifacts_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}

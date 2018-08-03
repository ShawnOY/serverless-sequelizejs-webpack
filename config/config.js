module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3'
  },
  test: {
    dialect: 'sqlite'
  },
  'production': {
    dialect: 'postgres',
    username: 'postgres',
    password: null,
    database: 'database_production',
    host: '127.0.0.1'
  }
}

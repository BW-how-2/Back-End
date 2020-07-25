const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/api/auth"

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/howto.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    testing: {
      client: "sqlite3",
      connection: {
        filename: "./database/test.db3",
      },
      useNullAsDefault: true,
      migrations: {
        directory: "./database/migrations",
      },
    },
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
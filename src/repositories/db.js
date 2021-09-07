import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      "postgres://sidbyptc:UhTye7hHu0qThZFNhMgEPDi7K_jHvyXa@queenie.db.elephantsql.com/sidbyptc",
  });
  global.connection = pool;

  return pool.connect();
}

export { connect };

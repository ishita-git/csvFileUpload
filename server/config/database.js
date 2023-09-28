const { Pool } = require('pg');

// Create a database connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BankStatement',
  password: '19sep2001',
  port: 5432, // PostgreSQL default port
});

module.exports = pool;
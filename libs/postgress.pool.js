const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12201219',
  database: 'JOSECANOVADB'
});

module.exports = pool;

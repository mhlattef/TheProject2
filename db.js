import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'hello_world'
});

export function query(text, params) { return pool.query(text, params); }
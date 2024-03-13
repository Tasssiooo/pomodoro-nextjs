import { Pool } from "pg";

const pool = new Pool({
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT as any,
  database: process.env.NEXT_PUBLIC_DB,
});

export default pool;

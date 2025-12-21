import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const ConnectionPool = new Pool({
  connectionString: process.env.PG_URL,
  ssl: false,
});

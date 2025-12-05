import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
const client = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.DB,
    password: process.env.PG_PASS,
    port: 5434,
});
export default client;
//# sourceMappingURL=pg.connect.js.map
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import router from "./routes/user.route.js";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

// Load .env from one level above /src
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Server logic
const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`auth running on ${PORT}`);
});

// creating table
// app.get("/create", async (req, res) => {
//   const connection = await client.connect();

//   const query = `
//    CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       fname VARCHAR(20) NOT NULL,
//       mname VARCHAR(20),
//       lname VARCHAR(20),
//       contact_no VARCHAR(20),
//       email VARCHAR(150) UNIQUE NOT NULL,
//       password VARCHAR(200) NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;

//   try {
//     await connection.query({
//       text: query,
//     });
//     res.send("Table created in pg");
//   } catch (error) {
//     console.error(error);
//   }
// });

// // create user
// app.post("/create/user", async (req, res) => {
//   const connection = await client.connect();
//   const { fname, mname, lname, contact_no, email, password } = req.body;

//   const query = `
//   INSERT INTO users (
//   fname,
//   mname,
//   lname,
//   contact_no,
//   email,
//   password
// ) VALUES (
//   $1, $2, $3, $4, $5, $6
// ) RETURNING *;
//   `;

//   const values = [fname, mname, lname, contact_no, email, password];

//   const result = await connection.query(query, values);
//   res.status(201).send(result.rows[0]);
// });

// app.patch("/update/user/:id", async (req, res) => {
//   const connection = await client.connect();
//   const id = req.params.id;
//   const allowedFields = ["contact_no", "email", "password"];
//   console.log("PATCH hit", req.body, req.params.id);
//   const keys = Object.keys(req.body);

//   // Filter only allowed fields
//   const updates = keys.filter((key) => allowedFields.includes(key));

//   if (updates.length === 0) {
//     return res.status(400).send("No valid fields to update");
//   }

//   // Build dynamic SQL
//   const setClauses = updates.map((field, index) => `${field} = $${index + 1}`);

//   const values = updates.map((field) => req.body[field]);

//   const updateQuery = `
//     UPDATE users
//     SET ${setClauses.join(", ")}
//     WHERE id = $${updates.length + 1}
//     RETURNING *;
//   `;

//   values.push(id);

//   try {
//     const result = await connection.query(updateQuery, values);
//     console.log(setClauses.join(", "));
//     console.log(values);
//     res.status(200).send(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Update failed");
//   }
// });

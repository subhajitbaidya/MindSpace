// File: packages/services/auth-service/src/index.js

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from one level above /src
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from book-service");
});

app.listen(PORT, () => {
  console.log(`auth running on ${PORT}`);
});

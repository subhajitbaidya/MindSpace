// File: packages/services/auth-service/src/index.js

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from one level above /src
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Hello from auth");
});

app.listen(PORT, () => {
  console.log(`auth running on ${PORT}`);
});

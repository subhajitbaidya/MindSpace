import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.get("/health", (req, res) => {
  res.send("runnning");
});
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`product running on ${PORT}`);
});

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

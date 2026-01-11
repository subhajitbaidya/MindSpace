import express from "express";
import router from "./routes/journal.routes.js";
import { connectDB } from "./db/mongoose.connect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5003;
app.use(cookieParser());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
//# sourceMappingURL=index.js.map
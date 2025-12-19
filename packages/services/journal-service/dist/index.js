import express from "express";
import router from "./routes/userjournal.route.js";
import { connectDB } from "./db/mongoose.connect.js";
connectDB();
const app = express();
const PORT = process.env.PORT || 5003;
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
//# sourceMappingURL=index.js.map
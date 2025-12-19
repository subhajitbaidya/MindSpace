import mongoose from "mongoose";
import { ENV } from "../config/env.js";
export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
    }
    catch (err) {
        console.error("MongoDB connection failed:", err);
        process.exit(1);
    }
};
export const closeDB = async () => {
    try {
        await mongoose.connection.close();
    }
    catch (error) {
        console.error(error);
    }
};
//# sourceMappingURL=mongoose.connect.js.map
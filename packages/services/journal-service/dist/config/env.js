import dotenv from "dotenv";
dotenv.config();
export const ENV = {
    PORT: process.env.PORT || 5002,
    MONGO_URI: process.env.MONGO_URI || "",
};
//# sourceMappingURL=env.js.map
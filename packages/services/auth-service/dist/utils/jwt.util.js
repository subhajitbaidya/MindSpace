import jwt, {} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const encryptUsers = (payload) => {
    const secret = process.env.JWT_SECRET;
    const options = {
        expiresIn: "15m",
    };
    return jwt.sign(payload, secret, options);
};
//# sourceMappingURL=jwt.util.js.map
import jwt, { type SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const encryptUsers = (payload: any) => {
  const secret = process.env.JWT_SECRET as string;

  const options: SignOptions = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options);
};

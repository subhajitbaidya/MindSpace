import jwt, { type SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const encryptUsers = (payload: string) => {
  const secret = process.env.JWT_SECRET as string;

  const options: SignOptions = {
    expiresIn: "15m",
  };

  return jwt.sign({ sub: payload }, secret, options);
};

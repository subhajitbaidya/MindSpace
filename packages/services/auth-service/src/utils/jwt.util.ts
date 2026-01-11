import jwt, { type SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

type JwtPayload = {
  sub: string; // publicID
  name: string;
};

export const encryptUsers = (payload: JwtPayload) => {
  const secret = process.env.JWT_SECRET as string;

  const options: SignOptions = {
    expiresIn: "15m",
  };

  return jwt.sign(payload, secret, options);
};

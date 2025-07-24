import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
class EncryptUsers {
  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  createJWTtokens(user) {
    const payload = { id: user.id, name: user.username, email: user.email };
    try {
      return jwt.sign(payload, this.secret, { expiresIn: "1d" });
    } catch (error) {
      console.error(error);
      throw new Error("token creation failed, unable to authenticate");
    }
  }

  validateJWTtokens(token) {
    return jwt.verify(token, this.secret, (err, decoded) => {
      if (err) {
        throw new Error("Invalid or expired token");
      } else {
        return decoded;
      }
    });
  }
}
export default EncryptUsers;

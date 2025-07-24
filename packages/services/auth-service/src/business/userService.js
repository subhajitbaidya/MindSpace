import bcrypt from "bcryptjs";
import JwtClass from "../utils/Jwt.js";

export class UserService {
  constructor(userModel) {
    this.userModel = userModel;
    this.encrypt = new JwtClass();
  }

  async registerUser(userData) {
    const existingUser = await this.userModel.findUserByUserEmail(
      userData.email
    );
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10); // 10 = salt rounds
    const userToSave = { ...userData, password: hashedPassword };

    const user = await this.userModel.createUser(userToSave);
    return this.encrypt.createJWTtokens(user);
  }

  // TODO: Complete login feature
  async loginUser(userData) {
    const findUser = await this.userModel.findUserByUsername(userData);
    if (!findUser) {
      throw new Error("user not registered");
    }
  }

  async getUsers() {
    return await this.userModel.getAllUsers();
  }
}

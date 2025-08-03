import bcrypt from "bcryptjs";
import JwtClass from "../utils/Jwt.js";

export class UserService {
  constructor(userModel) {
    this.userModel = userModel;
    this.encrypt = new JwtClass();
  }

  async registerUser(userData) {
    const existingUser = await this.userModel.findUserInDB(userData.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const userToSave = { ...userData, password: hashedPassword };

    const user = await this.userModel.createUser(userToSave);
    return this.encrypt.createJWTtokens(user.email);
  }

  async loginUser(userData) {
    if (!userData || !userData.email || !userData.password) {
      throw new Error("Email and password are required");
    }

    const user = await this.userModel.findUserInDB(userData.email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Validate password using bcrypt
    const isPasswordValid = await bcrypt.compare(
      userData.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    return this.encrypt.createJWTtokens(user);
  }

  async getUsers() {
    return await this.userModel.getAllUsers();
  }
}

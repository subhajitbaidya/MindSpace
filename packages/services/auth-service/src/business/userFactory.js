import bcrypt from "bcryptjs";
export class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async registerUser(userData) {
    const existingUser = await this.userModel.findUserByUsername(
      userData.username
    );
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10); // 10 = salt rounds
    const userToSave = { ...userData, password: hashedPassword };
    return await this.userModel.createUser(userToSave);
  }

  async getUsers() {
    return await this.userModel.getAllUsers();
  }
}

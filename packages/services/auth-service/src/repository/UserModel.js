// models/UserModel.js
import { User } from "../models/userSchema.js";

export class UserModel {
  async findUserByUserEmail(email) {
    return await User.findOne({ email });
  }

  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getAllUsers() {
    return await User.find();
  }
}

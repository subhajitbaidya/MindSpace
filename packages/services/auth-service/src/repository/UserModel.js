// models/UserModel.js
import { User } from "../models/UserSchema.js";

export class UserModel {
  async findUserByUsername(username) {
    return await User.findOne({ username });
  }

  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getAllUsers() {
    return await User.find();
  }
}

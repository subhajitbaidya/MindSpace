import bcrypt from "bcryptjs";
import { UserModel } from "../repository/user.repo.js";
import { encryptUsers } from "../utils/jwt.util.js";
import { ulid } from "ulid";
export class UserService {
  constructor(private userRepo: UserModel) {}

  async registerUser(data: any) {
    const existingUser = await this.userRepo.getUserByEmail(data.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const publicID = ulid();
    const userToSave = {
      ...data,
      password: hashedPassword,
      publicID: publicID,
    };
    await this.userRepo.createUser(userToSave);
    return encryptUsers(userToSave.publicID);
  }

  async loginUser(data: any) {
    if (!data || !data.password) {
      throw new Error("Email and password are required");
    }

    let user = await this.userRepo.getUserByEmail(data.email);

    if (!data.email) {
      user = await this.userRepo.getUserByContact(data.contact_no);
    }

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    return encryptUsers(user);
  }
}

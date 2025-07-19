// di/container.js
import { UserModel } from "../models/UserModel.js";
import { UserService } from "../business/userFactory.js";
import { UserController } from "../controllers/user.js";

//Singleton instances
const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

export const container = {
  userController,
};

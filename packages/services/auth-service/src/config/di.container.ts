// di/container.js
import { UserService } from "../service/user.service.js";
import { UserController } from "../controllers/user.controller.js";
import { UserModel } from "../repository/user.repo.js";

//Singleton instances
const userModel = new UserModel();
const userService = new UserService(userModel);
const userController = new UserController(userService);

export const container = {
  userController,
};

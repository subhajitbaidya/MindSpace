// routes/userRoutes.js
import express from "express";
import { container } from "../config/container.js";
import CheckLoggedInUser from "../middlewares/AuthValidate.js";

const router = express.Router();

router.post("/signup", container.userController.register);
router.post("/login", container.userController.login);

router.get("/getusers", CheckLoggedInUser, container.userController.getUsers);

export default router;

// routes/userRoutes.js
import express from "express";
import { container } from "../config/container.js";

const router = express.Router();

router.post("/signup", container.userController.register);
router.get("/getusers", container.userController.getUsers);

export default router;

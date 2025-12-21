import express from "express";
import { container } from "../config/di.container.js";
const router = express.Router();
router.post("/signup", container.userController.register);
router.post("/login", container.userController.login);
export default router;
//# sourceMappingURL=user.route.js.map
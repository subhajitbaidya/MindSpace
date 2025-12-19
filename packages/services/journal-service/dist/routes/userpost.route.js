import { JournalController } from "../controllers/journal.controller.js";
import express from "express";
const router = express.Router();
const control = new JournalController();
router.post("/savepost", control.savepost);
export default router;
//# sourceMappingURL=userpost.route.js.map
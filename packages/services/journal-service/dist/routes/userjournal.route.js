import { JournalController } from "../controllers/userjournal.controller.js";
import express from "express";
const router = express.Router();
const control = new JournalController();
router.post("/savepost", control.savejournal);
export default router;
//# sourceMappingURL=userjournal.route.js.map
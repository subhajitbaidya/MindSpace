import { JournalController } from "../controllers/journal.controller.js";
import express from "express";

const router = express.Router();

const control = new JournalController();

router.post("/savepost", control.savejournal);
router.get("/getpost", control.getLastJournal);

export default router;

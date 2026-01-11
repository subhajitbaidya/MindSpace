import { JournalController } from "../controllers/journal.controller.js";
import express from "express";

const router = express.Router();

const control = new JournalController();

router.post("/savepost", control.savejournal);
router.get("/getpost", control.getJournals);

export default router;

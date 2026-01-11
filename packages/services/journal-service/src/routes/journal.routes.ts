import { JournalController } from "../controllers/journal.controller.js";
import express from "express";

const router = express.Router();

const control = new JournalController();

router.post("/savepost", control.savejournal);

export default router;

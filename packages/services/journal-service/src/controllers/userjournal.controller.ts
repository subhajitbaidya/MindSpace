import type { Request, Response } from "express";
import { Post } from "../models/userjournal.model.js";

export class JournalController {
  savejournal = async (req: Request, res: Response) => {
    try {
      const journalentry = await req.body;
      Post.insertOne({ ...journalentry });

      res
        .status(201)
        .json({ message: `Successfully added ${journalentry.content}` });
    } catch (error: any) {
      res.status(400).json({ err: error.message });
    }
  };
}

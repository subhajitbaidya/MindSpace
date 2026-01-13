import type { Request, Response } from "express";
import { Journal } from "../models/journal.model.js";
import jwt, { type JwtPayload } from "jsonwebtoken";

interface AuthJwtPayload extends JwtPayload {
  sub: string; // publicID (required)
  name: string; // username
}

export class JournalController {
  savejournal = async (req: Request, res: Response) => {
    try {
      const journalEntry = req.body;
      const token = req.cookies?.access_token;

      console.log(journalEntry);
      console.log(token);
      console.log(process.env.JWT_SECRET as string);

      if (!token) {
        return res.status(401).json({ message: "Missing token" });
      }

      const decoded = jwt.verify(
        token as string,
        process.env.JWT_SECRET as string
      ) as AuthJwtPayload;

      console.log("decoded", decoded);

      const publicID = decoded.sub;
      const name = decoded.name;

      if (!publicID || !name) {
        return res.status(401).json({ message: "Invalid token payload" });
      }

      const post = await Journal.create({
        ...journalEntry,
        createdBy: decoded.sub,
        username: decoded.name,
      });

      res.status(201).json({
        success: true,
        data: post,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  };

  getLastJournal = async (req: Request, res: Response) => {
    try {
      const token = req.cookies?.access_token;

      if (!token) {
        return res.status(401).json({ message: "Missing token" });
      }

      // Verify JWT
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as AuthJwtPayload;

      const userId = decoded.sub;
      if (!userId) {
        return res.status(401).json({ message: "Invalid token payload" });
      }

      const journals = await Journal.find({ createdBy: userId })
        .sort({ date: -1 })
        .limit(3)
        .lean();

      res.status(200).json({ success: true, data: journals });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
}

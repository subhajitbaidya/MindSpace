import { Journal } from "../models/journal.model.js";
import jwt, {} from "jsonwebtoken";
export class JournalController {
    savejournal = async (req, res) => {
        try {
            const journalEntry = req.body;
            const token = req.cookies?.access_token;
            console.log(journalEntry);
            console.log(token);
            console.log(process.env.JWT_SECRET);
            if (!token) {
                return res.status(401).json({ message: "Missing token" });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
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
        }
        catch (error) {
            res.status(401).json({
                success: false,
                message: error.message,
            });
        }
    };
    getJournals = async (req, res) => {
        try {
            const token = req.cookies?.access_token;
            if (!token) {
                return res.status(401).json({ message: "Missing token" });
            }
            // Verify JWT
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.sub;
            if (!userId) {
                return res.status(401).json({ message: "Invalid token payload" });
            }
            const journals = await Journal.find({ createdBy: userId })
                .sort({ date: -1 })
                .limit(3)
                .lean();
            res.status(200).json({ success: true, data: journals });
        }
        catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    };
}
//# sourceMappingURL=journal.controller.js.map
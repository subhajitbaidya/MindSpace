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
}
//# sourceMappingURL=journal.controller.js.map
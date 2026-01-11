import { Post } from "../models/userjournal.model.js";
export class JournalController {
    savejournal = async (req, res) => {
        try {
            const journalEntry = req.body;
            // Create & save document (returns full document)
            const post = await Post.create({
                date: journalEntry.date,
                mood: journalEntry.mood,
                title: journalEntry.title,
                content: journalEntry.content,
                consent: journalEntry.consent,
            });
            console.log(post);
            res.status(201).json({
                success: true,
                data: post, // ✅ full document with mood, content, _id, etc.
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        }
    };
}
//# sourceMappingURL=userjournal.controller.js.map
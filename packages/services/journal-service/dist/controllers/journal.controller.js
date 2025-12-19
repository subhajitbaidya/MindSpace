import { Post } from "../models/userpost.model.js";
export class JournalController {
    savepost = async (req, res) => {
        try {
            const journalentry = await req.body;
            Post.insertOne({ ...journalentry });
            res
                .status(201)
                .json({ message: `Successfully added ${journalentry.content}` });
        }
        catch (error) {
            res.status(400).json({ err: error.message });
        }
    };
}
//# sourceMappingURL=journal.controller.js.map
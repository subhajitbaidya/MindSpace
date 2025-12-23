import mongoose, { Schema, Document } from "mongoose";
const PostSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        enum: ["great", "okay", "struggling"],
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
export const Post = mongoose.model("journal", PostSchema);
//# sourceMappingURL=userjournal.model.js.map
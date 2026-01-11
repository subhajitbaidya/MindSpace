import mongoose, { Schema, Document } from "mongoose";
const PostSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    mood: {
        type: String,
        enum: ["great", "okay", "struggling"],
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    consent: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
PostSchema.index({ date: -1 });
PostSchema.index({ mood: 1 });
// Use singular name → Mongo will create `journals` collection
export const Post = mongoose.model("Post", PostSchema);
//# sourceMappingURL=userjournal.model.js.map
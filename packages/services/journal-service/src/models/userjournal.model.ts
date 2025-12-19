import mongoose, { Schema, Document } from "mongoose";

type Mood = "great" | "okay" | "struggling";

export interface IPost extends Document {
  date: string;
  mood: Mood;
  content: string;
  prompt: string;
}

const PostSchema = new Schema<IPost>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model<IPost>("Post", PostSchema);

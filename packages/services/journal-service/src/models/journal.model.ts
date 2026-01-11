import mongoose, { Schema } from "mongoose";

export type Mood = "great" | "okay" | "struggling";

export interface IPost {
  createdBy: string;
  username: string;
  date: Date;
  mood: Mood;
  title: string;
  content: string;
  consent: boolean;
}

const PostSchema = new Schema<IPost>(
  {
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
      trim: true,
    },
    consent: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: String,
      required: true,
      immutable: true,
      index: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

PostSchema.index({ date: -1 });
PostSchema.index({ mood: 1 });

export const Journal = mongoose.model<IPost>("Journal", PostSchema);

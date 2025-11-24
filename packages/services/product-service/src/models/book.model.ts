import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

const BookSchema: Schema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBook>("Book", BookSchema);

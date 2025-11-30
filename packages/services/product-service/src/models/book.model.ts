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

const BookSchema = new Schema<IBook>({
  id: Number,
  title: String,
  author: String,
  price: Number,
  category: String,
  rating: Number,
  reviews: Number,
  image: String,
  description: String,
});

export const BookModel = mongoose.model<IBook>("Book", BookSchema);

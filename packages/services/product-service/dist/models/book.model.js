import mongoose, { Schema, Document } from "mongoose";
const BookSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });
export const Book = mongoose.model("Book", BookSchema);
//# sourceMappingURL=book.model.js.map
import mongoose, { Schema, Document } from "mongoose";
const BookSchema = new Schema({
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
export const BookModel = mongoose.model("Book", BookSchema);
//# sourceMappingURL=book.model.js.map
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  productName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
  categoryName: {
    type: String,
    required: true,
  },
  subCategoryName: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

export const Category = mongoose.model("category", CategorySchema);

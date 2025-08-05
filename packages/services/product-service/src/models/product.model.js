import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      url: String,
      alt: String,
    },
    categoryName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const productModel = mongoose.model("products", ProductSchema);

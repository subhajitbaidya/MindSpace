import mongoose from "mongoose";

const productReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    comments: {
      type: Number,
      min: 0,
      max: 120,
    },
  },
  { timestamps: true }
);

export const Review = mongoose.model("reviews", productReviewSchema);

import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
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
});

export const Inventory = mongoose.model("inventory", InventorySchema);

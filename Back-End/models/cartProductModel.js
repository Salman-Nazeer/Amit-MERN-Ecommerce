import mongoose from "mongoose";

const addToCartSchema = new mongoose.Schema(
  {
    productName: String,
    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const addToCartModel = mongoose.model("addToCart", addToCartSchema);

export default addToCartModel;

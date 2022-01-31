import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // maxlength: 60,
    },
    colors: [{
      type: String,
      required: true,
      // maxlength: 60,
    }],
    slug: {
      type: String,
      required: true,
      unique: true
      // maxlength: 60,
    },
    category: {
      type: String,
      required: true,
      // maxlength: 10,
    },
    items: [{
      type: String,
      required: true,
    }],
    frontImage: {
      type: String,
      required: true,
    },
    rightImage: {
      type: String,
      required: true,
    },
    leftImage: {
      type: String,
      required: true,
    },
    actualPrice: {
      type: Number,
      required: true,
    },
    discPrice: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Products ||
  mongoose.model("Products", ProductSchema);

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default CategoryModel;

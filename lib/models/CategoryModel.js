import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

const CategoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default CategoryModel;
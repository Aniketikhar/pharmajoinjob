import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  jobDescription: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: String,
  
  },
  jobRole: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    min: {
      type: Number,
      min: 0,
    },
    max: {
      type: Number,
      min: 0,
    },
    currency: {
      type: String,
      trim: true,
      default: 'RS',
    },
  },
  vacancies: {
    type: String,
    trim: true,
  },
  jobLevel: {
    type: String, 
    required: true,
  },
  location: {
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
  workProfile: {
    type: String,
    required: true,
  },
  lastDateToApply: {
    type: Date,
  },
  applyLink: {
    type: String,
    required: true,
    trim: true,
  },
  postBy: {
    type: String,
  },
  postDate:{
    type: Date,
    default: Date.now()
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference the Category model
    required: true,
  },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

const JobModel = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default JobModel;

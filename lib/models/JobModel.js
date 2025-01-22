import mongoose from "mongoose";
import slugify from "slugify";

const jobSchema = new mongoose.Schema(
  {
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
      type: [String],
      required: true,
      validate: {
        validator: (tags) => Array.isArray(tags),
        message: "Tags must be an array of strings",
      },
    },
    jobRole: {
      type: String,
      trim: true,
    },
    salary: {
      type: String,
    },
    vacancies: {
      type: String,
      trim: true,
    },
    jobLevel: {
      type: String,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    workMode: {
      type: String,
    },
    jobType: {
      type: String,
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
    postDate: {
      type: Date,
      default: Date.now(),
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Reference the Category model
      required: true,
    },
    slug: { type: String, required: true, unique: true, trim: true },
  },
  { timestamps: true }
); 

jobSchema.pre("save", async function (next) {
  if (this.isModified("title")) {
    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let count = 1;

    while (await mongoose.models.Job.findOne({ slug })) {
      slug = `${baseSlug}-${count}`;
      count++;
    }

    this.slug = slug;
  }
  next();
});

const JobModel = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default JobModel;

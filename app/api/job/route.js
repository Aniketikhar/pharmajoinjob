import ConnectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import JobModel from "@/lib/models/JobModel";
import CategoryModel from "@/lib/models/CategoryModel";
import mongoose from "mongoose";
import slugify from "slugify";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  let slug = request.nextUrl.searchParams.get("job");
  let findby = request.nextUrl.searchParams.get("findby");

  try {
    if (slug) {
      const job = await JobModel.find({slug});
      if (!job) {
        return NextResponse.json(
          { success: false, msg: "Job not found" },
          { status: 200 }
        );
      }

      return NextResponse.json({ success: true, msg: "this is Job", job });

    } else if (findby) {
      const jobs = await JobModel.find({
        $or: [
          { tags: { $in: [new RegExp(`^${findby}$`, "i")] } }, // Case-insensitive regex for tags
          { location: { $regex: new RegExp(`^${findby}$`, "i") } } // Case-insensitive regex for location
        ],
      }).select('-jobDescription').sort({ createdAt: -1 });

      if (jobs?.length === 0) {
        return NextResponse.json(
          { success: false, msg: "No jobs found matching the criteria" },
          { status: 200 }
        );
      }

      return NextResponse.json({ success: true, msg: "Jobs found", jobs });
    } else {
      const jobs = await JobModel.find({}).select("-jobDescription").sort({ createdAt: -1 });
      

      return NextResponse.json({ success: true, msg: "All Jobs", jobs });
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { success: false, msg: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();
  const categoryId = body.categoryId;
  const jobTitle = body.jobTitle;

  if (!categoryId || !mongoose.Types.ObjectId.isValid(categoryId)) {
    return NextResponse.json({
      success: false,
      msg: "Invalid category ID format",
    });
  }

  const category = await CategoryModel.findById(categoryId);
  if (!category) {
    return NextResponse.json({
      success: false,
      msg: "Invalid category ID",
    });
  }

  let baseSlug = slugify(jobTitle, { lower: true, strict: true });
  let slug = baseSlug;
  let count = 1;

  // Ensure the slug is unique
  while (await JobModel.findOne({ slug })) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  const job = {
    title: body.jobTitle,
    company: body.company,
    jobDescription: body.jobDescription,
    tags: body.tags,
    jobRole: body.jobRole,
    salary: body.salary,
    vacancies: body.vacancies,
    jobLevel: body.jobLevel,
    location: body.location,
    workMode: body.workMode,
    jobType: body.jobType,
    lastDateToApply: body.lastDateToApply,
    applyLink: body.applyLink,
    postBy: body.postBy,
    category: categoryId,
    slug: slug,
  };

  await JobModel.create(job);

  return NextResponse.json({
    success: true,
    msg: "Job added successfully",
    job,
  });
}

// Update a job
// export async function PUT(request) {
//   const body = await request.json();
//   const { id, ...jobUpdates } = body; // Extract ID and the fields to be updated

//   if (!id) {
//     return NextResponse.json({
//       success: false,
//       msg: "Job ID is required for update",
//     });
//   }

//   // If category is updated, validate the category ID
//   if (jobUpdates.category) {
//     const category = await CategoryModel.findById(jobUpdates.category);
//     if (!category) {
//       return NextResponse.json({
//         success: false,
//         msg: "Invalid category ID",
//       });
//     }
//   }

//   const updatedJob = await JobModel.findByIdAndUpdate(
//     id,
//     jobUpdates,
//     { new: true, runValidators: true } // Return updated job and validate updates
//   );

//   if (!updatedJob) {
//     return NextResponse.json({
//       success: false,
//       msg: "Job not found",
//     });
//   }

//   return NextResponse.json({
//     success: true,
//     msg: "Job updated successfully",
//     job: updatedJob,
//   });
// }

// Delete a job
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id"); // Extract ID from query parameters

  if (!id) {
    return NextResponse.json({
      success: false,
      msg: "Job ID is required for deletion",
    });
  }

  const deletedJob = await JobModel.findByIdAndDelete(id);

  if (!deletedJob) {
    return NextResponse.json({
      success: false,
      msg: "Job not found",
    });
  }

  return NextResponse.json({
    success: true,
    msg: "Job deleted successfully",
    job: deletedJob,
  });
}

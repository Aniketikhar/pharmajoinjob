import ConnectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import JobModel from "@/lib/models/JobModel";
import CategoryModel from "@/lib/models/CategoryModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {

  const JobID = request.nextUrl.searchParams.get("id");
  console.log(JobID);

  if(JobID){
    const job = await JobModel.findById(JobID);
    if (!job) {
      return NextResponse.json({ success: false, msg: "Job not found" }, { status: 404 });
    }
  
    return NextResponse.json({ success: true, msg: "this is Job", job });
  }else{
    const jobs = await JobModel.find({});
  
  return NextResponse.json({ success: true, msg: "All Jobs", jobs });
  }

  
}

export async function POST(request) {
  const formData = await request.formData();

  const categoryId = formData.get("categoryId");

  const category = await CategoryModel.findById(categoryId);
  if (!category) {
    return NextResponse.json({
      success: false,
      msg: "Invalid category ID",
    });
  }

  const job = {
    title: formData.get("jobTitle"),
    company: formData.get("company"),
    jobDescription: formData.get("jobDescription"),
    tags: formData.get("tags"),
    jobRole: formData.get("jobRole"),
    salary: {
      min: formData.get("salaryMin"),
      max: formData.get("salaryMax"),
      currency: formData.get("currency"),
    },
    vacancies: formData.get("vacancies"),
    jobLevel: formData.get("jobLevel"),
    location: {
      country: formData.get("country"),
      city: formData.get("city"),
    },
    workProfile: formData.get("workProfile"),
    lastDateToApply: formData.get("lastDateToApply"),
    applyLink: formData.get("applyLink"),
    postBy: formData.get("postBy"),
    category: categoryId,
  };

  await JobModel.create(job);

  return NextResponse.json({
    success: true,
    msg: "Job added successfully",
    job,
  });
}


// Update a job
export async function PUT(request) {
  const body = await request.json();
  const { id, ...jobUpdates } = body; // Extract ID and the fields to be updated

  if (!id) {
    return NextResponse.json({
      success: false,
      msg: "Job ID is required for update",
    });
  }

  // If category is updated, validate the category ID
  if (jobUpdates.category) {
    const category = await CategoryModel.findById(jobUpdates.category);
    if (!category) {
      return NextResponse.json({
        success: false,
        msg: "Invalid category ID",
      });
    }
  }

  const updatedJob = await JobModel.findByIdAndUpdate(
    id,
    jobUpdates,
    { new: true, runValidators: true } // Return updated job and validate updates
  );

  if (!updatedJob) {
    return NextResponse.json({
      success: false,
      msg: "Job not found",
    });
  }

  return NextResponse.json({
    success: true,
    msg: "Job updated successfully",
    job: updatedJob,
  });
}

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

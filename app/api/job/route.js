import ConnectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import JobModel from "@/lib/models/JobModel";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "job hai kya" });
}

export async function POST(request){
    const formData = await request.formData();
    
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
        
    }

    await JobModel.create(job);

    return NextResponse.json({ success: true, msg: "Job added successfully", job });
     
}

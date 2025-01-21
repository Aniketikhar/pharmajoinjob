import ConnectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import CategoryModel from "@/lib/models/CategoryModel";
import JobModel from "@/lib/models/JobModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  try {
    const categryId = request.nextUrl.searchParams.get("id");

    if (categryId) {
      const jobs = await JobModel.find({ category: categryId });
      const category = await CategoryModel.findById(categryId);

      if (!category) {
        return NextResponse.json(
          { success: false, msg: "Category not found" },
          { status: 404 }
        );
      }

      if (!jobs.length) {
        return NextResponse.json(
          { success: false, msg: "Jobs not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        msg: "Jobs are found",
        jobs,
        category,
      });
    } else {
      const categories = await CategoryModel.find({});
      return NextResponse.json({ success: true, msg: "All Jobs", categories });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { success: false, msg: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function POST(request) {
  try {
    // Parse JSON body from the request
    const body = await request.json();

    const category = {
      name: body.name,
      description: body.description,
    };

    // Save the category to the database
    await CategoryModel.create(category);

    return NextResponse.json({
      success: true,
      msg: "Category added successfully",
      category,
    });
  } catch (error) {
    console.error("Error creating category:", error.message);
    return NextResponse.json(
      { success: false, msg: "Failed to create category" },
      { status: 500 }
    );
  }
}

// Update an existing category
export async function PUT(request) {
  const body = await request.json();
  const { id, name, description } = body;

  if (!id) {
    return NextResponse.json({
      success: false,
      msg: "Category ID is required for update",
    });
  }

  const updatedCategory = await CategoryModel.findByIdAndUpdate(
    id,
    { name, description },
    { new: true, runValidators: true } // Return the updated document
  );

  if (!updatedCategory) {
    return NextResponse.json({
      success: false,
      msg: "Category not found",
    });
  }

  return NextResponse.json({
    success: true,
    msg: "Category updated successfully",
    category: updatedCategory,
  });
}

// Delete an existing category
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({
      success: false,
      msg: "Category ID is required for deletion",
    });
  }

  const deletedCategory = await CategoryModel.findByIdAndDelete(id);

  if (!deletedCategory) {
    return NextResponse.json({
      success: false,
      msg: "Category not found",
    });
  }

  return NextResponse.json({
    success: true,
    msg: "Category deleted successfully",
    category: deletedCategory,
  });
}

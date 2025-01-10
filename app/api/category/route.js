import ConnectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import CategoryModel from "@/lib/models/CategoryModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  const Categories = await CategoryModel.find({});

  return NextResponse.json({
    success: true,
    msg: "All Categories",
    Categories,
  });
}

export async function POST(request) {
  const formData = await request.formData();

  const category = {
    name: formData.get("name"),
    description: formData.get("description"),
  };

  await CategoryModel.create(category);

  return NextResponse.json({
    success: true,
    msg: "Category added successfully",
    category,
  });
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

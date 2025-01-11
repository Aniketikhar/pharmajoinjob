"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  
  // Fetch categories function
  const fetchCategories = async () => {
    const response = await fetch("http://localhost:3000/api/category");
    const data = await response.json();
    setCategories(data.categories);
  };
  
  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);
  // Create new category function
  const createCategory = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: categoryName,
        description: categoryDescription,
      }),
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Category created successfully");
      setCategoryName("");
      setCategoryDescription("");
      fetchCategories(); // Refetch categories after creation
    } else {
      toast.error("Failed to create category");
    }
  };


  const updateCategory = async (id, name, description) => {
    try {
      const response = await fetch("/api/category", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, description }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success(data.msg || "Category updated successfully");
        fetchCategories(); // Refresh the categories list after update
      } else {
        toast.error(data.msg || "Failed to update category");
      }
    } catch (error) {
      console.error("Error updating category:", error.message);
      toast.error("An error occurred while updating the category.");
    }
  };
  

  // Delete category function
  const deleteCategory = async (id) => {
    const response = await fetch(`http://localhost:3000/api/category?id=${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Category deleted successfully");
      fetchCategories(); // Refetch categories after deletion
    } else {
      toast.error("Failed to delete category");
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Create Category Form */}
      <div className="border shadow-md p-4 rounded-md mt-4">
        <h2 className="font-bold text-xl">Create a new category</h2>
        <hr className="my-3" />
        <form onSubmit={createCategory} className="w-[100%]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Add category name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Category Description
              </label>
              <textarea
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Add category description"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>

      {/* Category List */}
      <div className="mt-4">
        <h2 className="font-bold text-xl mb-3">Category List</h2>
        <table className="w-full border border-collapse">
          <thead>
            <tr>
              <th className="border p-2 w-[10%]">Sr No.</th>
              <th className="border p-2 w-[60%]">Category Name</th>
              <th className="border p-2 w-[30%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((category, index) => (
              <tr key={category._id}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2 font-semibold">{category.name}</td>
                <td className="border p-2 text-center">
                  <button 
                  onClick={() => {
                    const newName = prompt("Enter new name:", category.name);
                    const newDescription = prompt("Enter new description:", category.description);
                    if (newName && newDescription) {
                      updateCategory(category._id, newName, newDescription);
                    }
                  }}
                  className="bg-blue-500 text-white p-2 rounded-md">
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to delete this category?")) {
                        deleteCategory(category._id);
                      }
                    }}
                    className="bg-red-500 text-white p-2 rounded-md ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;

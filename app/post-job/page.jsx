"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

// Dynamically import DescriptionBox
const DescriptionBox = dynamic(
  () => import("@/Components/AdminComponent/DescriptionBox"),
  { ssr: false }
);

const PostJobForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const createJob = async (data) => {
    setLoading(true);

    const formattedTags = Array.isArray(data?.tags)
      ? data?.tags.map((tag) => tag.trim()) // Ensure tags are trimmed
      : data?.tags.split(",").map((tag) => tag.trim());

    const response = await fetch(`https://pharmajoin.in/api/job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, tags: formattedTags }),
    });

    const datar = await response.json();
    if (datar.success) {
      toast.success("Job created successfully");
      setLoading(false);
      reset();
    } else {
      toast.error("Failed to create Job");
      setLoading(false);
    }
  };

  // Fetch categories function
  const fetchCategories = async () => {
    const response = await fetch(`https://pharmajoin.in/api/category`);
    const data = await response.json();
    setCategories(data.categories);
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-md">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <p className="text-gray-600 mb-6">
        Find the best talent for your company
      </p>
      <form onSubmit={handleSubmit(createJob)} className="space-y-4">
        {/* Job Title */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              {...register("jobTitle", { required: "Job Title is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add job title, role vacancies etc"
            />
            {errors.jobTitle && (
              <span className="text-red-500 text-sm">
                {errors.jobTitle.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              {...register("company", { required: "company is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add Company Name"
            />
            {errors.company && (
              <span className="text-red-500 text-sm">
                {errors.company.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          {/* Tags */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Tags
            </label>
            <input
              type="text"
              {...register("tags")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Job keyword, tags etc"
            />
          </div>
          {/* Job Role */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Job Role
            </label>
            <input
              type="text"
              {...register("jobRole")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Research Analyst, HR Manager etc."
            />
            {errors.jobRole && (
              <span className="text-red-500 text-sm">
                {errors.jobRole.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="text"
              {...register("salary")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="3.60-4.50 LPA"
            />
          </div>
          {/* Vacancies */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Vacancies
            </label>
            <input
              type="number"
              {...register("vacancies")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="12"
            />
          </div>

          {/* Job Level */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Job Level
            </label>
            <input
              type="text"
              {...register("jobLevel")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Fresher, 2-4 year, 8 year etc."
            />
          </div>
          {/* Job location */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Job Location
            </label>
            <input
              type="text"
              {...register("location")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Mumbai, Pune etc."
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Work Mode
            </label>
            <select
              {...register("workMode")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select...</option>
              <option value="Work from Home">Work from Home</option>
              <option value="Work from Office">Work from Office</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <select
              {...register("jobType")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select...</option>
              <option value="Part Time">Part Time</option>
              <option value="Full Time">Full Time</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Last Date to Apply
            </label>
            <input
              type="date"
              {...register("lastDateToApply")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="1/1/2025"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Apply Link
            </label>
            <input
              type="text"
              {...register("applyLink", { required: "apply link is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="www.amazon.com"
            />
            {errors.applyLink && (
              <span className="text-red-500 text-sm">
                {errors.applyLink.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Post By
            </label>
            <input
              type="text"
              {...register("postBy", { required: "PostBy is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="john doe"
            />
            {errors.postBy && (
              <span className="text-red-500 text-sm">
                {errors.postBy.message}
              </span>
            )}
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Category<span className="text-red-500">*</span>
            </label>
            <select
              {...register("categoryId", {required: "category is required"})}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option key='0' value="">Select...</option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <span className="text-red-500 text-sm">
                {errors.categoryId.message}
              </span>
            )}
          </div>
        </div>

        {/* Job Description */}
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            {...register("jobDescription")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add your description..."
          ></textarea>
        </div> */}

        <DescriptionBox
          setValue={setValue}
          register={register}
          fieldName="jobDescription"
          errors={errors}
        />

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            {loading ? "Posting...": "Post Job"} 
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;

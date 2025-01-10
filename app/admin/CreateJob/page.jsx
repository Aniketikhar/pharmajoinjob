"use client"

import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PostJobForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data")
    console.log(data);
    toast.success("Job posted successfully");
  };

  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
      <p className="text-gray-600 mb-6">Find the best talent for your company</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            {...register("jobTitle", { required: "Job Title is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add job title, role vacancies etc"
          />
          {errors.jobTitle && <span className="text-red-500 text-sm">{errors.jobTitle.message}</span>}
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <input
            type="text"
            {...register("tags")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Job keyword, tags etc"
          />
        </div>

        {/* Job Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Role</label>
          <select
            {...register("jobRole", { required: "Job Role is required" })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
          {errors.jobRole && <span className="text-red-500 text-sm">{errors.jobRole.message}</span>}
        </div>

        {/* Salary */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Min Salary</label>
            <input
              type="number"
              {...register("minSalary")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Minimum Salary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Salary</label>
            <input
              type="number"
              {...register("maxSalary")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Maximum Salary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Currency</label>
            <select
              {...register("currency")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        {/* Vacancies */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Vacancies</label>
          <select
            {...register("vacancies")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        {/* Job Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Level</label>
          <select
            {...register("jobLevel")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select...</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
        </div>

        {/* Location */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
              {...register("country")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select...</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <select
              {...register("city")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select...</option>
              <option value="Mumbai">Mumbai</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            {...register("jobDescription")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Add your description..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;

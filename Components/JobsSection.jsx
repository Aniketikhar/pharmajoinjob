"use client";
import Sidebar from "@/Components/Sidebar";
import JobList from "./JobList";

export default function JobsSection({ jobs }) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-1 md:px-4">
        {/* Job Listings */}

        <JobList jobs={jobs} />

        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

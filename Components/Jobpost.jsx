
import Link from "next/link";
import React from "react";

const Jobpost = () => {
  return (
    <div className="text-center py-10  container mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post a Job Today</h2>
      
      {/* Supporting Text */}
      <p className="text-gray-600 mb-6">
        Reach thousands of talented professionals by posting your job with us. 
        Let the right candidates find your opportunity effortlessly.
      </p>
      
      {/* Call to Action Button */}
      <Link
        href='/post-job'
        className="w-full px-6 py-3 text-white bg-green-600 hover:bg-blue-700 font-semibold  shadow-md transition duration-300"
      >
        Post Your Job
      </Link>
    </div>
  );
};

export default Jobpost;

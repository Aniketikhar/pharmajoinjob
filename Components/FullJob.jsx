import React from 'react'

export default function FullJob({ job}) {
    return (
      <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-3 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">{job.company}</h3>
            <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
          </div>
          {job.newPost && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">New post</span>}
        </div>
  
        <div className="flex items-center text-sm text-gray-500 gap-4">
        <span>{`${job.location.country} ${job.location.city}`}</span>
          <span>• {job.workProfile}</span>
          <span>• {`${job.salary.min}${job.salary.currency}-${job.salary.max}${job.salary.currency}`}</span>
          <span>• {job.jobLevel}</span>
        </div>
  
        <p className="text-gray-600 text-sm">{job.jobDescription}</p>
      </div>
    );
  }
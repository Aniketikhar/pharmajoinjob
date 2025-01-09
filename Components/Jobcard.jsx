import React from 'react'

export default function JobCard({ company, role, location, type, salary, time, description, newPost }) {
    return (
      <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-3 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">{company}</h3>
            <h2 className="text-xl font-bold text-gray-900">{role}</h2>
          </div>
          {newPost && <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-lg">New post</span>}
        </div>
  
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <span>{location}</span>
          <span>• {type}</span>
          <span>• {salary}</span>
          <span>• {time}</span>
        </div>
  
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }
  
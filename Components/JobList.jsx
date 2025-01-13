"use client"
import React, { useContext, useEffect, useState } from 'react'
import JobCard from './Jobcard'

const JobList = ({jobs}) => {
  return (
    <div className="md:col-span-3 space-y-4 ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">{jobs?.length} Jobs</h1>
            <select className="border border-gray-300 px-3 py-2 rounded-sm text-sm">
              <option value="">Filter by</option>
              <option value="Full-time">Full time</option>
              <option value="Part-time">Part time</option>
            </select>
          </div>

          <div className='flex flex-col gap-1 text-left md:gap-3'>
            {jobs?.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
  )
}

export default JobList
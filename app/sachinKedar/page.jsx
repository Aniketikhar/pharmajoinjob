import Link from 'next/link'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <div className="flex w-full justify-between items-center mb-8">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="p-2 bg-purple-500 text-white rounded-full">
            <FaHome />
          </span>
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          Overview <span className="text-purple-500">ⓘ</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {/* Weekly Sales */}
        <Link href={"/sachinKedar/Category"} className="bg-gradient-to-br from-pink-400 to-orange-300 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Categories</h2>
          {/* <p className="text-3xl font-bold mt-2">$15,000</p>
          <p className="mt-1 text-sm">Increased by 60%</p> */}
        </Link>

        {/* Weekly Orders */}
        <Link href="/sachinKedar/JobList" className="bg-gradient-to-br from-blue-400 to-blue-300 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Job List</h2>
          {/* <p className="text-3xl font-bold mt-2">45,633</p>
          <p className="mt-1 text-sm">Decreased by 10%</p> */}
        </Link>

        {/* Visitors Online */}
        <Link href={"/sachinKedar/Subscriptions"} className="bg-gradient-to-br from-teal-400 to-green-300 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold">Subscriptions</h2>
          {/* <p className="text-3xl font-bold mt-2">95,574</p>
          <p className="mt-1 text-sm">Increased by 5%</p> */}
        </Link>
      </div>
    </div>
  )
}

export default page
"use client"

import { assets, pages } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// ${selectedCategory == category ? "underline bg-blue-500 text-gray-50": ""}

const Header = () => {
  // const categories = useSelector((state) => state.category.categories);
  // const selectedCategory = useSelector((state) => state.category.selectedCategory);
  // const dispatch = useDispatch();
  return (
    <nav className='pt-3'>
      <div className=''>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='ps-1 md:ps-5'>
            <Image src={assets.pharmalogo} width={200} alt='pharmajoin' />
          </div>
          <ul className='flex gap-3 '>
           <li>about</li>
           <li>contact</li>
          </ul>
        </div>
        <div className='bg-slate-200 '>
          <ul id='categories' className='container mx-auto py-3 flex   overflow-x-scroll justify-start lg:justify-center items-center'>
          { pages?.map((category, index) => (
              <li key={index} className={`text-md text-gray-900 px-2 py-1 rounded-md  hover:underline hover:bg-blue-500 hover:text-gray-50`}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Header
import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

function CategoryPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className=' w-11/12 max-w-[670px]   py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center  items-center  '>
        <Header/>
        <div className='mb-6 justify-start flex items-center space-x-2'>
           <button
           className='border-2 border-gray-300  bg-white py-1 px-4 rounded-md'
           onClick={() => navigator(-1) }
           >
                Back
            
            </button> 
            <h2 className='text-xl font-bold'>
                Blogs on <span className='underline'>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage
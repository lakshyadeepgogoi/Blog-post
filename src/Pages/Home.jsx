import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

function Home() {
  return (
    <div className=' w-11/12 max-w-[670px]   py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center  items-center  '>
        <Header/>
        <div>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home
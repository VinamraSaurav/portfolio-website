import React from 'react'
import { MdHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='m-0'>
    <div className='max-w-7xl mx-auto fixed top-0 right-0 left-0 hidden xls:block backdrop-blur-[21px] z-50'>
        <div className='bg-color-5 h-10 xls:h-14 my-6 mx-3 flex items-center text-color-1 justify-between p-4 rounded-lg'>
            <div className='text-lg xls:text-xl font-popins font-[1000] stroke-2 stroke-black '>
                VINAMRA SAURAV
            </div>
            <div className='xls:flex font-popins text-lg hidden px-3 py-2 mx-2 gap-7 font-bold transition-all duration-300'>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><MdHome className='text-2xl'/> HOME</div>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><GoProjectSymlink className='text-2xl'/> PROJECTS</div>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><MdOutlineWork className='text-2xl'/> EXPERIENCE</div>
                <div className='flex gap-1 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><FaGraduationCap className='text-2xl'/> EDUCATION</div>
                

            </div>

        </div>

    </div>
    <div className='fixed bottom-[0] left-0 right-0 xls:hidden flex bg-white h-12 justify-around rounded-t-md'>
    <div className='flex gap-2 items-center hover:text-[#2b2c72] hover:bg-color-1- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><MdHome className='text-3xl'/> </div>
                <div className='flex gap-2 items-center hover:text-[#2b2c72] hover:bg-color-1-- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><GoProjectSymlink className='text-3xl'/></div>
                <div className='flex gap-2 items-center hover:text-[#2b2c72] hover:bg-color-1- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><MdOutlineWork className='text-3xl'/></div>
                <div className='flex gap-1 items-center hover:text-[#2b2c72] hover:bg-color-1- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><FaGraduationCap className='text-3xl'/></div>

    </div>
    </div>
  )
}

export default Navbar
"use client"
import React, {useState} from 'react'
import { MdHome } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick=()=>{
    setOpen((val)=>(!val));
  }
  return (
    <div className='m-0'>
    <div className='max-w-7xl mx-auto fixed top-0 right-0 left-0 xls:block backdrop-blur-[21px] h-20 my-auto z-50'>
        <div className='bg-color-5 h-10 xls:h-14 my-5 mx-3 flex items-center text-color-1 justify-between p-4 rounded-lg'>
            <div className='text-lg xls:text-xl font-popins font-[1000] stroke-2 stroke-black '>
                VINAMRA SAURAV
            </div>
            <div className='xls:flex font-popins text-lg px-3 py-2 mx-2 gap-7 font-bold transition-all duration-300 hidden'>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><MdHome className='text-2xl'/> HOME</div>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><GoProjectSymlink className='text-2xl'/> PROJECTS</div>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><MdOutlineWork className='text-2xl'/> EXPERIENCE</div>
                <div className='flex gap-1 items-center hover:text-color-5 hover:bg-color-1 py-1 px-2 rounded-md hover:cursor-pointer transition-all duration-300'><FaGraduationCap className='text-2xl'/> EDUCATION</div>
            </div>
            <div className='xls:hidden' onClick={handleClick}>
              {open?<IoCloseSharp className='text-3xl'/>:<IoMenu className='text-3xl'/>}
              
            </div>

        </div>

    </div>
    <div className={`xls:hidden px-3 py-2 font-bold  fixed bg-white/90 h-screen top-20 w-7/12 flex items-center transition-all duration-300 ease-in-out justify-center ${open? 'right-0':'right-[-910px]'}`}>
      <div className='flex flex-col gap-y-7 text-lg font-popins transition-all duration-300 items-start'>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-3 rounded-md hover:cursor-pointer transition-all duration-300'><MdHome className='text-2xl'/> HOME</div>
                <div className='flex items-center mx-auto h-[1px] w-9/12 bg-black'></div>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-3 rounded-md hover:cursor-pointer transition-all duration-300'><GoProjectSymlink className='text-2xl'/> PROJECTS</div>
                <div className='flex items-center mx-auto h-[1px] w-9/12 bg-black'></div>
                <div className='flex gap-2 items-center hover:text-color-5 hover:bg-color-1 py-1 px-3 rounded-md hover:cursor-pointer transition-all duration-300'><MdOutlineWork className='text-2xl'/> EXPERIENCE</div>
                <div className='flex items-center mx-auto h-[1px] w-9/12 bg-black'></div>
                <div className='flex gap-1 items-center hover:text-color-5 hover:bg-color-1 py-1 px-3 rounded-md hover:cursor-pointer transition-all duration-300'><FaGraduationCap className='text-2xl'/> EDUCATION</div>
            </div>
            
            </div>

    {/* <div className='fixed bottom-[0] left-0 right-0 xls:hidden flex bg-white h-12 justify-around rounded-t-md'>
    <div className='flex gap-2 items-center hover:text-[#2b2c72] hover:bg-color-1- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><MdHome className='text-3xl'/> </div>
                <div className='flex gap-2 items-center hover:text-[#2b2c72] hover:bg-color-1-- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><GoProjectSymlink className='text-3xl'/></div>
                <div className='flex gap-2 items-center hover:text-[#2b2c72] hover:bg-color-1- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><MdOutlineWork className='text-3xl'/></div>
                <div className='flex gap-1 items-center hover:text-[#2b2c72] hover:bg-color-1- py-1 px-3 rounded-b-2xl hover:cursor-pointer'><FaGraduationCap className='text-3xl'/></div>

    </div> */}
    </div>
  )
}

export default Navbar
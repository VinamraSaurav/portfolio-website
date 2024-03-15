import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='mt-16'>
        <div className='max-w-7xl mx-auto mb-0 xls:mb-0'>
            <div className='bg-color-2 rounded-t-xl mx-3'>
                <div className='flex flex-col justify-center items-center py-4 gap-y-3'>
                    <div className='text-white font-popins font-semibold text-lg mt-3'>
                        Find me on...
                    </div>
                    <div className='flex justify-center items-center text-4xl text-white gap-3'>
                        <FaLinkedin className='p-1 rounded-full hover:bg-white hover:text-color-2 hover:cursor-pointer'/>
                        <FaGithub className='p-1 rounded-full hover:bg-white hover:text-black hover:cursor-pointer'/>
                        <FaInstagram className='p-1 rounded-full hover:bg-white hover:text-pink-400 hover:cursor-pointer'/>
                        <FaXTwitter className='p-1 rounded-full hover:bg-white hover:text-black hover:cursor-pointer'/> 
                    </div>
                    <div className='h-[0.5px] bg-white w-8/12'></div>
                    <div className='text-white font-popins text-center text-sm'>
                        ©️ Developed and Designed by Vinamra (Vin) - 2024
                    </div>

                </div>

            </div> 

        </div>
    </div>
  )
}

export default Footer
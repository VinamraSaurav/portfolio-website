import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = () => {
  return (
    <div className='z-0'>
        <div className='h-[480px] w-[320px] rounded-md border-2 border-color-2 p-3 relative z-0'>
            <div className='flex justify-center items-center '>
                <Image src='/images/foodigy-logo.png' className='w-full h-[220px] rounded-t-md' height={100} width={100} alt='foodigy' priority/>
            </div>
            <div>
                <div className='text-white text-lg font-bold font-popins mt-3 mb-[7px] line-clamp-2 max-h-[53px]- '>Foodigy : Food ordering  </div>
                <div className='text-white text-sm font-popins mb-3 h-[120px] line-clamp-6'>Foodigy is a food delivering website. It uses Swiggy API to fetch data. It offers config drivern UI, Shimmer UI feature.
It is build on React.js. Lorem ipsum dolor.  It uses Swiggy API to fetch data. It offers config drivern UI, Shimmer UI feature.</div>
            <div className='absolute bottom-3 left-2 right-2 z-0'>
            <div className='flex justify-around'>
                <div className='flex gap-2 px-3 py-1 rounded-md bg-color-2 text-white font-semibold font-popins items-center text-md hover:cursor-pointer'>Live<FaExternalLinkAlt className='text-sm font-thin' /></div>
                <div className='flex gap-2 px-3 py-1 rounded-md bg-color-2 text-white font-semibold font-popins items-center text-md hover:cursor-pointer'>Repo<FaExternalLinkAlt className='text-sm font-thin' /></div>
              

            </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectCard
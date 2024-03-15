import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className="m-3 my-20 mt-24 xls:mt-32">
    <div className="max-w-7xl mx-auto">
    <div className="text-color-1 bg-white w-[150px] font-bold font-popins flex justify-center rounded-md text-2xl mb:10 xls:mb-10 mx-auto">
            PROJECTS
          </div>
          <div className='max-w-6xl mx-auto flex flex-wrap justify-evenly m-5 gap-6'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </div>
    </div>
    </div>
  )
}

export default Project
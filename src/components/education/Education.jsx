import React from 'react'
import EducationCard from './EducationCard'
import educationData from '@/constants/educationData'

const Education = () => {
  return (
    <div>
        <div className="m-3 my-20 mt-24 xls:mt-32">
      <div className="max-w-7xl mx-auto">
      <div className="text-color-1 bg-white w-fit px-3 py-1 font-bold font-popins flex justify-center rounded-md text-2xl mb:10 xls:mb-10 mx-auto">
            EDUCATION
          </div>
          <div className="max-w-3xl mx-auto my-12">
          {educationData.map((course,i)=><EducationCard key={i} data={course}/>)}
        </div>
          </div>
          </div>
    </div>
  )
}

export default Education
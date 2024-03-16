import React from 'react'

const ExperienceCard = ({data}) => {
    const {title,company,startDate,endDate,description}=data;
  return (
    <div>
        <div className='max-w-7xl mx-auto ml-4 mr-2 xls:ml-7 xls:mr-7'>
            <div className='px-4 border-l-2 border-white relative '>
                <div className='absolute bg-color-4 h-4 w-4 rounded-full left-[0] translate-x-[-55%] translate-y-[-50%] top-0'></div>
                <div className='flex flex-col gap-y-2 '>
                    <div className='flex justify-center bg-color-2 w-fit px-3 py-1 xls:text-lg font-popins font-bold text-white mx-auto text-center '>{title+' ('+company+')'}</div>
                    <div className='flex justify-center text-white w-8/12 mx-auto font-popins font-bold text-md'>{startDate+' - '+endDate}</div>
                    <ul className='text-sm xls:text-md text-white font-popins list-disc p-4 '>
                        <div>
                       {description}
                        </div>


                    </ul>
                    <div className='h-7'>

                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default ExperienceCard;
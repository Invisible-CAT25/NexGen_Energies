import React from 'react'
import Button from '../common/Button'

const LeadersTemplate = ({image, name, designation, about, property}) => {
  return (
    <div className='w-11/12 h-full flex flex-col items-start justify-between mt-20 mx-auto gap-8'> 
        <div className='flex items-center'>
            <div className='bg-gray-300 relative'>
                <img src={image} alt={name}></img>

                <div className='hidden md:block'>
                    <div className={`flex flex-col bg-gradient-to-b from-[#5078B9] to-[#4BBB93] gap-3 py-10 rounded-lg px-8 absolute top-30 ${property}`}>
                        <p className='font-semibold text-4xl text-white'>{name}</p>
                        <p className='text-white text-2xl'>{designation}</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div>
            <p>{about[0]}</p>
            <br />
            <p>{about[1]}</p>
            <br />
            <p>{about[2]}</p>
            <br />
            <ul className='list-disc px-10'>
                {about[3].map((keypoint, index) => (
                    <li key={index}>{keypoint}</li>
                ))}
            </ul>
            <br />
            <p>{about[4]}</p>
            <br />
            <p>{about[5]}</p>
        </div>

        <Button linkto={"/about-us#ourleaders"}>
            Our Leaders
        </Button>
        <br></br>
    </div>
  )
}

export default LeadersTemplate
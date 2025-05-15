import React from 'react'
import HighlightText from '../../common/HighlightText'
import solarImage from "../../../assets/images/Home_Assets/go_solar.png"
import Logo1 from '../../../assets/images/Home_Assets/go_solar_logo1.png'
import Logo2 from '../../../assets/images/Home_Assets/go_solar_logo_2.png'
import Logo3 from '../../../assets/images/Home_Assets/go_solar_logo3.png'
import Logo4 from '../../../assets/images/Home_Assets/go_solar_logo4.png'

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Turn Sunlight Into Savings",
      Description: "Slash your electricity bills to zero and earn by selling surplus solar energy back to the grid.",
    },
    {
      Logo: Logo2,
      Heading: "Government-Backed Subsidy",
      Description: "Get up to 40% subsidy on your solar installation as per official government norms.",
    },
    {
      Logo: Logo3,
      Heading: "Support a Greener Tomorrow",
      Description: "Installing just 1kW of solar can help preserve 154+ trees and eliminate over 20 tons of carbon emissions.",
    },
    {
      Logo: Logo4,
      Heading: "Smart Investment, Quick Returns",
      Description: "Recover your investment within 3 to 4 years and enjoy uninterrupted savings for years to come.",
    },
];

const GoSolar = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col justify-center items-center gap-8 mt-20'>
        <h2 className="text-3xl md:text-[2.5rem] font-bold">
          <HighlightText text={"Why Go Solar?"} />
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-[50%]">
            <img
              src={solarImage}
              alt=""
            />
          </div>

          <div className="lg:w-[50%] flex flex-col gap-8">
            {TimeLine.map((ele, i) => {
                return (
                    <div className="flex gap-4" key={i}>
                        <div className="w-[100px] h-[100px] flex justify-center items-center">
                            <img src={ele.Logo} alt="" />
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <h2 className="font-semibold text-2xl">{ele.Heading}</h2>
                            <p className="text-[17px]">{ele.Description}</p>
                        </div>
                    </div>
                );
            })}
          </div>
        </div>
    </div>
  )
}

export default GoSolar
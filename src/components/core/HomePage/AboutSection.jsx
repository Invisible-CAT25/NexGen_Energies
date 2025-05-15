import React from 'react'
import Button from '../../common/Button';
import solarImage from "../../../assets/images/Home_Assets/solar_and_transmission.png" 
import HighlightText from '../../common/HighlightText';

const AboutSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-8 items-center w-11/12 mx-auto justify-between mt-20">
          <div className="lg:w-[40%]">
            <img
              src={solarImage}
              alt=""
            />
          </div>
          <div className="lg:w-[60%] flex gap-5 flex-col">
            <h2 className="lg:w-[90%]">
                <HighlightText text={"Shaping a Sustainable Future with Solar & Power Solutions"} />
            </h2>

            <p className="text-[17px] w-[90%] text-[#6C6969]">
                Make your space sustainable and power the future with NexGen Energies. With deep expertise in renewable energy and power transmission, we provide complete solutions including planning, design, execution and maintenance for solar and energy infrastructure projects. 
                <br />
                From rooftop systems to large-scale solar plants and strong power transmission networks, we are committed to reducing carbon emissions and building a sustainable tomorrow.
            </p>

            <div className="w-fit">
              <Button linkto={"/about-us"}>
                Know More
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutSection
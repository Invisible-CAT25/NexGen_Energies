import React from 'react'
// import solarImage from "../../../assets/images/Home_Assets/solar_and_transmission.png"
import continental from "../../../assets/images/project.png" 
import HighlightText from '../../common/HighlightText';

const Project = ({active, name}) => {
  return (
    <div>
        <div className={`flex flex-col lg:flex-row gap-8 items-center w-11/12 mx-auto justify-between mt-20 ${active ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <div className="lg:w-[40%]">
            <img
              src={continental}
              alt=""
            />
          </div>
          <div className="lg:w-[60%] flex gap-5 flex-col">
            <h2 className="lg:w-[90%]">
                <HighlightText text={name} />
            </h2>

            <p className="text-[17px] w-[90%] text-[#6C6969]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Project
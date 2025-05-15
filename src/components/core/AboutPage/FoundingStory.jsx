import React from 'react'
import foundingStory from "../../../assets/images/About_Assets/founding_story.png"
import logo from "../../../assets/images/About_Assets/logo.png"
import HighlightText from "../../common/HighlightText"

const FoundingStory = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-11/12 mx-auto mt-20">
          <div className="lg:w-[40%] relative flex items-center justify-center">
            <img
              src={foundingStory}
              alt=""
            />
            <img src={logo} className='absolute z-10 top-[30%] left-[14%] h-25 ' />
          </div>
          <div className="lg:w-[60%] flex gap-5 flex-col">
            <h2 className="lg:w-[90%] text-[2.5rem] font-semibold">
                <HighlightText text={"Our Founding Story"} />
            </h2>

            <p className="text-base w-[90%] text-black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
            </p>
          </div>
        </div>
    </div>
  )
}

export default FoundingStory
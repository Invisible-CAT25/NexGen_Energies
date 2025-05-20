import React from 'react'
import CEOImage from "../../../assets/images/Home_Assets/ceo.png"
import bgImage from '../../../assets/images/Home_Assets/ceo_bgImage.png'
import Icon from '../../../assets/images/Home_Assets/ceo_symbol.png'
import Button from "../../common/Button"

const CEOSection = () => {
    return (
            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat text-white mt-20" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="flex flex-col-reverse items-center lg:flex-row w-11/12 mx-auto gap-8 lg:items-end justify-around">
                    {/* Left Box */}
                    <div className="flex flex-col justify-center items-start bg-[#5078B9] w-full lg:w-[50%] mt-10 rounded-md p-5 gap-5 relative -bottom-5">

                        <img src={Icon} className="absolute -top-5 -left-10 hidden lg:block"/>
                        
                        <div className="flex flex-col border-l-5 border-white pl-3 mt-12 justify-between">
                            <h5 className="text-5xl font-bold">NEERAJ KUMAR</h5>
                            <p className="text-2xl font-bold">CEO</p>
                        </div>

                        <p className="text-[17px]">
                            With over a decade of experience in renewable energy and power infrastructure, the founding force behind NexGen Energies leads with a clear vision for sustainable transformation. Focused on innovation and strategic growth, the leadership has driven the company to the forefront of solar and transmission solutions across India. A strong believer in clean technology, the role emphasizes building future-ready systems that support both industry and environment. The journey continues with a commitment to excellence, impact, and long-term value creation.
                        </p>

                        <Button linkto='/our-leaderships'>
                            Know More
                        </Button>

                    </div>
                    
                    <div className="w-full lg:w-auto flex items-center justify-center">
                        <img
                            src={CEOImage}
                            alt="CEO"
                            className="w-full max-w-md object-contain"
                        />
                    </div>

                </div>    
            </div>
    )
}
        
export default CEOSection
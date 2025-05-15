import React from 'react'
import e_logo from '../../../assets/images/Home_Assets/e.svg'
import t_logo from '../../../assets/images/Home_Assets/l.svg'
import h_logo from '../../../assets/images/Home_Assets/t.svg'
import i_logo from '../../../assets/images/Home_Assets/h.svg'
import c_logo from '../../../assets/images/Home_Assets/i.svg'
import a_logo from '../../../assets/images/Home_Assets/c.svg'
import l_logo from '../../../assets/images/Home_Assets/a.svg'
import Button from '../../common/Button'

const OurValues = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-8 mt-20'>
        <div className='bg-gradient-to-r from-[#5078B9] via-[#4BBB93] to-[#5078B9] w-full'>
            <div className='flex flex-col w-11/12 justify-center items-center mx-auto py-8 gap-6'>
                <h3 className='text-white text-center text-[2.5rem] font-semibold'>
                    Our Core Values 
                </h3>

                <div className='grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7'>
                    {/* E - Empowerment */}
                    <div className='flex flex-col items-center justify-between animate-fadeUp hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-12'>
                                    <img src={e_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>E</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Empowerment
                        </div>
                    </div>
                    {/* T - Team Work */}
                    <div className='flex flex-col items-center justify-between animate-fadeUpDelayed1 hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-10'>
                                    <img src={t_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>T</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Team Work
                        </div>
                    </div>
                    {/* H - Honesty */}
                    <div className='flex flex-col items-center justify-between animate-fadeUpDelayed2 
                    hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-18'>
                                    <img src={h_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>H</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Honesty
                        </div>
                    </div>
                    {/* I - Innovative */}
                    <div className='flex flex-col items-center justify-between animate-fadeUpDelayed3 
                    hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-5'>
                                    <img src={i_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>I</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Innovative
                        </div>
                    </div>
                    {/* C - Customer-Centric */}
                    <div className='flex flex-col items-center justify-between animate-fadeUpDelayed4 hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-19'>
                                    <img src={c_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>C</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Customer-Centric
                        </div>
                    </div>
                    {/* A - Accountability */}
                    <div className='flex flex-col items-center justify-between animate-fadeUpDelayed5 hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-16'>
                                    <img src={a_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>A</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Accountability
                        </div>
                    </div>
                    {/* L - Limitless */}
                    <div className='flex flex-col items-center justify-between animate-fadeUpDelayed6 hover:scale-105 transition-all duration-200'>
                        <div>
                            <div className='flex items-center justify-center relative'>
                                <div className='flex justify-center items-center rounded-full bg-gradient-to-b from-[#5078B9] to-[#4BBB93] w-12 h-12 absolute right-11'>
                                    <img src={l_logo} width={50} className=''></img>
                                </div>
                                <p className='text-9xl font-bold text-white'>L</p>
                            </div>
                        </div>
                        <div className='text-white flex justify-center items-center'>
                            Limitless
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Button linkto='/about-us'>
            Know More
        </Button>
    </div>
  )
}

export default OurValues
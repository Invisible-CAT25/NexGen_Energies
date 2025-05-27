import './App.css'
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

// component
import Navbar from './components/common/Navbar'
import ScrollToTop from './components/common/ScrollToTop'
import LeadersTemplate from './components/core/LeadersTemplate'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import FinancialSolution from './pages/FinancialSolution'
import Projects from './pages/Projects'
import Career from './pages/Career'
import Contact from './pages/Contact'

import image1 from './assets/images/About_Assets/leader1.png'
import image2 from './assets/images/About_Assets/leader2.png'
import image3 from './assets/images/About_Assets/leader3.png'
import image4 from './assets/images/About_Assets/leader4.png'
import image5 from './assets/images/About_Assets/leader5.png'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='flex flex-col w-screen min-h-screen font-poppins bg-[#F7F9FB]'>
      <Navbar />  
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/financial-solutions' element={<FinancialSolution />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/contact-us' element={<Contact />} />


        <Route path='/neeraj-kumar' element={<LeadersTemplate image={image1} name={"NEERAJ KUMAR"} designation={"-CEO"} property={"-right-75"} />} />
        <Route path='/vikas-mishra' element={<LeadersTemplate image={image2} name={"VIKAS MISHRA"} designation={"-CFO"} property={"-right-70"}  />} />
        <Route path='/ashish-gupta' element={<LeadersTemplate image={image3} name={"ASHISH GUPTA"} designation={"-Director Projects"} property={"-right-72"} />} />
        <Route path='/ravi-gupta' element={<LeadersTemplate image={image4} name={"RAVI GUPTA"} designation={"-Business Head"} property={"-right-62"} />} />
        <Route path='/hemraj-katariya' element={<LeadersTemplate image={image5} name={"HEMRAJ KATARIYA"} designation={"-CTO"} property={"-right-90"}  />} />

      </Routes>
    </div>
  )
}

export default App

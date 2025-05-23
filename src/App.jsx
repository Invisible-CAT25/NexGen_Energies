import './App.css'
import { Route, Routes } from 'react-router-dom'

// component
import Navbar from './components/common/Navbar'
import ScrollToTop from './components/common/ScrollToTop'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Service from './pages/Service'
import FinancialSolution from './pages/FinancialSolution'

import image1 from './assets/images/About_Assets/NeerajKumar.png'
import image2 from './assets/images/About_Assets/leader2.png'
import image3 from './assets/images/About_Assets/leader3.png'
import image4 from './assets/images/About_Assets/leader4.png'
import LeadersTemplate from './components/core/LeadersTemplate'
import Career from './pages/Career'

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


        <Route path='/neeraj-kumar' element={<LeadersTemplate image={image1} name={"NEERAJ KUMAR"} designation={"-CEO"} />} />
        <Route path='/vikas-mishra' element={<LeadersTemplate image={image2} name={"VIKAS MISHRA"} designation={"-CFO"} />} />
        <Route path='/ashish-gupta' element={<LeadersTemplate image={image3} name={"ASHISH GUPTA"} designation={"-Director Projects"} />} />
        <Route path='/ravi-gupta' element={<LeadersTemplate image={image4} name={"RAVI GUPTA"} designation={"-Business Head"} />} />
        <Route path='/hemraj-katariya' element={<LeadersTemplate image={image1} name={"HEMRAJ KATARIYA"} designation={"-CTO"} />} />

      </Routes>
    </div>
  )
}

export default App

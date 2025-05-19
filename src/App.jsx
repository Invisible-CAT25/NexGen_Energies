import './App.css'
import { Route, Routes } from 'react-router-dom'

// component
import Navbar from './components/common/Navbar'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Template from './components/core/Leaders/Template'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='flex flex-col w-screen min-h-screen font-poppins bg-[#F7F9FB]'>
      <Navbar />  

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/neeraj-kumar' element={<Template />} />
        


      </Routes>
    </div>
  )
}

export default App

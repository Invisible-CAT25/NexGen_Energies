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
import Template from './components/core/Leaders/Template'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from 'framer-motion'
import Service from './pages/Service'
import FinancialSolution from './pages/FinancialSolution'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='flex flex-col w-screen min-h-screen font-poppins bg-[#F7F9FB]'>
      <Navbar />  
      <ScrollToTop />

      <Routes>
        <Route path='/' 
          element={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Home />
          </motion.div>
          }  
        />

        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/neeraj-kumar' element={<Template />} />
        <Route path='/services-we-offer' element={<Service />} />
        <Route path='/financial-solutions' element={<FinancialSolution />} />

        


      </Routes>
    </div>
  )
}

export default App

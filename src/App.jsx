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

// Data of leaders
import { Leader } from './data/leaders'

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

        <Route 
          path='/neeraj-kumar' 
          element={<LeadersTemplate 
            name={Leader[0].name} 
            designation={Leader[0].designation} 
            image={Leader[0].image} 
            property={"-right-75"} 
            about={Leader[0].about}
          />} 
        />

        <Route 
          path='/vikas-mishra' 
          element={<LeadersTemplate 
            name={Leader[1].name} 
            designation={Leader[1].designation} 
            image={Leader[1].image} 
            property={"-right-70"}  
            about={Leader[1].about}
        />} />

        <Route 
          path='/ashish-gupta'  
          element={<LeadersTemplate 
            name={Leader[2].name} 
            designation={Leader[2].designation} 
            image={Leader[2].image} 
            property={"-right-72"} 
            about={Leader[2].about}
        />} />

        <Route 
          path='/ravi-gupta' 
          element={<LeadersTemplate 
            name={Leader[3].name} 
            designation={Leader[3].designation} 
            image={Leader[3].image} 
            property={"-right-62"} 
            about={Leader[3].about}
        />} />

        <Route 
          path='/hemraj-katariya' 
          element={<LeadersTemplate 
            name={Leader[4].name} 
            designation={Leader[4].designation}
            image={Leader[4].image} 
            property={"-right-90"}
            about={Leader[4].about}
        />} />

      </Routes>
    </div>
  )
}

export default App

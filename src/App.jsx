import './App.css'
import { Route, Routes } from 'react-router-dom'

// component
import Navbar from './components/common/Navbar'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='flex flex-col w-screen min-h-screen font-poppins bg-[#F7F9FB]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        



      </Routes>
    </div>
  )
}

export default App

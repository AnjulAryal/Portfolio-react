import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Footer from './components/Footer'
import About from './sections/About'
import EducationTimeline from './sections/EducationTimeline'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from './sections/HomePage'
function App() {

  return (
    <div className='flex flex-col'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/hero" element={<Hero/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/education" element={<EducationTimeline/>}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App

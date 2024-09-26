import { useState } from 'react'
import './App.css'
import Navbar from './Componenets/Navbar'
import About from './Componenets/About'
import Skills from './Componenets/Skills'
import Footer from './Componenets/Footer'
import Project from './Componenets/Project'
import Contact from './Componenets/Contact'
import Contactsend from './Componenets/Contactsend'
function App() {
  return (
    <>
    {/* Portfolio */}

    <Navbar/>
    <hr  />
    <About/>
    <hr  className='mx-3'/>
    <Skills/>
    <hr className=' mx-3'/>
    <Project/>
    <hr className=' mx-3'/>
    {/* <Contact/> */}
    <Contactsend/>
    <hr className=' mx-3'/>
    <Footer/>
    </>
  )
}

export default App

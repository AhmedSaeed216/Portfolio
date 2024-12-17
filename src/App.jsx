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
    <hr  className='w-full' />
    <About/>
    <hr  className=' w-2/3 flex m-auto'/>
    <Skills/>
    <hr className='  w-2/3 flex m-auto mt-4'/>
    <Project/>
    <hr className=' mb-7 w-2/3 flex m-auto'/>
    {/* <Contact/> */}
    <Contactsend/>
    <hr className=' mt-4 w-full flex m-auto'/>
    <Footer/>
    </>
  )
}

export default App

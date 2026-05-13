import { useState } from 'react'
import Navbar from './Componenets/Navbar'
import About from './Componenets/About'
import Skills from './Componenets/Skills'
import Footer from './Componenets/Footer'
import Project from './Componenets/Project'
import Contactsend from './Componenets/Contactsend'

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-slate-300 font-sans selection:bg-neonBlue selection:text-black overflow-x-hidden w-full">
      <Navbar />
      <main className="pt-28 flex flex-col gap-20 md:gap-32 pb-16 w-full items-center">
        <About />
        <Skills />
        <Project />
        <Contactsend />
      </main>
      <Footer />
    </div>
  )
}

export default App

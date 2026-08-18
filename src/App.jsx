import Navbar from './Componenets/Navbar'
import Hero from './Componenets/Hero'
import TechStrip from './Componenets/TechStrip'
import WhatIBuild from './Componenets/WhatIBuild'
import FeaturedWork from './Componenets/FeaturedWork'
import EngineeringHighlights from './Componenets/EngineeringHighlights'
import Experience from './Componenets/Experience'
import Skills from './Componenets/Skills'
import AboutSection from './Componenets/AboutSection'
import Contact from './Componenets/Contact'
import Footer from './Componenets/Footer'

function App() {
  return (
    <div className="bg-surface-900 min-h-screen text-slate-300 font-sans selection:bg-accent-500/30 selection:text-white overflow-x-hidden w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <TechStrip />
        <WhatIBuild />
        <FeaturedWork />
        {/* <EngineeringHighlights /> */}
        <Experience />
        <Skills />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

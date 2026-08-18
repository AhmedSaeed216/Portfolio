import Navbar from './Componenets/Navbar/Navbar'
import Hero from './Componenets/Hero/Hero'
import TechStrip from './Componenets/Hero/TechStrip'
import WhatIBuild from './Componenets/WhatIBuild/WhatIBuild'
import FeaturedWork from './Componenets/FeaturedWork/FeaturedWork'
import EngineeringHighlights from './Componenets/FeaturedWork/EngineeringHighlights'
import Experience from './Componenets/Experience/Experience'
import Skills from './Componenets/Skills/Skills'
import AboutSection from './Componenets/About/AboutSection'
import Contact from './Componenets/Contact/Contact'
import Footer from './Componenets/Contact/Footer'

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

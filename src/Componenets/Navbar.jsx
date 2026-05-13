import React, { useState } from 'react'
import Drawer from './Drawer'
import Hamburger from 'hamburger-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isopen, setisopen] = useState(false)

    const toggleDrawer = () => {
        setisopen(!isopen)
    }

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#project' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="fixed top-0 left-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-white/10"
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-3xl font-bold bg-clip-text text-transparent bg-hero-gradient">
                                Port<span className="text-white">folio</span>
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-neonBlue transition-colors duration-300 text-lg font-medium relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonBlue transition-all duration-300 group-hover:w-full glow-blue"></span>
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Button */}
                        <div className="hidden md:flex items-center">
                            <a href='/NewCv.pdf' download="AhmedCV">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2 rounded-full border border-neonPurple text-neonPurple hover:bg-neonPurple hover:text-white transition-all duration-300 shadow-glow-purple"
                                >
                                    Download CV
                                </motion.button>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center text-white">
                            <Hamburger toggled={isopen} toggle={toggleDrawer} color="#00f2fe" />
                        </div>
                    </div>
                </div>
            </motion.header>

            <Drawer isopen={isopen} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default Navbar

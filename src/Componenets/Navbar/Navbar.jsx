import { useState, useEffect } from 'react'
import Drawer from './Drawer'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isopen, setisopen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleDrawer = () => {
        setisopen(!isopen)
    }

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-surface-900/90 backdrop-blur-xl border-b border-white/8 shadow-subtle'
                    : 'bg-transparent'
                    }`}
            >
                <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-18">
                        {/* Logo */}
                        <a href="#home" className="flex-shrink-0 flex items-center group">
                            <span className="text-lg font-bold text-white tracking-tight">
                                Ahmed
                                <span className="text-accent-400"> </span>
                                Saeed
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Resume Button */}
                        <div className="hidden md:flex items-center">
                            <a href='/NewCv.pdf' download="Ahmed_Saeed_Resume">
                                <button className="px-5 py-2 text-sm font-medium rounded-lg border border-accent-500/30 text-accent-400 hover:bg-accent-500/10 hover:border-accent-500/50 transition-all duration-200">
                                    Resume
                                </button>
                            </a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleDrawer}
                                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <Menu size={22} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <Drawer isopen={isopen} toggleDrawer={toggleDrawer} />
        </>
    )
}

export default Navbar

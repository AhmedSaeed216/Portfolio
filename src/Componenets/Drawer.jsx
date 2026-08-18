import { motion, AnimatePresence } from 'framer-motion'
import { X, Download } from 'lucide-react'

const Drawer = ({ isopen, toggleDrawer }) => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Work', href: '#work' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <AnimatePresence>
            {isopen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleDrawer}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
                    />

                    {/* Drawer Content */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[280px] bg-surface-900/98 backdrop-blur-xl border-l border-white/8 z-[100] md:hidden"
                    >
                        <div className="flex flex-col h-full p-8 pt-20 relative">
                            {/* Close Button */}
                            <button
                                onClick={toggleDrawer}
                                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>

                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleDrawer}
                                        className="text-lg font-medium text-slate-300 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-auto pb-8">
                                <a href='/NewCv.pdf' download="Ahmed_Saeed_Resume">
                                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-500 text-white font-medium text-sm hover:bg-accent-600 transition-colors">
                                        <Download size={18} />
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Drawer

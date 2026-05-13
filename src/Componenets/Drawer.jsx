import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const Drawer = ({ isopen, toggleDrawer }) => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#project' },
        { name: 'Contact', href: '#contact' }
    ];

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
                        className="fixed top-0 right-0 h-full w-[280px] bg-darkBg/95 backdrop-blur-xl border-l border-white/10 z-[100] md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col h-full p-8 pt-24 relative">
                            {/* Close Button */}
                            <button
                                onClick={toggleDrawer}
                                className="absolute top-6 right-6 text-gray-400 hover:text-neonBlue transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <nav className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleDrawer}
                                        whileHover={{ x: 10 }}
                                        className="text-2xl font-semibold text-gray-300 hover:text-neonBlue transition-colors flex items-center"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="mt-auto pb-10">
                                <a href='/NewCv.pdf' download="AhmedCV">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-hero-gradient text-white font-bold shadow-glow-blue"
                                    >
                                        <Download size={20} />
                                        Download CV
                                    </motion.button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Drawer;

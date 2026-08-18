import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../Contact/Icons'
import TechOrbit from './TechOrbit'

const Hero = () => {
    return (
        <>
            <div id="home" className="pt-16 md:pt-18" />
            <section className="min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden" aria-label="Hero">
                <div className="section-container">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex-1 text-center lg:text-left space-y-6"
                        >
                            {/* Label */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                                <span className="text-accent-300 text-xs font-medium tracking-wide uppercase">
                                    Full Stack Developer
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.25] tracking-tight">
                                Assalam o Alaikum, I'm
                                <span className="bg-clip-text text-transparent bg-gradient-text">
                                    {' '} Ahmed Saeed
                                </span>
                            </h1>

                            {/* Description */}
                            <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                A Full-Stack Developer specializing in React, Django &amp; AI, with 1+ year of experience building healthcare,<br /> e-commerce, and management systems.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 pt-2">
                                <a href="#work" className="btn-primary">
                                    View My Work
                                    <ArrowRight size={16} />
                                </a>
                                <a href="#contact" className="btn-secondary">
                                    Let's Connect
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                                <a
                                    href="https://github.com/ahmedsaeed216"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                                    aria-label="GitHub"
                                >
                                    <GithubIcon size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ahmed-saeed-515117248"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2.5 text-slate-500 hover:text-accent-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinIcon size={20} />
                                </a>
                                <a
                                    href="mailto:ahmed.saeed6420@gmail.com"
                                    className="p-2.5 text-slate-500 hover:text-accent-400 rounded-lg hover:bg-white/5 transition-all duration-200"
                                    aria-label="Email"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Right — Orbital Tech Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex-1 flex justify-center lg:justify-end w-full"
                        >
                            <TechOrbit />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero

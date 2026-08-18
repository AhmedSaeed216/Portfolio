import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-16 bg-gradient-subtle overflow-hidden" aria-label="About">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16 text-left"
                >
                    <p className="section-label">About</p>
                    <h2 className="section-title">A Bit About Me</h2>
                </motion.div>

                {/* Two-Column Content Grid */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-5xl ml-4 md:ml-8">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:w-[58%] space-y-6 text-slate-400 text-sm md:text-base leading-relaxed"
                    >
                        <p>
                            I'm Ahmed Saeed, a <span className="text-white font-medium">Full-Stack Developer</span> who enjoys turning ideas and real-world requirements into reliable web applications. I work primarily with <span className="text-white font-medium">React</span>, <span className="text-white font-medium">TypeScript</span>, <span className="text-white font-medium">Django</span> and <span className="text-white font-medium">Django REST Framework</span>, building both the user experience and the systems behind it.
                        </p>
                        <p>
                            Over the past year, I've worked on healthcare, e-commerce and management platforms, where I've dealt with everything from complex business logic and REST APIs to authentication, database optimization, background processing and real-time communication.
                        </p>
                        <p>
                            I enjoy understanding how things work under the hood and continuously improving the way I build software — with a focus on clean architecture, maintainable code and practical solutions.
                        </p>
                    </motion.div>

                    {/* Right Column - Profile Picture Presentation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-[42%] flex justify-center w-full"
                    >
                        <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
                            {/* Decorative gradient circular outer ring */}
                            <div className="absolute inset-0 rounded-full border border-accent-500/20 animate-pulse duration-[4s]" />
                            <div className="absolute inset-2 rounded-full border border-dashed border-accent-500/10 rotate-45" />

                            {/* Accent Glow backdrop */}
                            <div className="absolute inset-4 rounded-full bg-accent-500/5 blur-xl pointer-events-none" />

                            {/* Image Container with Border */}
                            <div className="w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-white/10 bg-surface-800 shadow-elevated relative z-10 group cursor-pointer">
                                <img
                                    src="/MainPic.png"
                                    alt="Ahmed Saeed profile picture"
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection

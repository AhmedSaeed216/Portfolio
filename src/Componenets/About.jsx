import { motion } from 'framer-motion'

const About = () => {
    return (
        <section className='min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full' id='about'>
            <div className='w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10'>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='flex-1 text-center lg:text-left space-y-6'
                >
                    <div className='space-y-2'>
                        <h2 className='text-neonBlue tracking-widest uppercase font-medium text-sm'>Welcome to my portfolio</h2>
                        <h1 className='text-4xl md:text-6xl font-bold text-white'>
                            Assalam o Alaikum,
                            <span className='block mt-2'><span className='text-white text-3xl md:text-5xl'>I'm </span><span className='bg-clip-text text-transparent bg-hero-gradient'>Ahmed Saeed</span></span>
                        </h1>
                        <h3 className='text-2xl md:text-3xl text-gray-400 font-semibold mt-4'>
                            Full stack Web Developer
                        </h3>
                        <p className='text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed pt-2'>
                            Frontend and Django Developer with 1+ year of frontend development experience and 6 months of Django backend experience. Skilled in building scalable web applications.
                        </p>
                    </div>

                    <div className='flex justify-center lg:justify-start gap-6 pt-6'>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/ahmed-saeed-515117248"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-neonBlue hover:text-neonBlue transition-colors group relative flex items-center justify-center text-white"
                        >
                            <img src="/linkedin.png" className="w-6 h-6 object-contain filter brightness-200" alt="LinkedIn" />
                            <span className="absolute inset-0 rounded-full border border-neonBlue scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000"></span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/ahmedsaeed216"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-white hover:text-white transition-colors group relative flex items-center justify-center text-white"
                        >
                            <img src="/github.png" className="w-6 h-6 object-contain filter brightness-200" alt="GitHub" />
                            <span className="absolute inset-0 rounded-full border border-white scale-110 opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000"></span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='flex-1 flex justify-center lg:justify-end w-full'
                >
                    <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] aspect-square">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>

                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            src="/MainPic.png"
                            alt="Ahmed Saeed"
                            className="relative w-full h-full object-cover rounded-3xl z-10 shadow-glow-blue border border-white/10 bg-darkBg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About

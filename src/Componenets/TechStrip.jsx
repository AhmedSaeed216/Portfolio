import { motion } from 'framer-motion'

const technologies = [
    'React', 'TypeScript', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Docker'
]

const TechStrip = () => {
    return (
        <section className="py-8 border-y border-white/5" aria-label="Technology Stack">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
                >
                    {technologies.map((tech, index) => (
                        <span
                            key={tech}
                            className="text-sm font-medium text-slate-500 tracking-wide"
                        >
                            {tech}
                            {index < technologies.length - 1 && (
                                <span className="ml-8 text-slate-700 hidden sm:inline">·</span>
                            )}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default TechStrip

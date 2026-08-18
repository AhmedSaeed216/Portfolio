import { motion } from 'framer-motion'
import { Code2, Server, Database, Radio } from 'lucide-react'

const skillCategories = [
    {
        icon: Code2,
        title: 'Frontend',
        skills: ['React.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Zustand', 'TanStack Query', 'Tailwind CSS', 'Material UI'],
    },
    {
        icon: Server,
        title: 'Backend',
        skills: ['Python', 'Django', 'Django REST Framework', 'REST APIs', 'JWT Authentication'],
    },
    {
        icon: Database,
        title: 'Database & Infrastructure',
        skills: ['PostgreSQL', 'SQLite', 'Redis', 'Celery', 'Docker'],
    },
    {
        icon: Radio,
        title: 'Real-Time & Integrations',
        skills: ['WebSockets', 'Django Channels', 'Firebase Cloud Messaging', 'Agora', 'Google Maps API'],
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, delay: i * 0.1, ease: 'easeOut' },
    }),
}

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-16" aria-label="Skills">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="section-label">Skills</p>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        Tools and technologies I use to build production applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="card p-6"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center">
                                    <category.icon size={18} className="text-accent-400" />
                                </div>
                                <h3 className="text-base font-semibold text-white">{category.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white/4 text-slate-300 border border-white/8 hover:border-white/15 hover:bg-white/6 transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

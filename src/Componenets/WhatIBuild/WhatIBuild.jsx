import { motion } from 'framer-motion'
import { Monitor, Server, Zap } from 'lucide-react'

const services = [
    {
        icon: Monitor,
        title: 'Modern Frontend Engineering',
        description: 'Building responsive and interactive interfaces with React and TypeScript, focused on usability, performance and reusable architecture.',
        tags: ['Jinja', 'React', 'TypeScript', 'JavaScript', 'Bootstrap', 'Tailwind', 'CSS']
    },
    {
        icon: Server,
        title: 'Backend & API Engineering',
        description: 'Designing robust REST APIs and business logic with Django and Django REST Framework for complex application workflows.',
        tags: ['Django', 'DRF', 'JWT', 'OAuth', 'PostgreSQL', 'MYSQL', 'SQLite']
    },
    {
        icon: Zap,
        title: 'Real-Time & Scalable Systems',
        description: 'Building real-time communication, background processing and notification systems with WebSockets, Redis and Celery.',
        tags: ['WebSockets', 'Webhooks', 'Redis', 'Celery', 'Agora', 'FCM']
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
    }),
}

const WhatIBuild = () => {
    return (
        <section className="py-20 md:py-16" aria-label="What I Build">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <p className="section-label">What I Build</p>
                    <h2 className="section-title">Expertise & Focus Areas</h2>
                    <p className="section-subtitle">
                        I build scalable full-stack applications that combine modern user experiences, robust APIs, and real-time backend systems.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ml-4 md:ml-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="card p-7 group cursor-default flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3.5 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/15 transition-colors flex-shrink-0">
                                        <service.icon size={20} className="text-accent-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white leading-snug">{service.title}</h3>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed mb-6">{service.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                {service.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 border border-white/8 text-slate-400"
                                    >
                                        {tag}
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

export default WhatIBuild

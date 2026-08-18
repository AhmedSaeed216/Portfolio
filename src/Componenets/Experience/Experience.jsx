import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
    {
        role: 'Full Stack Developer',
        company: 'Codexenix',
        companyUrl: 'https://codexenix.com',
        employmentType: 'Full-time',
        startDate: '2025-06-15', // for auto-calculation
        startDateDisplay: 'Jun 2025',
        endDate: 'Present',
        description: 'Building full-stack web applications using React, TypeScript, Django and Django REST Framework, with a focus on scalable APIs, real-time systems and production-ready application architecture.',
        achievements: [
            'Built Melo : a complete project management platform with real-time collaboration, Kanban boards and task workflows.',
            'Developed Nova Pharmacy : a healthcare platform with e-commerce, inventory management, real-time communication and push notifications.',
            'Designed and implemented REST APIs handling complex business logic, authentication and role-based access control.',
            'Integrated third-party services including Firebase Cloud Messaging, Agora and Google Maps.',
            'Implemented background processing pipelines using Celery and Redis for asynchronous operations.',
            'Optimized database queries using Django ORM best practices including select_related() and prefetch_related().',
        ],
        technologies: ['React', 'TypeScript', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets', 'Docker'],
    },
]

// Auto duration calculation helper
const calculateDuration = (startDateStr, endDateStr) => {
    const start = new Date(startDateStr)
    const end = endDateStr === 'Present' ? new Date() : new Date(endDateStr)

    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()

    if (months < 0) {
        years -= 1
        months += 12
    }

    const yearStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : ''
    const monthStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : ''

    return [yearStr, monthStr].filter(Boolean).join(' ') || '1 mo'
}

const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-16" aria-label="Experience">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="section-label">Experience</p>
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">
                        Building production applications and solving real engineering challenges.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="max-w-3xl mx-auto relative pl-8 md:pl-12">
                    {/* Vertical timeline line */}
                    <div className="absolute left-2.5 md:left-5 top-2.5 bottom-2.5 w-px bg-white/5" />

                    {experiences.map((exp, index) => {
                        const duration = calculateDuration(exp.startDate, exp.endDate)
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative mb-12 last:mb-0"
                            >
                                {/* Timeline marker */}
                                <div className="absolute -left-[37px] md:-left-[45px] top-1.5 w-5 h-5 rounded-full bg-surface-900 border-2 border-accent-500 flex items-center justify-center z-10 shadow-glow-sm">
                                    <Briefcase size={10} className="text-accent-400" />
                                </div>

                                {/* Content Details (LinkedIn style open structure) */}
                                <div className="space-y-4">
                                    {/* Role & Company Header */}
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                                            {exp.role}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 mt-1">
                                            <a
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-accent-400 font-semibold hover:text-accent-300 transition-colors text-sm"
                                            >
                                                {exp.company}
                                            </a>
                                            {exp.employmentType && (
                                                <>
                                                    <span className="text-slate-600 text-xs">•</span>
                                                    <span className="text-slate-400 text-xs">{exp.employmentType}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Dates & Duration */}
                                    <div className="text-xs text-slate-500 font-semibold">
                                        <span>{exp.startDateDisplay} – {exp.endDate}</span>
                                        <span className="mx-2 text-slate-600">•</span>
                                        <span>{duration}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="space-y-3 pt-2">
                                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                                            Key Achievements
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-400 leading-relaxed">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div className="pt-2">
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="tech-tag text-[10px] py-0.5 px-2">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                    </div>
            </div>
        </section>
    )
}

export default Experience

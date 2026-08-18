import { motion } from 'framer-motion'
import { Database, Radio, Cog, Shield, Bell, Plug } from 'lucide-react'

const highlights = [
    {
        icon: Database,
        title: 'API Performance',
        description: 'Optimized Django ORM queries and addressed N+1 query problems using select_related() and prefetch_related().',
    },
    {
        icon: Radio,
        title: 'Real-Time Communication',
        description: 'Built real-time features using WebSockets, Django Channels and Redis for live collaboration and notifications.',
    },
    {
        icon: Cog,
        title: 'Background Processing',
        description: 'Used Celery and Redis for asynchronous jobs, email delivery and notification processing.',
    },
    {
        icon: Shield,
        title: 'Authentication & Authorization',
        description: 'Implemented JWT authentication and role-based access control across multiple applications.',
    },
    {
        icon: Bell,
        title: 'Push Notifications',
        description: 'Integrated Firebase Cloud Messaging for web push notifications with background service workers.',
    },
    {
        icon: Plug,
        title: 'Third-Party Integrations',
        description: 'Worked with services such as Agora for video calling and Google Maps for location-based features.',
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, delay: i * 0.08, ease: 'easeOut' },
    }),
}

const EngineeringHighlights = () => {
    return (
        <section className="py-20 md:py-28 bg-gradient-subtle" aria-label="Engineering Highlights">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <p className="section-label">Engineering Highlights</p>
                    <h2 className="section-title">Technical Depth</h2>
                    <p className="section-subtitle mx-auto">
                        Beyond building features — solving real engineering challenges across the stack.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="card p-6 group cursor-default"
                        >
                            <div className="w-9 h-9 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4 group-hover:bg-accent-500/15 transition-colors">
                                <item.icon size={18} className="text-accent-400" />
                            </div>
                            <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EngineeringHighlights

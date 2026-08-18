import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, X, Layers, ShoppingCart, Heart, Server } from 'lucide-react'

const projects = [
    {
        id: 'melo',
        category: 'Project Management & Collaboration',
        title: 'Melo',
        subtitle: 'Project Management & Task Collaboration Platform',
        description: 'A full-stack project management platform designed for teams to organize workspaces, manage tasks and collaborate efficiently.',
        image: '/melo.png',
        liveUrl: 'https://melo.codexenix.com/',
        frontend: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
        backend: ['Django', 'Django REST Framework', 'JWT'],
        infrastructure: ['Redis', 'Celery', 'WebSockets', 'Docker'],
        features: [
            'Workspace management',
            'Kanban boards with drag-and-drop',
            'Task assignment & multiple views',
            'Subtasks, due dates & comments',
            'File attachments',
            'Real-time collaboration',
        ],
        highlights: [
            'Built the complete frontend and backend architecture independently',
            'Implemented real-time updates with WebSockets and Django Channels',
            'Background task processing with Celery and Redis',
            'JWT-based authentication with role-based access control',
        ],
    },
    {
        id: 'nova',
        category: 'Healthcare & E-commerce',
        title: 'Nova Pharmacy',
        subtitle: 'Full-Stack Healthcare & Pharmacy Platform',
        description: 'A full-stack healthcare and pharmacy platform combining e-commerce, inventory management, healthcare services, real-time communication and notification systems.',
        image: '/nova_health.png',
        liveUrl: 'https://novahealth.pk/',
        frontend: ['React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Django', 'Django REST Framework'],
        infrastructure: ['Redis', 'Celery', 'WebSockets', 'Firebase Cloud Messaging', 'Agora', 'Google Maps'],
        featureGroups: [
            {
                icon: ShoppingCart,
                label: 'Commerce',
                items: ['Products, categories, brands & collections', 'Cart, orders & promotions', 'Product variants & reviews'],
            },
            {
                icon: Layers,
                label: 'Inventory',
                items: ['Warehouse management', 'Stock tracking & inventory control'],
            },
            {
                icon: Heart,
                label: 'Healthcare',
                items: ['Doctor profiles & care services', 'Real-time communication & calling'],
            },
            {
                icon: Server,
                label: 'Infrastructure',
                items: ['Push notifications via FCM', 'Video calling with Agora', 'Location services with Google Maps'],
            },
        ],
        highlights: [
            'Built responsive user interfaces and integrated backend APIs',
            'Integrated Firebase Cloud Messaging for push notifications',
            'Video calling functionality using Agora SDK',
            'Real-time features with WebSockets and Redis',
        ],
    },

    {
        id: 'tb-detection',
        category: 'AI / Machine Learning',
        title: 'TB Detection & Severity Analysis',
        subtitle: 'Deep Learning Computer Vision System',
        description: 'Deep learning models trained for segmenting lungs and classifying Tuberculosis (TB) severity, damage percentage, and type from chest X-rays.',
        image: '/fyp.jpeg',
        liveUrl: '',
        frontend: ['Python', 'OpenCV'],
        backend: [],
        infrastructure: ['TensorFlow', 'Keras', 'Pandas'],
        features: [
            'Lung segmentation pipelines',
            'TB classification & severity scoring',
            'Lung damage percentage assessment',
            'Rotation & alignment image normalizations',
        ],
        highlights: [
            'Trained segmentation models to isolate lung tissue from X-ray artifacts',
            'Developed embedding classification for image rotated validation',
            'Implemented custom dataset preprocessing using Pandas and OpenCV',
        ],
    },
    {
        id: 'gym',
        category: 'Fitness & Health',
        title: 'Gym Website',
        subtitle: 'Modern Fitness Center Landing Page',
        description: 'A responsive fitness and gym website featuring premium animations, contact email API integration, and membership programs.',
        image: '/pro1.png',
        liveUrl: 'https://gymcfitclub.netlify.app',
        frontend: ['HTML', 'CSS', 'JavaScript', 'EmailJS'],
        backend: [],
        infrastructure: [],
        features: [
            'Responsive landing page design',
            'Interactive scroll animations',
            'Membership registration form',
            'Email notification API integration',
        ],
        highlights: [
            'Built custom animations using CSS and Vanilla JS',
            'Integrated Email API to collect and route membership signups',
            'Optimized assets for fast initial load performance',
        ],
    },
    {
        id: 'news-app',
        category: 'Frontend Development',
        title: 'News App (BBC Clone)',
        subtitle: 'Real-time Headline News Reader',
        description: 'A news reader application that connects to news APIs to provide real-time updates across multiple topics with a responsive layout styled after BBC News.',
        image: '/News.jpeg',
        liveUrl: 'https://brilliant-raindrop-d410b5.netlify.app',
        frontend: ['React', 'JavaScript', 'CSS', 'NewsAPI'],
        backend: [],
        infrastructure: [],
        features: [
            'Dynamic news feed by topic',
            'Responsive grid news layout',
            'Integration with live news APIs',
            'Custom BBC styled themes',
        ],
        highlights: [
            'Implemented client-side API requests to fetch real-time news articles',
            'Designed clean responsive grids that adjust column widths on smaller layouts',
        ],
    },
]

const FeaturedWork = () => {
    const containerRef = useRef(null)
    const [selectedProject, setSelectedProject] = useState(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    const updateArrows = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
            setShowLeftArrow(scrollLeft > 10)
            setShowRightArrow(scrollWidth - scrollLeft - clientWidth > 10)
        }
    }

    useEffect(() => {
        const el = containerRef.current
        if (el) {
            el.addEventListener('scroll', updateArrows)
            updateArrows()
            window.addEventListener('resize', updateArrows)
        }
        return () => {
            if (el) el.removeEventListener('scroll', updateArrows)
            window.removeEventListener('resize', updateArrows)
        }
    }, [])

    const handleScroll = (dir) => {
        if (containerRef.current) {
            const cardEl = containerRef.current.firstElementChild
            const scrollStep = cardEl ? cardEl.clientWidth + 20 : 340 // card width + gap
            containerRef.current.scrollBy({ left: dir * scrollStep, behavior: 'smooth' })
        }
    }

    return (
        <section id="work" className="py-16 md:py-16" aria-label="Featured Work">
            <div className="section-container">
                {/* Header */}
                <div className="flex items-end justify-between mb-10">
                    <div className="max-w-xl">
                        <p className="section-label">Featured Work</p>
                        <h2 className="section-title">Projects I've Built</h2>
                        <p className="section-subtitle">
                            A selection of real-world applications and systems I've worked on.
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleScroll(-1)}
                            disabled={!showLeftArrow}
                            className="w-10 h-10 rounded-xl border border-white/8 bg-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => handleScroll(1)}
                            disabled={!showRightArrow}
                            className="w-10 h-10 rounded-xl border border-white/8 bg-card flex items-center justify-center text-slate-400 hover:text-white hover:border-white/15 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            aria-label="Next project"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Slider View */}
                <div
                    ref={containerRef}
                    className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 select-none cursor-grab active:cursor-grabbing ml-4 md:ml-8"
                    style={{
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                    }}
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="snap-start snap-always w-[290px] sm:w-[320px] md:w-[340px] flex-shrink-0 card overflow-hidden flex flex-col justify-between"
                        >
                            <div>
                                {/* Top Image area */}
                                <div className="w-full bg-gradient-subtle flex items-center justify-center p-5 border-b border-white/5 aspect-[16/10] flex-shrink-0">
                                    <div className="w-4/5 h-4/5 flex items-center justify-center overflow-hidden rounded-lg bg-surface-800/40 border border-white/5 p-2 shadow-card group/img">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="max-w-full max-h-full object-contain group-hover/img:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                            draggable={false}
                                        />
                                    </div>
                                </div>

                                {/* Content area */}
                                <div className="p-5">
                                    <span className="text-[10px] font-semibold text-accent-400 tracking-wider uppercase block mb-1">
                                        {project.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-0.5">{project.title}</h3>
                                    <p className="text-[11px] text-slate-400 font-medium mb-3">{project.subtitle}</p>
                                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Tags and Buttons at bottom */}
                            <div className="p-5 pt-0">
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {[...project.frontend, ...project.backend, ...project.infrastructure].slice(0, 3).map((tech) => (
                                        <span key={tech} className="tech-tag text-[9px] py-0.5 px-2">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-primary text-[10px] py-2 px-3.5 flex-grow flex items-center justify-center gap-1.5"
                                        >
                                            Live Demo
                                            <ExternalLink size={10} />
                                        </a>
                                    ) : (
                                        <span className="text-[10px] text-center font-medium text-slate-500 border border-white/5 bg-white/2 rounded-xl py-2 px-3.5 flex-grow select-none">
                                            No Demo
                                        </span>
                                    )}
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="btn-secondary text-[10px] py-2 px-3.5 flex-grow"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />

                            {/* Modal Box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="relative w-full max-w-2xl bg-surface-900 border border-white/10 rounded-2xl overflow-hidden shadow-elevated flex flex-col max-h-[85vh] z-10"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-5 border-b border-white/5">
                                    <div>
                                        <span className="text-[10px] font-semibold text-accent-400 tracking-wider uppercase block">
                                            {selectedProject.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                                        aria-label="Close details"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="p-6 overflow-y-auto space-y-6 scrollbar-none">
                                    {/* Description */}
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium mb-1.5">{selectedProject.subtitle}</p>
                                        <p className="text-xs text-slate-400 leading-relaxed">{selectedProject.description}</p>
                                    </div>

                                    {/* Project Breakdown grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {/* Technology Stack */}
                                        <div className="space-y-4">
                                            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider">Tech Stack</h4>
                                            <div className="space-y-3">
                                                {selectedProject.frontend.length > 0 && (
                                                    <div>
                                                        <p className="text-[9px] text-slate-500 font-medium mb-1 uppercase">Frontend</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {selectedProject.frontend.map((t) => (
                                                                <span key={t} className="tech-tag text-[9px] py-0.5 px-2">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {selectedProject.backend.length > 0 && (
                                                    <div>
                                                        <p className="text-[9px] text-slate-500 font-medium mb-1 uppercase">Backend</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {selectedProject.backend.map((t) => (
                                                                <span key={t} className="tech-tag text-[9px] py-0.5 px-2">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {selectedProject.infrastructure.length > 0 && (
                                                    <div>
                                                        <p className="text-[9px] text-slate-500 font-medium mb-1 uppercase">Infrastructure</p>
                                                        <div className="flex flex-wrap gap-1">
                                                            {selectedProject.infrastructure.map((t) => (
                                                                <span key={t} className="tech-tag text-[9px] py-0.5 px-2">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <div>
                                            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-3">Key Features</h4>
                                            {selectedProject.features ? (
                                                <ul className="space-y-2">
                                                    {selectedProject.features.map((f) => (
                                                        <li key={f} className="flex items-start gap-1.5 text-xs text-slate-400">
                                                            <span className="w-1 h-1 rounded-full bg-accent-400 mt-1.5 flex-shrink-0" />
                                                            {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : selectedProject.featureGroups ? (
                                                <div className="space-y-3.5">
                                                    {selectedProject.featureGroups.map((g) => (
                                                        <div key={g.label}>
                                                            <p className="text-[9px] text-slate-300 font-semibold mb-1">{g.label}</p>
                                                            <ul className="space-y-1 pl-3">
                                                                {g.items.map((item) => (
                                                                    <li key={item} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                                                                        <span className="w-1 h-1 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Highlights List */}
                                        <div>
                                            <h4 className="text-[10px] font-semibold text-white uppercase tracking-wider mb-3">Highlights</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.highlights.map((h) => (
                                                    <li key={h} className="flex items-start gap-1.5 text-xs text-slate-400">
                                                        <span className="w-1 h-1 rounded-full bg-accent-400 mt-1.5 flex-shrink-0" />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer action */}
                                <div className="p-4 bg-surface-950/40 border-t border-white/5 flex justify-end gap-2.5">
                                    {selectedProject.liveUrl && (
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-primary text-xs py-2 px-4"
                                        >
                                            Live Demo
                                            <ExternalLink size={12} />
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-4 py-2 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 text-xs text-slate-300 transition-all"
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default FeaturedWork

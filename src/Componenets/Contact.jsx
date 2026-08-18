import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, MessageSquare } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState(null)

    const onSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(event.target)
        formData.append('access_key', 'aac9be13-003b-4a30-8d9a-d3b31a743d27')

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: json,
        }).then((res) => res.json())

        setIsSubmitting(false)
        if (res.success) {
            setSuccessMessage('Message sent successfully!')
            event.target.reset()
        } else {
            setSuccessMessage('Failed to send message. Try again later.')
        }

        setTimeout(() => setSuccessMessage(null), 5000)
    }

    return (
        <section id="contact" className="py-20 md:py-28" aria-label="Contact">
            <div className="section-container">
                {/* CTA Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-left"
                >
                    <p className="section-label">Get In Touch</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let's Build Something
                    </h2>
                    <p className="section-subtitle">
                        I'm open to opportunities where I can build meaningful products and solve challenging engineering problems.
                    </p>
                </motion.div>

                {/* Quick links */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
                >
                        <a
                            href="mailto:ahmed.saeed6420@gmail.com"
                            className="btn-primary flex items-center justify-center gap-2"
                        >
                            <Mail size={16} />
                            Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ahmed-saeed-515117248"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary flex items-center justify-center gap-2"
                        >
                            <LinkedinIcon size={16} />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/ahmedsaeed216"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary flex items-center justify-center gap-2"
                        >
                            <GithubIcon size={16} />
                            GitHub
                        </a>
                    </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="card p-6 md:p-8">
                        <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

                        {successMessage && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-center p-3 mb-6 rounded-xl text-sm font-medium ${
                                    successMessage.includes('successfully')
                                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                }`}
                            >
                                {successMessage}
                            </motion.div>
                        )}

                        <form onSubmit={onSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        className="w-full bg-surface-900/80 border border-white/8 text-white text-sm p-3.5 pl-10 rounded-xl focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        className="w-full bg-surface-900/80 border border-white/8 text-white text-sm p-3.5 pl-10 rounded-xl focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <MessageSquare className="absolute left-3.5 top-4 text-slate-500" size={16} />
                                <textarea
                                    name="message"
                                    placeholder="What do you want to talk about?"
                                    required
                                    className="w-full bg-surface-900/80 border border-white/8 text-white text-sm p-3.5 pl-10 rounded-xl focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all h-32 resize-none placeholder:text-slate-600"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary self-end disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={14} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact

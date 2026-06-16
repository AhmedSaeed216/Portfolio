import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        alert("Message sent successfully!");
    };

    return (
        <section id='contact' className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='text-center mb-12'
            >
                <h2 className="text-neonBlue tracking-widest uppercase font-medium text-sm">Get In Touch</h2>
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-hero-gradient mt-2">Contact Me</h1>
            </motion.div>

            <div className='flex flex-col lg:flex-row gap-12 items-start justify-center'>
                {/* Contact Info (Optional) or just the form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='w-full max-w-xl bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden group'
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonBlue via-neonPurple to-neonBlue opacity-50"></div>

                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='relative group'>
                            <User className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-neonBlue transition-colors' size={20} />
                            <input
                                type="text"
                                placeholder='Your Name'
                                {...register("Name", { required: "Name is required" })}
                                className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/50 text-white transition-all'
                            />
                            {errors.Name && <span className='text-red-400 text-sm mt-1 ml-2'>{errors.Name.message}</span>}
                        </div>

                        <div className='relative group'>
                            <Mail className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-neonBlue transition-colors' size={20} />
                            <input
                                type="email"
                                placeholder='Your Email'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                })}
                                className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/50 text-white transition-all'
                            />
                            {errors.email && <span className='text-red-400 text-sm mt-1 ml-2'>{errors.email.message}</span>}
                        </div>

                        <div className='relative group'>
                            <MessageSquare className='absolute left-4 top-6 text-gray-400 group-focus-within:text-neonBlue transition-colors' size={20} />
                            <textarea
                                placeholder='Your Message'
                                {...register("message", { required: "Message cannot be empty" })}
                                className='w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/50 text-white min-h-[150px] resize-none transition-all'
                            />
                            {errors.message && <span className='text-red-400 text-sm mt-1 ml-2'>{errors.message.message}</span>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className='w-full py-4 bg-hero-gradient text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-glow-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Send Message <Send size={20} />
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

function Contactsend() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "aac9be13-003b-4a30-8d9a-d3b31a743d27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setIsSubmitting(false);
    if (res.success) {
      setSuccessMessage("Message sent successfully!");
    } else {
      setSuccessMessage("Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full py-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-neonBlue tracking-widest uppercase font-medium text-sm">Get In Touch</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">Contact Me</h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-neonBlue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neonPurple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

        {successMessage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-4 mb-6 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 font-medium z-20 relative">
                {successMessage}
            </motion.div>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-6 relative z-10 text-white">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-darkBg/50 border border-white/10 text-white p-4 pl-12 rounded-xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all text-sm sm:text-base"
                />
            </div>
            <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-darkBg/50 border border-white/10 text-white p-4 pl-12 rounded-xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all text-sm sm:text-base"
                />
            </div>
          </div>
          <div className="relative">
             <MessageSquare className="absolute left-4 top-5 text-slate-400" size={20} />
             <textarea
                name="message"
                placeholder="What do you want to talk about?"
                required
                className="w-full bg-darkBg/50 border border-white/10 text-white p-4 pl-12 rounded-xl focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue transition-all h-32 md:h-40 resize-none text-sm sm:text-base"
             />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto self-center md:self-end flex items-center justify-center gap-3 px-8 py-4 bg-hero-gradient text-black font-bold rounded-xl hover:shadow-glow-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contactsend;

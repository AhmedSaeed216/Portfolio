import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-darkBg border-t border-white/10 text-slate-400 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-neonPurple to-transparent opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="font-bold text-white text-xl">Ahmed <span className="text-neonPurple">Saeed</span></p>
          <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm">
          <p className="hover:text-neonBlue transition-colors"><a href="mailto:ahmed.saeed6402@gmail.com">ahmed.saeed6402@gmail.com</a></p>
          <p className="mt-1">0328 1132442</p>
        </div>

        {/* Social Media Links & Top Button */}
        <div className="flex items-center space-x-6">
          <a href="https://github.com/ahmedsaeed216" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <img src="/github.png" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity filter brightness-200" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-saeed-515117248" target="_blank" rel="noopener noreferrer" className="hover:text-neonBlue transition-colors">
            <img src="/linkedin.png" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity filter brightness-200" alt="LinkedIn" />
          </a>
          <motion.a
            whileHover={{ y: -5 }}
            href="#home"
            className="ml-4 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-neonPurple hover:text-neonPurple transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

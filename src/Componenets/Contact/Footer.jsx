import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-8" role="contentinfo">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <p className="font-semibold text-white text-sm">
                            Ahmed<span className="text-accent-400"> </span>Saeed
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                            &copy; {new Date().getFullYear()} Ahmed Saeed. All rights reserved.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="text-center">
                        <a
                            href="mailto:ahmed.saeed6420@gmail.com"
                            className="text-xs text-slate-500 hover:text-accent-400 transition-colors"
                        >
                            ahmed.saeed6420@gmail.com
                        </a>
                    </div>

                    {/* Social & Top */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/ahmedsaeed216"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                            aria-label="GitHub"
                        >
                            <GithubIcon size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ahmed-saeed-515117248"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-500 hover:text-accent-400 rounded-lg hover:bg-white/5 transition-all"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={16} />
                        </a>
                        <a
                            href="mailto:ahmed.saeed6420@gmail.com"
                            className="p-2 text-slate-500 hover:text-accent-400 rounded-lg hover:bg-white/5 transition-all"
                            aria-label="Email"
                        >
                            <Mail size={16} />
                        </a>
                        <span className="w-px h-5 bg-white/10 mx-1" />
                        <a
                            href="#home"
                            className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

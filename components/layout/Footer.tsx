import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-black/50 border-t border-white/5 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Adil Ahamed</h3>
                        <p className="text-gray-400">Building intelligent systems & modern web experiences.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/adil-ahmd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-blue transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/adilahmd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-electric-blue transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:adilahamedtm@gmail.com" className="text-gray-400 hover:text-electric-blue transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Adil Ahamed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

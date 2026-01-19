'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative group">
                        <div className="absolute inset-0 bg-electric-blue rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                        <Image
                            src="/images/profile.jpg"
                            alt="Adil Ahamed"
                            fill
                            className="object-cover rounded-full border-2 border-white/20"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-electric-blue font-medium mb-4 tracking-wide uppercase text-sm">
                        AI & Data Science Enthusiast
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Hi, I&apos;m <span className="text-white relative">Adil Ahamed</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Master&apos;s in AI, ML & Data Science. Building intelligent systems,
                    predictive models, and scalable web solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3 bg-electric-blue text-white rounded-full font-medium transition-all hover:bg-electric-blue-hover hover:scale-105 flex items-center gap-2"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all hover:bg-white/10 hover:scale-105 flex items-center gap-2"
                    >
                        Download Resume
                        <Download size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

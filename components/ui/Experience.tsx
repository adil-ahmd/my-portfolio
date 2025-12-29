'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: 'Artificial Intelligence Intern',
        company: 'HexSoftwares',
        period: 'Aug 2024 – Sep 2024',
        description: 'Built ML and DL models for AI-driven applications. Conducted predictive analytics and sentiment analysis on Twitter data. Visualized insights using Matplotlib.',
    },
];

const education = [
    {
        id: 1,
        degree: "Master's in AI, ML and Data Science",
        institution: 'Yenepoya Deemed University, Mangalore',
        period: 'Oct 2023 – July 2025',
    },
    {
        id: 2,
        degree: "Bachelor's in Physics",
        institution: 'Calicut University, Calicut',
        period: 'April 2020 – April 2023',
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-black/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey</h2>
                    <p className="text-gray-400">My academic and professional pathway.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Work Experience */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-electric-blue" size={24} />
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="pl-6 border-l-2 border-white/10 relative"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-electric-blue" />
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <p className="text-electric-blue font-medium mb-2">{exp.company}</p>
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-electric-blue" size={24} />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="pl-6 border-l-2 border-white/10 relative"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-electric-blue" />
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-electric-blue font-medium mb-2">{edu.institution}</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar size={14} className="mr-2" />
                                        {edu.period}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

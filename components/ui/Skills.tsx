'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        name: 'Languages',
        skills: ['Python', 'SQL', 'HTML/CSS', 'TypeScript'],
    },
    {
        name: 'ML & AI',
        skills: ['Deep Learning', 'NLP', 'GPT', 'CNN', 'Scikit-learn', 'TensorFlow', 'Predictive Modeling'],
    },
    {
        name: 'Data Analytics',
        skills: ['Matplotlib', 'Data Cleaning', 'Feature Engineering', 'Pandas', 'NumPy'],
    },
    {
        name: 'Tools & Cloud',
        skills: ['Git & GitHub', 'AWS Basics', 'Web Scraping', 'Botpress'],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background globs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
                    <p className="text-gray-400">Tools and technologies I leverage to solve problems.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-electric-blue/30 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-black/40 text-gray-300 rounded-md border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

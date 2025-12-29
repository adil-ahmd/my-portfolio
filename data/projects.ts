export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github: string;
    color: string;
}

export const projects: Project[] = [
    {
        id: 'notesafe',
        title: 'NoteSafe',
        description: 'AI-powered Android application designed to detect counterfeit currency using Convolutional Neural Networks (CNN) with 98% accuracy. Features real-time on-device inference via TensorFlow Lite.',
        techStack: ['Kotlin', 'TensorFlow Lite', 'CNN', 'Firebase', 'Android SDK'],
        link: '#', // No live link identified, fallback to github
        github: 'https://github.com/adil-ahmd/Notesafe',
        color: 'from-green-500 to-emerald-700',
    },
    {
        id: 'face-detection',
        title: 'Face Detection System',
        description: 'Real-time computer vision system capable of identifying human faces in video streams with high precision using SSD Caffe models and ResNet-10 architecture.',
        techStack: ['Python', 'OpenCV', 'Caffe', 'ResNet-10', 'NumPy'],
        link: '#',
        github: 'https://github.com/adil-ahmd/face-detection',
        color: 'from-blue-500 to-indigo-700',
    },
    {
        id: 'ai-chatbot',
        title: 'AI Chatbot',
        description: 'Intelligent conversational agent built on Botpress to streamline customer support. Capable of understanding context and delivering accurate responses to complex user queries.',
        techStack: ['Botpress', 'JavaScript', 'NLU', 'HTML'],
        link: '#',
        github: 'https://github.com/adil-ahmd/chatbot',
        color: 'from-purple-500 to-violet-700',
    },
    {
        id: 'sentiment-analytics',
        title: 'Sentiment Analytics',
        description: 'Predictive modeling tool that analyzes Twitter data to gauge public sentiment towards airline services. Utilizes NLTK and Scikit-learn for text classification and pattern recognition.',
        techStack: ['Python', 'NLTK', 'Scikit-learn', 'Pandas', 'Matplotlib'],
        link: '#',
        github: 'https://github.com/adil-ahmd/sntmnt_analitics',
        color: 'from-orange-500 to-red-700',
    },
];

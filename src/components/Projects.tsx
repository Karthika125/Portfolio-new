'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaServer, FaChartBar, FaCogs } from 'react-icons/fa';
import { Card3D, SpotlightEffect, AnimatedText, StaggerContainer, StaggerItem } from './AnimatedElements';
import BackgroundEffect from './BackgroundEffect';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  category: 'development' | 'data';
  tags: string[];
  demoLink: string;
  githubLink: string;
  inProgress?: boolean;
  image?: string;  // Path to project image
}

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState<'all' | 'development' | 'data'>('all');

  const getProjectIcon = (category: 'development' | 'data', title: string) => {
    if (category === 'development') {
      if (title.includes('Mobile') || title.includes('App')) {
        return <FaMobile size={60} />;
      } else if (title.includes('System') || title.includes('Management')) {
        return <FaServer size={60} />;
      } else {
        return <FaCode size={60} />;
      }
    } else if (category === 'data') {
      if (title.includes('Analysis')) {
        return <FaChartBar size={60} />;
      } else {
        return <FaDatabase size={60} />;
      }
    }
    return <FaCogs size={60} />;
  };
  
  const getGradient = (index: number) => {
    const gradients = [
      'from-purple-500 to-blue-500',
      'from-blue-500 to-teal-500',
      'from-indigo-500 to-purple-500',
      'from-pink-500 to-purple-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-pink-500',
      'from-blue-500 to-indigo-500',
    ];
    return gradients[index % gradients.length];
  };

  // Add a public path to the image URLs to match where the images actually are
  const getImagePath = (path: string | undefined) => {
    if (!path) return undefined;
    // The images are already in the public folder, so return the path as is
    return path;
  };

  const projects: Project[] = [
    {
      title: 'ClaimIT – Lost & Found App',
      description: 'A mobile app that helps users post, search, and communicate regarding lost and found items. Includes chat and real-time alerts.',
      category: 'development',
      tags: ['React Native', 'Firebase', 'Mobile App'],
      demoLink: 'https://claimit-five.vercel.app/',
      githubLink: 'https://github.com/Karthika125/claimit.git',
      image: '/assets/images/Claimit.jpeg',
    },
    {
      title: 'NEXT App – Nurturing Entrepreneurs and Xceptional Talents',
      description: 'A collaborative platform connecting students, startups, and funding agencies to foster innovation and entrepreneurship.',
      category: 'development',
      tags: ['React Native', 'Node.js', 'Express.js'],
      demoLink: '#',
      githubLink: 'https://github.com/Karthika125/NEXT-Application',
      inProgress: true,
      image: '/assets/images/next.jpeg',
    },
    {
      title: 'HomeSync – Roommate & Rental Platform',
      description: 'A user-friendly web platform for managing rentals and roommate listings with authentication and listing search features.',
      category: 'development',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      demoLink: 'https://homesynk.netlify.app/',
      githubLink: 'https://github.com/Karthika125/Rental-System-Application',
      image: '/assets/images/homesync.jpeg',
    },
    {
      title: 'Tour Management System',
      description: 'A tourism portal for managing user details, agency operations, tour packages, feedback, and payments using RDBMS.',
      category: 'development',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      demoLink: '#',
      githubLink: 'https://github.com/Karthika125/Travel-project',
      // Use gradient instead of placeholder image
      // image: '/images/tour-placeholder.jpg',
    },
    {
      title: 'SAIT Placement Portal',
      description: 'A dynamic job portal with resume analysis, mock tests, company registration, and student application tracking.',
      category: 'development',
      tags: ['React.js', 'Supabase', 'PDF Utils'],
      demoLink: 'https://sait-placement-portal.vercel.app/',
      githubLink: 'https://github.com/Karthika125/Placement-Portal',
      image: '/assets/images/saitplacement.jpeg',
    },
    {
      title: 'Smart Recycle Hub',
      description: 'A hackathon project for listing waste/recyclable items and offering upcycling ideas with chat features.',
      category: 'development',
      tags: ['React', 'Firebase'],
      demoLink: '#',
      githubLink: 'https://github.com/Karthika125/My-Recycle-App.git',
      image: '/assets/images/myrecycleapp.jpeg',
    },
    {
      title: 'Hotel Booking Data Analysis',
      description: 'Analysis of hotel booking trends to reveal insights about cancellations, seasonal demand, and guest behaviors.',
      category: 'data',
      tags: ['Python', 'Pandas', 'Excel'],
      demoLink: '#',
      githubLink: 'https://github.com/Karthika125/Hotel-Cancellation-Data-Analysis',
      image: '/assets/images/hotelanalysis.jpeg',
    },
    {
      title: 'IPL Data Analysis',
      description: 'Analysis of IPL match data using Power BI, providing insights on team performances, player statistics, and match trends.',
      category: 'data',
      tags: ['Power BI', 'Data Visualization'],
      demoLink: '#',
      githubLink: 'https://github.com/Karthika125/IPL-PowerBi.git',
      image: '/assets/images/iplpowerbipic.jpeg',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Section-specific background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <BackgroundEffect variant="grid" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <AnimatedText 
            text="Showcasing my professional portfolio with a diverse range of projects in web development, mobile applications, and data analytics."
            className="text-light-darker max-w-3xl mx-auto text-lg"
          />
          
          <motion.div 
            className="flex flex-wrap justify-center mt-8 space-x-2 md:space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button 
              className={`px-4 py-2 rounded-full mb-2 md:mb-0 ${filter === 'all' ? 'bg-primary text-white' : 'bg-dark text-light-darker hover:bg-dark-light'} transition-all duration-300`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-full mb-2 md:mb-0 ${filter === 'development' ? 'bg-primary text-white' : 'bg-dark text-light-darker hover:bg-dark-light'} transition-all duration-300`}
              onClick={() => setFilter('development')}
            >
              Web & Mobile Development
            </button>
            <button 
              className={`px-4 py-2 rounded-full mb-2 md:mb-0 ${filter === 'data' ? 'bg-primary text-white' : 'bg-dark text-light-darker hover:bg-dark-light'} transition-all duration-300`}
              onClick={() => setFilter('data')}
            >
              Data Analytics
            </button>
          </motion.div>
        </motion.div>
        
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          delayIncrement={0.05}
        >
          {filteredProjects.map((project, index) => (
            <StaggerItem key={index}>
              <SpotlightEffect intensity={0.2} size={300}>
                <Card3D
                  className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-dark-light hover:border-primary/30 h-full flex flex-col"
                  intensity={10}
                >
                  <div className={`h-48 relative overflow-hidden ${project.image ? '' : `bg-gradient-to-br ${getGradient(index)}`} opacity-90`}>
                    {project.image ? (
                      <div className="absolute inset-0 z-0">
                        <img 
                          src={getImagePath(project.image)} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      </div>
                    ) : null}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center text-white z-10"
                      initial={{ opacity: 0.3, scale: 0.9 }}
                      whileHover={{ opacity: 0.7, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {getProjectIcon(project.category, project.title)}
                    </motion.div>
                    
                    {project.inProgress && (
                      <div className="absolute top-4 right-4 bg-dark text-white text-xs px-3 py-1 rounded-full z-10">
                        In Progress
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark to-transparent h-24"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col backdrop-blur-sm z-10">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1, x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-light-darker mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-dark-light text-primary/90 text-xs rounded-md font-medium"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(139, 92, 246, 0.2)'
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-dark-light">
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-light-DEFAULT hover:text-primary transition-colors duration-300 group"
                        aria-label="GitHub Repository"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-2">
                          <FaGithub size={18} />
                          <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Repository</span>
                        </div>
                      </motion.a>
                      <motion.a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                      >
                        <span>View Project</span>
                        <FaExternalLinkAlt size={12} />
                      </motion.a>
                    </div>
                  </div>
                </Card3D>
              </SpotlightEffect>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SpotlightEffect size={250} intensity={0.2}>
            <motion.a 
              href="https://github.com/Karthika125" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-dark border border-primary/30 text-light-DEFAULT rounded-lg hover:bg-dark-light transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <FaGithub className="text-primary group-hover:scale-110 transition-transform duration-300" size={20} />
              <span>Explore More Projects on GitHub</span>
            </motion.a>
          </SpotlightEffect>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
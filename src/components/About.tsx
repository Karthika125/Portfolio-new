'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaLaptopCode, FaChartLine, FaServer } from 'react-icons/fa';
import { Card3D, SpotlightEffect, AnimatedText, StaggerContainer, StaggerItem } from './AnimatedElements';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const specializations = [
    {
      icon: <FaUserGraduate size={30} />,
      title: 'Academic Background',
      description: 'Pursuing Information Technology at Cochin University with a focus on computer science fundamentals and emerging technologies.',
    },
    {
      icon: <FaLaptopCode size={30} />,
      title: 'Web Development',
      description: 'Creating responsive, user-friendly applications with modern frameworks and best practices in UI/UX design.',
    },
    {
      icon: <FaChartLine size={30} />,
      title: 'Data Analytics',
      description: 'Transforming complex datasets into actionable business insights using advanced analytical tools and techniques.',
    },
    {
      icon: <FaServer size={30} />,
      title: 'Full Stack Development',
      description: 'Building end-to-end solutions from database architecture to user interfaces with scalable and maintainable code.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-lighter relative overflow-visible z-10">
      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <AnimatedText 
            text="A dedicated Software Engineer with a passion for developing innovative solutions and analyzing complex data to drive informed decision-making."
            className="text-light-darker max-w-3xl mx-auto text-lg"
          />
        </motion.div>
        
        <div ref={ref} className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="relative order-2 md:order-1 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightEffect intensity={0.2} size={500}>
              <Card3D className="w-full" intensity={15}>
                <div className="aspect-square max-w-md w-full mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden p-6 border border-dark-light shadow-lg">
                  <div className="bg-dark p-6 rounded-lg h-full backdrop-blur-sm bg-opacity-80">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Professional Summary</h3>
                    <p className="text-light-darker mb-4">
                      I am a Software Engineer with a strong focus on web development and data analytics, currently pursuing a Bachelor's degree in Information Technology at Cochin University of Science and Technology with a CGPA of 9.16.
                    </p>
                    <p className="text-light-darker mb-6">
                      My experience spans full-stack development and data analysis, where I combine technical expertise with an eye for user experience. I'm continuously learning and adapting to new technologies to create efficient, scalable solutions.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-light-darker">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="w-28 font-medium text-primary">Name:</span>
                          <span>Karthika Suresh</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-28 font-medium text-primary">Email:</span>
                          <span>karthikasuresh.v2@gmail.com</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <span className="w-28 font-medium text-primary">Based in:</span>
                          <span>Kochi, India</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-28 font-medium text-primary">Education:</span>
                          <span>B.Tech IT (2022-26)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </SpotlightEffect>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 z-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              Areas of Expertise
            </motion.h3>
            <motion.p 
              className="text-light-darker mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              With a focus on both frontend and backend technologies, I specialize in creating robust applications and deriving meaningful insights from data.
            </motion.p>
            
            <StaggerContainer className="space-y-4">
              {specializations.map((item, index) => (
                <StaggerItem key={index}>
                  <SpotlightEffect intensity={0.15} size={300}>
                    <Card3D 
                      className="flex items-start gap-4 bg-dark p-4 rounded-lg border border-dark-light hover:border-primary/30 transition-all duration-300"
                      intensity={8}
                    >
                      <div className="mt-1 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-light-darker text-sm">{item.description}</p>
                      </div>
                    </Card3D>
                  </SpotlightEffect>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
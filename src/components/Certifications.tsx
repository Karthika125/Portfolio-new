'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaMicrosoft, FaBook, FaLaptop } from 'react-icons/fa';

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: 'Generative AI Certification',
      organization: 'Microsoft',
      date: '2024',
      icon: <FaMicrosoft size={30} />,
      iconBg: 'bg-blue-500',
      description: 'Comprehensive certification covering generative AI models, applications, and implementation strategies.',
    },
    {
      title: 'Python for Data Analytics',
      organization: 'Great Learning',
      date: '2023',
      icon: <FaLaptop size={30} />,
      iconBg: 'bg-green-500',
      description: 'Mastery of Python libraries and tools for data analysis, visualization, and interpretation.',
    },
    {
      title: 'Microsoft Azure Data Fundamentals',
      organization: 'Microsoft',
      date: '2023',
      icon: <FaMicrosoft size={30} />,
      iconBg: 'bg-blue-500',
      description: 'Foundational knowledge of core data concepts and Microsoft Azure data services.',
    },
    {
      title: 'Fundamentals of Large-Scale Analytics',
      organization: 'Microsoft',
      date: '2022',
      icon: <FaBook size={30} />,
      iconBg: 'bg-yellow-500',
      description: 'Techniques and methodologies for analyzing large datasets and extracting meaningful insights.',
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
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
    <section id="certifications" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Certifications</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-darker max-w-3xl mx-auto text-lg">
            Professional certifications that showcase my technical skills and expertise.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUpVariants}
              className="bg-dark-lighter rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-primary/30 border border-dark-light flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-primary/20 text-primary`}>
                  {cert.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-center">{cert.title}</h3>
              
              <div className="bg-dark-light h-0.5 w-12 mx-auto my-3"></div>
              
              <div className="text-center mb-4">
                <span className="text-primary font-medium">{cert.organization}</span>
                <span className="text-light-darker text-sm block mt-1">{cert.date}</span>
              </div>
              
              <p className="text-light-darker text-center mt-auto">
                {cert.description}
              </p>
              
              <div className="mt-4 flex justify-center">
                <button className="flex items-center gap-2 text-primary hover:text-purple-400 transition-colors duration-300">
                  <FaCertificate />
                  <span className="text-sm">View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Continuous learning paragraph removed as requested */}
      </div>
    </section>
  );
};

export default Certifications; 
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUniversity, FaGraduationCap, FaBook, FaLaptopCode, FaAward } from 'react-icons/fa';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const educationData = [
    {
      institution: 'Cochin University of Science and Technology',
      degree: 'Bachelor of Technology in Information Technology',
      period: '2022 - 2026',
      location: 'Kochi, India',
      gpa: 'CGPA: 9.16',
      icon: <FaUniversity size={28} />,
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Application Development',
        'Data Analytics',
        'Cloud Computing'
      ]
    },
  ];

  const additionalEducation = [
    {
      title: "Specialized Coursework",
      icon: <FaBook size={24} />,
      items: [
        'Advanced Python Programming',
        'React & React Native Development',
        'Data Visualization Techniques',
      
      ]
    },
    {
      title: "Technical Projects",
      icon: <FaLaptopCode size={24} />,
      items: [
        'Full-stack Web Applications',
        'Mobile App Development',
        'Data Analysis & Visualization',
        'Database Design & Management'
      ]
    },
    
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-secondary opacity-5 rounded-full"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-primary opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic <span className="text-primary">Background</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-darker max-w-3xl mx-auto text-lg">
            My educational journey has equipped me with a strong foundation in computer science principles and practical software engineering skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <motion.div 
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-dark p-6 rounded-lg border border-dark-light sticky top-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                  <FaGraduationCap size={28} />
                </div>
                <h3 className="text-xl font-bold">Current Education</h3>
              </div>
              
              <div className="space-y-4 text-light-darker">
                {educationData.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-light-DEFAULT">{edu.institution}</h4>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span>{edu.period}</span>
                      <span>{edu.gpa}</span>
                    </div>
                    <div className="text-sm">{edu.location}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2">
            <motion.div 
              className="bg-dark p-6 rounded-lg"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-dark-light">Relevant Coursework & Achievements</h3>
              
              <div className="space-y-8">
                {additionalEducation.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="pb-6 last:pb-0 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary">{item.icon}</span>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-8">
                      {item.items.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-light-darker">{course}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
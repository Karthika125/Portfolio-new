'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experienceData = [
    {
      position: 'Full-Stack Development Intern',
      company: 'Indolike',
      period: 'Ongoing',
      location: 'Remote',
      description: 'Developing and maintaining full-stack web applications, ensuring high-quality code and collaboration.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Full-Stack', 'Collaboration'],
    },
    {
      position: 'Data Analytics Intern',
      company: 'Zidio Development',
      period: 'Oct 2024 - Dec 2024',
      location: 'Bengaluru',
      description: 'Collected, cleaned, and visualized data for business intelligence insights. Utilized Python and Excel for data analysis.',
      skills: ['Python', 'Excel', 'Data Visualization', 'Data Cleaning', 'Business Intelligence'],
    },
    {
      position: 'Data Analytics Intern',
      company: 'Mainflow Technologies',
      period: 'July 2024 - Sept 2024',
      location: 'Remote',
      description: 'Analyzed datasets using Python and Excel to provide actionable business insights. Created reports and visualizations to optimize decision-making.',
      skills: ['Python', 'Excel', 'Data Analysis', 'Reporting', 'Visualization'],
    },
    {
      position: 'Content Management Intern',
      company: 'InAmigos Foundation',
      period: 'Dec 2024 - Jan 2025',
      location: 'Remote',
      description: 'Developed SEO-optimized content for social issues like education, women empowerment, and sustainability. Conducted keyword research to enhance blog visibility and drive traffic.',
      skills: ['SEO', 'Content Creation', 'Keyword Research', 'Social Issues Research'],
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-darker max-w-3xl mx-auto text-lg">
            My professional journey has exposed me to various aspects of software development and data analytics, allowing me to build a diverse skill set.
          </p>
        </motion.div>
        
        <div 
          ref={ref} 
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
          
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-auto md:pl-12 md:pr-0 md:text-left' : 'md:mr-auto md:ml-auto md:pr-12 md:pl-0 md:text-left'} md:w-1/2 w-full pl-12`}
            >
              <div className="absolute left-0 md:left-auto md:right-auto md:top-0 top-0 flex items-center justify-center w-10 h-10 bg-primary rounded-full z-10 shadow-lg md:transform md:translate-x-1/2">
                <FaBriefcase className="text-white" />
              </div>
              
              <div className="bg-dark-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-dark-light hover:border-primary/40">
                <h3 className="text-xl font-bold mb-2 text-light-DEFAULT">{job.position}</h3>
                <h4 className="text-lg text-primary mb-3">{job.company}</h4>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-light-darker">
                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <p className="mb-4 text-light-darker">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-dark text-primary text-xs rounded-full border border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaTools, FaCogs } from 'react-icons/fa';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      icon: <FaCode size={30} />,
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'C++', 'HTML', 'CSS'],
    },
    {
      icon: <FaTools size={30} />,
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'React Native', 'Node.js', 'Express.js', 'Next.js', 'Tailwind CSS'],
    },
    {
      icon: <FaDatabase size={30} />,
      title: 'Databases',
      skills: ['MySQL', 'Firebase', 'Supabase'],
    },
    {
      icon: <FaCogs size={30} />,
      title: 'Tools & Technologies',
      skills: ['Git', 'Power BI', 'Excel', 'Pandas', 'VS Code', 'Matplotlib', 'Vite'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-darker max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical expertise, developed through academic projects and professional experiences.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-dark-lighter p-8 rounded-lg border border-dark-light hover:border-primary/30 transition-all duration-300"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="text-primary">{category.icon}</span>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </motion.div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="px-4 py-2 bg-dark rounded-full text-light-DEFAULT border border-dark-light hover:border-primary/40 hover:bg-dark-light transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
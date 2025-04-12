'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      title: 'Runner-up – Tinkerhack Hackathon',
      organization: 'Tinkerhub',
      date: '2023',
      icon: <FaTrophy size={40} />,
      description: 'Contributed to the development of an innovative project with a team, earning the runner-up position among 30+ participating teams.',
    },
    {
      title: 'Best Performer',
      organization: 'InAmigos Foundation',
      date: '2025',
      icon: <FaAward size={40} />,
      description: 'Awarded a Letter of Recommendation and certificate of appreciation for outstanding performance during the internship.',
    },
    // Add more achievements as needed
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <section id="achievements" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 right-0 w-80 h-80 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute -bottom-24 left-0 w-80 h-80 bg-secondary opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Achievements</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-darker max-w-3xl mx-auto text-lg">
            Recognition and accomplishments I've earned through dedication and hard work.
          </p>
        </motion.div>
        
        <div 
          ref={ref}
          className="max-w-4xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              variants={fadeInVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className={`flex mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-8`}
            >
              <div className={`shrink-0 lg:w-1/3 w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-20 h-20 rounded-full bg-dark flex items-center justify-center relative">
                  <div className="absolute w-full h-full rounded-full border-2 border-primary/50 animate-ping opacity-20"></div>
                  <div className="text-primary">
                    {achievement.icon}
                  </div>
                </div>
              </div>
              
              <div className={`lg:w-2/3 w-full ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <h3 className="text-xl font-bold text-light-DEFAULT mb-2">{achievement.title}</h3>
                <div className="flex items-center gap-2 mb-3 text-sm text-light-darker">
                  <span className="text-primary font-medium">{achievement.organization}</span>
                  <span>•</span>
                  <span>{achievement.date}</span>
                </div>
                <p className="text-light-darker">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 py-3 px-6 bg-dark rounded-full border border-primary/30">
            <FaMedal className="text-primary" />
            <span className="text-light-DEFAULT font-medium">Always striving for excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements; 
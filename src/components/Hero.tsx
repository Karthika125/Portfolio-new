'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative pt-20 pb-10 overflow-hidden"
    >
      {/* Background Gradient Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-secondary opacity-20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-xl md:text-2xl text-secondary font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-light-DEFAULT mt-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Karthika <span className="text-primary">Suresh</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-light-darker font-semibold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Software Engineer
            </motion.h2>
            
            <motion.p 
              className="text-light-darker max-w-xl text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Passionate about building impactful web applications and turning data into valuable insights. Currently pursuing a Bachelor's degree in Information Technology.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="https://github.com/Karthika125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/KarthikaSuresh125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="mailto:karthikasuresh.v2@gmail.com" 
                className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
              <a 
                href="#" 
                className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                aria-label="Resume"
              >
                <FaFileAlt size={24} />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="contact"
                smooth
                duration={500}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
              >
                Contact Me
              </Link>
              <Link
                to="projects"
                smooth
                duration={500}
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary p-2">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-primary to-secondary relative">
                {/* Profile image */}
                <img 
                  src="/assets/images/kathu-white.jpg" 
                  alt="Karthika Suresh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <Link
            to="about"
            smooth
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-light-darker mb-2">Scroll Down</span>
            <div className="w-5 h-10 border-2 border-light-darker rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-light-darker rounded-full animate-bounce-slow"></div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 
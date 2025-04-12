'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const footerLinks = [
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
  ];
  
  const socialLinks = [
    { 
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Karthika125',
    },
    { 
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/KarthikaSuresh125',
    },
    { 
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:karthikasuresh.v2@gmail.com',
    },
  ];
  
  return (
    <footer className="bg-dark-lighter pt-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-dark-light">
          <div className="lg:col-span-2">
            <Link to="hero" smooth duration={500} className="cursor-pointer">
              <h3 className="text-2xl font-bold text-primary mb-4">Karthika Suresh</h3>
            </Link>
            <p className="text-light-darker mb-6 max-w-md">
              A passionate Software Engineer specializing in web development and data analytics. 
              Building modern applications with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-light-DEFAULT hover:text-primary hover:bg-dark-light transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.target} 
                    smooth 
                    duration={500} 
                    className="text-light-darker hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-light-darker">
              <li>
                <span className="block">Email:</span>
                <a 
                  href="mailto:karthikasuresh.v2@gmail.com" 
                  className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                >
                  karthikasuresh.v2@gmail.com
                </a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a 
                  href="tel:+917907869565" 
                  className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                >
                  +91 7907869565
                </a>
              </li>
              <li>
                <span className="block">Location:</span>
                <span className="text-light-DEFAULT">Kochi, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 text-center text-light-darker">
          <p>
            &copy; {new Date().getFullYear()} Karthika Suresh. All rights reserved.
          </p>
        </div>
      </div>
      
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer; 
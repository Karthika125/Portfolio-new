'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'karthikasuresh.v2@gmail.com',
      link: 'mailto:karthikasuresh.v2@gmail.com',
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      value: '+91 7907869565',
      link: 'tel:+917907869565',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Kochi, India',
      link: null,
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'KarthikaSuresh125',
      link: 'https://www.linkedin.com/in/KarthikaSuresh125',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'Karthika125',
      link: 'https://github.com/Karthika125',
    },
  ];

  const fadeInUpVariants = {
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
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-light-darker max-w-3xl mx-auto text-lg">
            Feel free to reach out to me for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.div 
            className="lg:col-span-2 bg-dark-lighter p-8 rounded-lg"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="text-primary mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-light-darker">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.title === 'Email' || info.title === 'Phone' ? '_self' : '_blank'} 
                        rel="noopener noreferrer"
                        className="text-light-DEFAULT hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-light-DEFAULT">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-dark rounded-lg border border-dark-light">
              <h4 className="text-lg font-semibold mb-3">Available For</h4>
              <ul className="space-y-2 text-light-darker">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Full-time opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Remote collaborations</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 bg-dark-lighter p-8 rounded-lg"
            variants={fadeInUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-800/20 border border-green-700 text-green-200 p-4 rounded-lg text-center"
              >
                <p>Thank you for your message! I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-light-darker mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark border border-dark-light text-light-DEFAULT rounded-lg p-3 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-light-darker mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark border border-dark-light text-light-DEFAULT rounded-lg p-3 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-light-darker mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark border border-dark-light text-light-DEFAULT rounded-lg p-3 focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-light-darker mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark border border-dark-light text-light-DEFAULT rounded-lg p-3 focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isSubmitting 
                      ? 'bg-primary/50 cursor-not-allowed' 
                      : 'bg-primary hover:bg-purple-700'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
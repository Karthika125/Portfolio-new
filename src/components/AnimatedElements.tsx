'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// 3D Card that tilts on hover
export const Card3D = ({ 
  children, 
  className = '',
  intensity = 10
}: { 
  children: ReactNode; 
  className?: string;
  intensity?: number;
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * intensity * -1;
    const rotateYValue = ((x - centerX) / centerX) * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      className={`relative transform-gpu ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

// Staggered fade-in for a list of items
export const StaggerContainer = ({
  children,
  className = '',
  delayIncrement = 0.1, 
  startDelay = 0
}: {
  children: ReactNode;
  className?: string;
  delayIncrement?: number;
  startDelay?: number;
}) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delayIncrement,
        delayChildren: startDelay,
      },
    },
  };
  
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

// Item inside a stagger container
export const StaggerItem = ({
  children,
  className = '',
  direction = 'up'
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}) => {
  const directionValues = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };
  
  const item: Variants = {
    hidden: { 
      opacity: 0, 
      ...directionValues[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.8,
        damping: 15,
      },
    },
  };
  
  return (
    <motion.div
      className={className}
      variants={item}
    >
      {children}
    </motion.div>
  );
};

// Animated text that reveals character by character
export const AnimatedText = ({
  text,
  className = '',
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      viewport={{ once }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Floating animation component
export const FloatingElement = ({
  children,
  className = '',
  xFactor = 10,
  yFactor = 10,
  duration = 5,
}: {
  children: ReactNode;
  className?: string;
  xFactor?: number;
  yFactor?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [yFactor * -1, yFactor, yFactor * -1],
        x: [xFactor * -1, 0, xFactor, 0, xFactor * -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Spotlight effect that follows cursor
export const SpotlightEffect = ({
  children,
  className = '',
  size = 300,
  intensity = 0.3,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
  intensity?: number;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute -inset-px z-10"
        animate={{
          background: isHovered
            ? `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, ${intensity}), transparent 80%)`
            : 'none',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

// Spinning 3D cube
export const Cube3D = ({
  className = '',
  size = 100,
  speed = 10,
  faces = ['1', '2', '3', '4', '5', '6'],
  colors = ['#8B5CF6', '#6D28D9', '#4C1D95', '#5B21B6', '#7C3AED', '#8B5CF6'],
}: {
  className?: string;
  size?: number;
  speed?: number;
  faces?: string[];
  colors?: string[];
}) => {
  return (
    <div 
      className={`relative perspective-[800px] ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="w-full h-full transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 grid place-items-center text-white font-bold" 
          style={{
            transform: `translateZ(${size/2}px)`,
            backgroundColor: colors[0],
          }}
        >
          {faces[0]}
        </div>
        {/* Back */}
        <div 
          className="absolute inset-0 grid place-items-center text-white font-bold" 
          style={{
            transform: `rotateY(180deg) translateZ(${size/2}px)`,
            backgroundColor: colors[1],
          }}
        >
          {faces[1]}
        </div>
        {/* Right */}
        <div 
          className="absolute inset-0 grid place-items-center text-white font-bold" 
          style={{
            transform: `rotateY(90deg) translateZ(${size/2}px)`,
            backgroundColor: colors[2],
          }}
        >
          {faces[2]}
        </div>
        {/* Left */}
        <div 
          className="absolute inset-0 grid place-items-center text-white font-bold" 
          style={{
            transform: `rotateY(-90deg) translateZ(${size/2}px)`,
            backgroundColor: colors[3],
          }}
        >
          {faces[3]}
        </div>
        {/* Top */}
        <div 
          className="absolute inset-0 grid place-items-center text-white font-bold" 
          style={{
            transform: `rotateX(90deg) translateZ(${size/2}px)`,
            backgroundColor: colors[4],
          }}
        >
          {faces[4]}
        </div>
        {/* Bottom */}
        <div 
          className="absolute inset-0 grid place-items-center text-white font-bold" 
          style={{
            transform: `rotateX(-90deg) translateZ(${size/2}px)`,
            backgroundColor: colors[5],
          }}
        >
          {faces[5]}
        </div>
      </motion.div>
    </div>
  );
};

// Expose all animations
export default {
  Card3D,
  StaggerContainer,
  StaggerItem,
  AnimatedText,
  FloatingElement,
  SpotlightEffect,
  Cube3D
}; 
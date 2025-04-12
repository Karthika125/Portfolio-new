'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectProps {
  variant?: 'dots' | 'grid' | 'particles' | 'gradient';
  className?: string;
}

const BackgroundEffect = ({ variant = 'particles', className = '' }: BackgroundEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particles background effect
  useEffect(() => {
    if (variant !== 'particles' || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const particles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];
    
    // Create particles
    for (let i = 0; i < Math.min(width / 10, 100); i++) {
      const radius = Math.random() * 2 + 0.5;
      const x = Math.random() * width;
      const y = Math.random() * height;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      
      // Purple theme colors
      const colors = [
        'rgba(139, 92, 246, 0.3)', // Primary (purple)
        'rgba(79, 70, 229, 0.2)',  // Indigo
        'rgba(59, 130, 246, 0.2)', // Blue
        'rgba(236, 72, 153, 0.2)'  // Pink
      ];
      
      particles.push({
        x,
        y,
        radius,
        dx,
        dy,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Create particle connections
    const drawLines = (p1: typeof particles[0], p2: typeof particles[0]) => {
      const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
      const maxDistance = 150;
      
      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / maxDistance)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          drawLines(p, particles[j]);
        }
        
        // Move particles and bounce off edges
        p.x += p.dx;
        p.y += p.dy;
        
        if (p.x < 0 || p.x > width) p.dx = -p.dx;
        if (p.y < 0 || p.y > height) p.dy = -p.dy;
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);
  
  // Render different background variants
  if (variant === 'particles') {
    return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`} />;
  }
  
  if (variant === 'dots') {
    return (
      <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`} 
           style={{
             backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }} 
      />
    );
  }
  
  if (variant === 'grid') {
    return (
      <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
           style={{
             backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
             backgroundSize: '50px 50px',
             backgroundPosition: '-1px -1px'
           }}
      />
    );
  }
  
  if (variant === 'gradient') {
    return (
      <div className={`fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 ${className}`}>
        <motion.div 
          className="absolute -inset-[10%] opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.4) 0%, rgba(13, 10, 25, 0) 50%)',
              'radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.4) 0%, rgba(13, 10, 25, 0) 50%)',
              'radial-gradient(circle at 40% 70%, rgba(139, 92, 246, 0.4) 0%, rgba(13, 10, 25, 0) 50%)',
              'radial-gradient(circle at 60% 50%, rgba(139, 92, 246, 0.4) 0%, rgba(13, 10, 25, 0) 50%)',
              'radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.4) 0%, rgba(13, 10, 25, 0) 50%)'
            ]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
      </div>
    );
  }
  
  return null;
};

export default BackgroundEffect; 
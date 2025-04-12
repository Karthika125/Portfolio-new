import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BackgroundEffect from '@/components/BackgroundEffect';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Karthika Suresh | Software Engineer',
  description: 'Portfolio of Karthika Suresh, a Software Engineer specializing in web development and data analytics',
  keywords: 'software engineer, web development, React, Next.js, data analytics, Python',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-dark text-light-DEFAULT min-h-screen relative`}>
        {/* Particle background effect */}
        <BackgroundEffect variant="particles" />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
} 
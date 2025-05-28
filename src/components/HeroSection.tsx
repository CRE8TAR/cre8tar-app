
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link2, Wallet } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const { readingMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateImageTransform = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;
    
    // Limit the rotation to reasonable values
    const rotateX = deltaY * 5; // Vertical mouse movement affects X rotation
    const rotateY = -deltaX * 5; // Horizontal mouse movement affects Y rotation
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20" id="home">
      <div className="absolute inset-0 bg-[#05070F]">
        <div className={`absolute inset-0 ${readingMode ? 'bg-gradient-to-r from-slate-100 to-slate-200' : 'bg-hero-gradient opacity-20'}`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className={`text-6xl md:text-5xl font-doto font-bold ${readingMode ? 'text-gray-800' : 'gradient-text'} text-[50px] mb-6`}>
            BLOCKCHAIN NFT AVATARS
            </h1>
        
          <TypewriterEffect 
            text="Create, evolve, and trade emotional avatars secured on-chain. Digital companions with real ownership."
            delay={30}
            className={`font-doto ${readingMode ? 'text-gray-800' : 'text-white'} font-bold text-[20px] hover:text-cre8-purple transition-colors text-base py-1`}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className={`${readingMode ? 'bg-cre8-purple-dark' : 'bg-cre8-purple'} hover:bg-cre8-purple-dark ${readingMode ? 'text-black' : 'text-white'} font-bold px-8 py-6 rounded-md flex items-center gap-2 transition-all duration-300 text-[20px]`}>
              <Wallet size={18} />
              Connect Wallet
            </Button>
            <Button variant="outline" className={`border-cre8-purple ${readingMode ? 'text-black hover:text-white' : 'text-white'} hover:bg-cre8-purple/20 font-bold px-8 py-6 rounded-md flex items-center gap-2 transition-all duration-300 text-[20px]`}>
              <Link2 size={18} />
              Explore NFTs
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="/lovable-uploads/e8b9b94d-5876-4610-a9cc-d2b6b98dc95a.png" 
            alt="Statue with sunglasses in pink and blue lighting" 
            className="w-full max-w-md transition-transform duration-100 ease-out"
            style={{
              transform: calculateImageTransform(),
              transformOrigin: 'center center'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

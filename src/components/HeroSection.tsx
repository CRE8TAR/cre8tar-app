
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link2, Wallet } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection: React.FC = () => {
  const { readingMode } = useTheme();
  
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
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
            className="w-full max-w-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

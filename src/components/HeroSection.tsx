
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link2, Wallet } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#05070F]">
        <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="mb-6">
            <div className="text-white font-bold text-6xl sm:text-7xl tracking-wider mb-2 hover:text-gray-100 transition-colors">
              BLOCKCHAIN
            </div>
            <div className="text-cre8-purple-light font-bold text-6xl sm:text-7xl tracking-wider mb-2 hover:text-cre8-purple transition-colors">
              NFT
            </div>
            <div className="text-cre8-purple-light font-bold text-6xl sm:text-7xl tracking-wider hover:text-cre8-purple transition-colors">
              AVATARS
            </div>
          </h1>
          
          <TypewriterEffect 
            text="Create, evolve, and trade emotional avatars secured on-chain. Digital companions with real ownership."
            delay={30}
            className="font-doto text-gray-300 text-lg mb-8 max-w-lg"
          />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-cre8-purple hover:bg-cre8-purple-dark text-white font-medium px-8 py-6 rounded-md flex items-center gap-2 transition-all duration-300">
              <Wallet size={18} />
              Connect Wallet
            </Button>
            <Button variant="outline" className="border-cre8-purple text-white hover:bg-cre8-purple/20 font-medium px-8 py-6 rounded-md flex items-center gap-2 transition-all duration-300">
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

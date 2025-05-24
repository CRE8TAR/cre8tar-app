
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, Bell } from 'lucide-react';
import ScrollTypingEffect from './ScrollTypingEffect';
import { useTheme } from '@/contexts/ThemeContext';

const TeaserSection: React.FC = () => {
  const { readingMode } = useTheme();
  
  return (
    <section className={`py-20 ${readingMode ? 'bg-white' : 'bg-[#07080F]'} relative`}>
      <div className={`absolute inset-0 ${readingMode ? 'bg-gradient-to-r from-gray-100 to-gray-200 opacity-50' : 'bg-hero-gradient opacity-10'}`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-doto font-bold mb-4 ${
            readingMode ? 'text-gray-800' : 'gradient-text'
          }`}>
            See CRE8TAR in Action
          </h2>
          <ScrollTypingEffect
            text="Watch emotionally intelligent avatars as they evolve, interact, and respond to real users in real-time."
            tag="p"
            className={`font-doto max-w-3xl mx-auto ${
              readingMode ? 'text-gray-700 font-semibold' : 'text-gray-300'
            }`}
            delay={40}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`${
            readingMode 
              ? 'bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 shadow-lg' 
              : 'bg-[#0A0C14] border border-[#1A1D2E]'
          } rounded-xl p-8 flex flex-col items-center hover:shadow-[0_0_30px_rgba(155,135,245,0.25)] transition-all duration-500 hover:scale-[1.02] transform-gpu`}>
            <div className={`${
              readingMode 
                ? 'bg-gradient-to-r from-gray-200/70 to-gray-300/70' 
                : 'bg-gradient-to-r from-cre8-neon-blue/20 to-cre8-neon-pink/20'
            } w-full aspect-video rounded-lg flex items-center justify-center mb-6 hover:from-cre8-neon-blue/30 hover:to-cre8-neon-pink/30 transition-all duration-500`}>
              <PlayCircle className={`h-20 w-20 ${
                readingMode ? 'text-gray-600' : 'text-cre8-purple'
              } opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300`} />
            </div>
            
            <h3 className={`text-4xl md:text-5xl font-doto font-bold mb-6 ${
              readingMode ? 'text-gray-800' : 'gradient-text'
            }`}>
              Video Teaser Coming Soon
            </h3>
            <ScrollTypingEffect
              text="Our team is preparing a cinematic demo that highlights the dynamic emotional depth of CRE8TAR avatars. Stay tuned."
              tag="p"
              className={`text-center mb-8 ${
                readingMode ? 'text-gray-700 font-semibold' : 'text-gray-300'
              }`}
              delay={30}
            />
            
            <Button className="bg-cre8-purple hover:bg-cre8-purple-dark text-white flex items-center gap-2 transform hover:scale-105 transition-all duration-300">
              <Bell size={16} />
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;

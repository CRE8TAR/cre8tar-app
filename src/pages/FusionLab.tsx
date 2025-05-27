
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TypewriterEffect from '@/components/TypewriterEffect';
import { useTheme } from '@/contexts/ThemeContext';

const FusionLab: React.FC = () => {
  const { readingMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${readingMode ? 'bg-white text-gray-800' : 'bg-cre8-bg-dark text-white'}`}>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="text-center">
          <TypewriterEffect 
            text="COMING SOON"
            delay={100}
            className={`text-6xl md:text-8xl font-bold ${readingMode ? 'text-gray-800' : 'text-white'} font-doto`}
          />
          <p className={`mt-8 text-xl md:text-2xl ${readingMode ? 'text-gray-600' : 'text-gray-300'} font-doto`}>
            Fusion Lab
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FusionLab;

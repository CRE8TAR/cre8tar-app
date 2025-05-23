
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your CRE8TAR account to start building your emotional companion.'
  },
  {
    number: '02',
    title: 'Connect Wallet',
    description: 'Secure your identity and assets by linking your crypto wallet.'
  },
  {
    number: '03',
    title: 'Mint Your Avatar',
    description: 'Design and generate your unique emotionally intelligent NFT avatar.'
  },
  {
    number: '04',
    title: 'Add Plugins',
    description: 'Enhance your avatar with emotional capabilities, language modules, or visual features from the Plugin Marketplace.'
  },
  {
    number: '05',
    title: 'Test Your Avatar',
    description: 'Interact with your avatar to experience its emotional responses and adjust settings as needed.'
  },
  {
    number: '06',
    title: 'Deploy & Use',
    description: 'Your avatar is now ready for real-world use—chat, create, or guide. It evolves with every interaction.'
  }
];

const HowItWorksSection: React.FC = () => {
  const { readingMode } = useTheme();
  
  return (
    <section className={`py-20 ${readingMode ? 'bg-slate-50' : 'bg-[#05070F]'}`} id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-doto font-bold ${readingMode ? '' : 'gradient-text'} mb-4`}>
            How It Works
          </h2>
          <p className={`${readingMode ? 'text-gray-600' : 'text-gray-300'} font-doto`}>
            A Complete Workflow of Emotional Connection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`glass-panel p-8 relative hover:shadow-[0_0_25px_rgba(155,135,245,0.2)] transition-all duration-500 hover:scale-105 transform-gpu`}
            >
              <div className={`absolute -top-4 -left-4 ${readingMode ? 'bg-cre8-purple-dark' : 'bg-cre8-purple'} ${readingMode ? 'text-white' : 'text-black'} font-silkscreen font-bold py-1 px-3 rounded-md`}>
                {step.number}
              </div>
              <h3 className={`text-2xl font-bold ${readingMode ? 'text-gray-800' : 'text-white'} mb-3 mt-4`}>{step.title}</h3>
              <p className={`${readingMode ? 'text-gray-600' : 'text-gray-300'}`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

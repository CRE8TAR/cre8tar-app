
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/contexts/ThemeContext';

const EarlyAccessSection: React.FC = () => {
  const { readingMode } = useTheme();
  
  return (
    <section className={`py-20 ${readingMode ? 'bg-slate-50' : 'bg-[#05070F]'}`} id="early-access">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-doto font-bold ${readingMode ? '' : 'gradient-text'} mb-4`}>
            Get Early Access
          </h2>
          <p className={`${readingMode ? 'text-gray-600' : 'text-gray-300'} font-doto`}>
            Join the emotional AI revolution — 1,000 early testers launching Q4 2025
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto glass-panel p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`block ${readingMode ? 'text-gray-700' : 'text-white'} mb-2`}>Name</label>
              <Input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                className={`${readingMode ? 'bg-white border-gray-300 text-gray-800' : 'bg-[#0D0F1A] border-[#1A1D2E] text-white'} focus:border-cre8-purple`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block ${readingMode ? 'text-gray-700' : 'text-white'} mb-2`}>Email</label>
              <Input 
                type="email" 
                id="email" 
                placeholder="your@email.com" 
                className={`${readingMode ? 'bg-white border-gray-300 text-gray-800' : 'bg-[#0D0F1A] border-[#1A1D2E] text-white'} focus:border-cre8-purple`}
              />
            </div>
            
            <div>
              <label htmlFor="interest" className={`block ${readingMode ? 'text-gray-700' : 'text-white'} mb-2`}>Interest Area</label>
              <select 
                id="interest" 
                className={`w-full ${readingMode ? 'bg-white border-gray-300 text-gray-800' : 'bg-[#0D0F1A] border-[#1A1D2E] text-white'} focus:border-cre8-purple rounded-md p-2`}
                defaultValue=""
              >
                <option value="" disabled>Select your interest</option>
                <option value="collector">NFT Collector</option>
                <option value="creator">Web3 Creator</option>
                <option value="metaverse">Metaverse User</option>
                <option value="dao">DAO Community Member</option>
                <option value="developer">Developer</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className={`block ${readingMode ? 'text-gray-700' : 'text-white'} mb-2`}>Message (Optional)</label>
              <Textarea 
                id="message" 
                placeholder="Tell us how you plan to use CRE8TAR..." 
                className={`${readingMode ? 'bg-white border-gray-300 text-gray-800' : 'bg-[#0D0F1A] border-[#1A1D2E] text-white'} focus:border-cre8-purple`}
              />
            </div>
            
            <Button 
              type="submit" 
              className={`w-full ${readingMode ? 'bg-cre8-purple-dark' : 'bg-cre8-purple'} hover:bg-cre8-purple-dark text-white font-medium py-3`}
            >
              Request Early Access
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;

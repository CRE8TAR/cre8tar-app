
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, Bell } from 'lucide-react';

const TeaserSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07080F] relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doto font-bold text-white mb-4">
            See CRE8TAR in Action
          </h2>
          <p className="text-gray-300 font-doto max-w-3xl mx-auto">
            Watch emotionally intelligent avatars as they evolve, interact, and respond to real users in real-time.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C14] border border-[#1A1D2E] rounded-xl p-8 flex flex-col items-center">
            <div className="bg-gradient-to-r from-cre8-neon-blue/20 to-cre8-neon-pink/20 w-full aspect-video rounded-lg flex items-center justify-center mb-6">
              <PlayCircle className="h-20 w-20 text-cre8-purple opacity-80" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Video Teaser Coming Soon</h3>
            <p className="text-gray-300 text-center mb-8">
              Our team is preparing a cinematic demo that highlights the dynamic emotional depth of CRE8TAR avatars. Stay tuned.
            </p>
            
            <Button className="bg-cre8-purple hover:bg-cre8-purple-dark text-white flex items-center gap-2">
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

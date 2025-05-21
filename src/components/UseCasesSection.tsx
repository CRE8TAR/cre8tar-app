
import React from 'react';
import { Award, Palette, Globe, Users } from 'lucide-react';

const useCases = [
  {
    icon: <Award className="h-8 w-8 text-cre8-purple" />,
    title: 'NFT Collectors',
    subtitle: 'Intelligent Digital Ownership',
    description: 'Own unique emotionally intelligent avatars that increase in value over time while serving practical purposes across decentralized platforms.'
  },
  {
    icon: <Palette className="h-8 w-8 text-cre8-purple" />,
    title: 'Web3 Creators',
    subtitle: 'Blockchain-Backed Royalties',
    description: 'Create and monetize emotional avatar assets with built-in royalty systems that automatically pay you for secondary market sales.'
  },
  {
    icon: <Globe className="h-8 w-8 text-cre8-purple" />,
    title: 'Metaverse Users',
    subtitle: 'Cross-Platform Identity',
    description: 'Your emotional avatar becomes your digital identity, usable across multiple metaverse environments with full ownership rights secured on-chain.'
  },
  {
    icon: <Users className="h-8 w-8 text-cre8-purple" />,
    title: 'DAO Communities',
    subtitle: 'Governance & Participation',
    description: "Use avatars as membership tokens with voting rights in the CRE8TAR ecosystem, allowing you to shape the platform's future development."
  }
];

const UseCasesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07080F]" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doto font-bold gradient-text mb-4">
            Web3 Applications
          </h2>
          <p className="text-gray-300 font-doto">
            How CRE8TAR's on-chain avatars are transforming the blockchain ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-[#0D0F1A] rounded-xl p-8 border border-[#1A1D2E] hover:border-cre8-purple/50 transition-all duration-300"
            >
              <div className="mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
              <h4 className="text-lg text-cre8-purple mb-3">{useCase.subtitle}</h4>
              <p className="text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl text-white font-bold mb-6">
            Ready to Own Your Digital Future?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Secure your unique emotional avatar NFT and join the next generation of digital ownership on the blockchain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-cre8-purple hover:bg-cre8-purple-dark text-white px-6 py-3 rounded-md font-medium">
              Mint Your Avatar
            </button>
            <button className="border border-cre8-purple text-white hover:bg-cre8-purple/20 px-6 py-3 rounded-md font-medium">
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;


import { CreditCard, Coins, Wallet, Vote } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: <CreditCard className="h-8 w-8 text-cre8-purple" />,
    title: 'Avatar Minting',
    description: 'Create your unique NFT avatar with emotional intelligence traits. Each mint is one of a kind, generating fully unique emotional NFTs secured on the blockchain.'
  },
  {
    icon: <Coins className="h-8 w-8 text-cre8-purple" />,
    title: 'Avatar Fusion',
    description: 'Combine two avatars to create a hybrid with enhanced emotional depth and rarity. Traits are inherited and evolved through our proprietary on-chain breeding mechanism.'
  },
  {
    icon: <Wallet className="h-8 w-8 text-cre8-purple" />,
    title: 'NFT Marketplace',
    description: 'Trade and monetize your avatars through our cross-chain NFT marketplace with automated royalties. Integrated with L1X for secure ownership verification.'
  },
  {
    icon: <Vote className="h-8 w-8 text-cre8-purple" />,
    title: 'DAO Governance',
    description: 'Participate in platform governance using your avatar NFT. Vote on treasury allocations, feature development, and ecosystem expansion through decentralized voting.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#05070F]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doto font-bold gradient-text mb-4">
            Web3 Features
          </h2>
          <p className="text-gray-300 font-doto">
            Experience next-generation avatars with blockchain technology at their core
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0D0F1A] rounded-xl p-8 border border-[#1A1D2E] hover:border-cre8-purple/50 transition-all duration-300"
            >
              <div className="bg-[#15172A] p-4 inline-block rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

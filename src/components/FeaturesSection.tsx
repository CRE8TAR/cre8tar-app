
import React, { useState } from 'react';
import { CreditCard, Coins, Wallet, Vote } from 'lucide-react';
import Modal from './ui/modal';
import { useTheme } from '@/contexts/ThemeContext';
import TypewriterEffect from './TypewriterEffect';

// Feature data with additional modal content
const features = [
  {
    icon: <CreditCard className="h-8 w-8 text-cre8-purple" />,
    title: 'Avatar Minting',
    description: 'Create your unique NFT avatar with emotional intelligence traits. Each mint is one of a kind, generating fully unique emotional NFTs secured on the blockchain.',
    modalContent: `Avatar Minting is the genesis of your emotional AI identity within the CRE8TAR universe...` // shortened for brevity
  },
  {
    icon: <Coins className="h-8 w-8 text-cre8-purple" />,
    title: 'Avatar Fusion',
    description: 'Combine two avatars to create a hybrid with enhanced emotional depth and rarity. Traits are inherited and evolved through our proprietary on-chain breeding mechanism.',
    modalContent: `Avatar Fusion is an innovative feature that allows users to combine two existing CRE8TAR NFTs...`
  },
  {
    icon: <Wallet className="h-8 w-8 text-cre8-purple" />,
    title: 'NFT Marketplace',
    description: 'Trade and monetize your avatars through our cross-chain NFT marketplace with automated royalties. Integrated with L1X for secure ownership verification.',
    modalContent: `The CRE8TAR NFT Marketplace is a cross-chain trading platform...`
  },
  {
    icon: <Vote className="h-8 w-8 text-cre8-purple" />,
    title: 'DAO Governance',
    description: 'Participate in platform governance using your avatar NFT. Vote on treasury allocations, feature development, and ecosystem expansion through decentralized voting.',
    modalContent: `CRE8TAR goes beyond user interaction—it invites users into decision-making and ecosystem evolution...`
  }
];

const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const { readingMode } = useTheme();

  const openModal = (index: number) => setSelectedFeature(index);
  const closeModal = () => setSelectedFeature(null);

  return (
    <section className={`py-20 ${readingMode ? 'bg-gradient-to-b from-gray-200 to-gray-300' : 'bg-[#05070F]'}`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-doto font-bold ${readingMode ? 'text-black font-black' : 'gradient-text'} mb-4`}>
            Web3 Features
          </h2>
         <TypewriterEffect 
            text="Experience next-generation avatars with blockchain technology at their core."
            delay={10}
            className={`font-doto ${readingMode ? 'text-gray-800' : 'text-white'} font-bold text-[20px] hover:text-cre8-purple transition-colors text-base py-1`}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${readingMode 
                ? 'bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 border-gray-500 shadow-lg' 
                : 'bg-[#0D0F1A] border-[#1A1D2E]'} 
                rounded-xl p-8 border hover:border-cre8-purple/50 hover:scale-105 
                ${readingMode 
                  ? 'hover:shadow-xl hover:shadow-gray-500/80' 
                  : 'hover:shadow-[0_0_30px_rgba(155,135,245,0.3)]'} 
                transition-all duration-500 cursor-pointer transform-gpu hover:translate-y-[-5px]`}
              onClick={() => openModal(index)}
            >
              <div className={`${readingMode ? 'bg-gray-400' : 'bg-[#15172A]'} p-4 inline-block rounded-lg mb-5`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-extrabold ${readingMode ? 'text-black font-black' : 'text-[#e0e0e0]'} mb-3`}>{feature.title}</h3>
              <p className={`${readingMode ? 'text-black font-black' : 'text-white-300'}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        {selectedFeature !== null && (
          <Modal 
            isOpen={selectedFeature !== null}
            onClose={closeModal}
            title={features[selectedFeature].title}
          >
            <div className="whitespace-pre-wrap">
              {features[selectedFeature].modalContent}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;

import React, { useState } from 'react';
import { Award, Palette, Globe, Users } from 'lucide-react';
import Modal from './ui/modal';
import ScrollTypingEffect from './ScrollTypingEffect';
import { useTheme } from '@/contexts/ThemeContext';

const useCases = [
  {
    icon: <Award className="h-8 w-8 text-cre8-purple" />,
    title: 'NFT Collectors',
    subtitle: 'Intelligent Digital Ownership',
    description: 'Own unique emotionally intelligent avatars that increase in value over time while serving practical purposes across decentralized platforms.',
    modalContent: `Own unique emotionally intelligent avatars that increase in value over time while serving practical purposes across decentralized platforms.

Each avatar in the CRE8TAR ecosystem is designed with emotional intelligence traits and a digital soul that makes it more than just a collectible. These avatars can function as emotional companions, productivity enhancers, or metaverse personalities.

With blockchain-backed verification and trait rarity encoded on-chain, your digital ownership is secured, immutable, and transparent. Over time, as your avatar interacts across platforms, it builds emotional metadata—enhancing both emotional richness and market value.

NFT collectors now become emotional curators, choosing avatars that not only look rare, but feel unique. These assets evolve, gain lineage, and become part of your personal AI identity portfolio.`
  },
  {
    icon: <Palette className="h-8 w-8 text-cre8-purple" />,
    title: 'Web3 Creators',
    subtitle: 'Blockchain-Backed Royalties',
    description: 'Create and monetize emotional avatar assets with built-in royalty systems that automatically pay you for secondary market sales.',
    modalContent: `As a Web3 Creator, you can build and monetize custom emotional avatar assets—expressive traits, digital personalities, or entire avatars.

Through CRE8TAR's built-in royalty system, you earn passive income every time your creation is sold or resold. These royalties are automated and trustless, deployed through smart contracts with transparent tracking.

Whether you're a visual artist, AI behavior designer, or sound engineer crafting avatar voices, your contributions become composable NFT assets.

Your emotional creativity gains utility, and your digital work becomes a revenue stream within an expanding emotional AI economy.`
  },
  {
    icon: <Globe className="h-8 w-8 text-cre8-purple" />,
    title: 'Metaverse Users',
    subtitle: 'Cross-Platform Identity',
    description: 'Your emotional avatar becomes your digital identity, usable across multiple metaverse environments with full ownership rights secured on-chain.',
    modalContent: `Your CRE8TAR avatar is your emotional identity across the metaverse.

These emotionally intelligent avatars are designed to integrate with multiple Web3 environments—games, VR spaces, productivity hubs, and more.

Instead of fragmented profiles, you maintain a persistent emotional persona that expresses real-time moods, reactions, and preferences.

On-chain ownership ensures no one else can replicate or misuse your avatar, and emotional traits persist as you transition between apps.

Welcome to the future of identity—where you don't just log in… you emotionally arrive.`
  },
  {
    icon: <Users className="h-8 w-8 text-cre8-purple" />,
    title: 'DAO Communities',
    subtitle: 'Governance & Participation',
    description: "Use avatars as membership tokens with voting rights in the CRE8TAR ecosystem, allowing you to shape the platform's future development.",
    modalContent: `Avatars in CRE8TAR double as governance tokens, giving you rights to propose, vote, and shape the direction of the platform.

Each holder has a voice. Through weighted voting mechanisms, users with rare or high-engagement avatars can influence critical decisions like:

• Feature prioritization
• Treasury spending
• New trait rollouts
• Platform rules

This transforms avatar ownership into a democratic tool an emotionally aware form of civic engagement for decentralized platforms.

Join a community that not only feels but decides together.`
  }
];

const UseCasesSection: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<number | null>(null);
  const { readingMode } = useTheme();

  const openModal = (index: number) => {
    setSelectedUseCase(index);
  };

  const closeModal = () => {
    setSelectedUseCase(null);
  };

  return (
    <section className={`py-20 ${readingMode ? 'bg-gradient-to-b from-gray-200 to-gray-300' : 'bg-[#07080F]'}`} id="use-cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-doto font-bold ${readingMode ? 'text-black font-black' : 'gradient-text'} mb-4`}>
            Web3 Applications
          </h2>
          <ScrollTypingEffect
            text="How CRE8TAR's on-chain avatars are transforming the blockchain ecosystem"
            tag="p"
            className={`${readingMode ? 'text-black font-black' : 'text-gray-100'} font-doto text-[20px]`}
            delay={40}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
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
              <div className={`mb-6 ${readingMode ? 'bg-black p-3 rounded-full inline-block' : ''}`}>
                {useCase.icon}
              </div>
              <h3 className={`text-2xl font-bold ${readingMode ? 'text-black font-black' : 'text-white'} mb-2`}>{useCase.title}</h3>
              <h4 className="text-lg text-cre8-purple mb-3">{useCase.subtitle}</h4>
              <p className={`${readingMode ? 'text-black font-black' : 'text-gray-100'}`}>{useCase.description}</p>
            </div>
          ))}
        </div>

        {selectedUseCase !== null && (
          <Modal 
            isOpen={selectedUseCase !== null}
            onClose={closeModal}
            title={useCases[selectedUseCase].title}
          >
            <div className="whitespace-pre-wrap">
              {useCases[selectedUseCase].modalContent}
            </div>
          </Modal>
        )}

        <div className="mt-16 text-center">
          <h3 className={`text-2xl md:text-3xl ${readingMode ? 'text-black font-black' : 'text-white'} font-bold mb-6`}>
            Ready to Own Your Digital Future?
          </h3>
          <ScrollTypingEffect
            text="Secure your unique emotional avatar NFT and join the next generation of digital ownership on the blockchain."
            tag="p"
            className={`${readingMode ? 'text-black font-black' : 'text-gray-300'} mb-8 max-w-2xl mx-auto`}
            delay={30}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-cre8-purple hover:bg-cre8-purple-dark text-white px-6 py-3 rounded-md font-medium transform hover:scale-105 transition-all duration-300">
              Mint Your Avatar
            </button>
            <button className="border border-cre8-purple text-white hover:bg-cre8-purple/20 px-6 py-3 rounded-md font-medium transform hover:scale-105 transition-all duration-300">
              Explore Marketplace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

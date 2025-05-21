
import React, { useState } from 'react';
import { CreditCard, Coins, Wallet, Vote } from 'lucide-react';
import Modal from './ui/modal';
import ScrollTypingEffect from './ScrollTypingEffect';

// Feature data with additional modal content
const features = [
  {
    icon: <CreditCard className="h-8 w-8 text-cre8-purple" />,
    title: 'Avatar Minting',
    description: 'Create your unique NFT avatar with emotional intelligence traits. Each mint is one of a kind, generating fully unique emotional NFTs secured on the blockchain.',
    modalContent: `Avatar Minting is the genesis of your emotional AI identity within the CRE8TAR universe. Each avatar is a one-of-a-kind digital being, uniquely crafted with emotional intelligence traits embedded through AI-driven generative algorithms. Unlike traditional NFTs that focus solely on visual uniqueness, CRE8TAR avatars are infused with emotional profiles—moods, empathy levels, communication styles, and adaptive responses—making each mint not only visually distinct but also behaviorally unique.

During the minting process, emotional traits such as resilience, curiosity, compassion, and humor are randomized and encoded on-chain. These traits influence how your avatar interacts in AI-driven environments, making them suitable for roles like companion bots, creative collaborators, or wellness coaches.

Each minted avatar is securely recorded on the blockchain, ensuring permanent ownership, traceability, and resistance to tampering. This creates a transparent and trustless system for proving uniqueness and authenticity.

By integrating with secure smart contracts and leveraging emotional AI modeling, CRE8TAR brings the soul into the NFT space. Your minted avatar is not just art or code—it's a digital persona that evolves with you, carries sentimental value, and becomes your voice in the metaverse.

This marks the start of emotionally intelligent identity creation in Web3—mint yours, and make it truly feel.`
  },
  {
    icon: <Coins className="h-8 w-8 text-cre8-purple" />,
    title: 'Avatar Fusion',
    description: 'Combine two avatars to create a hybrid with enhanced emotional depth and rarity. Traits are inherited and evolved through our proprietary on-chain breeding mechanism.',
    modalContent: `Avatar Fusion is an innovative feature that allows users to combine two existing CRE8TAR NFTs to forge a new hybrid avatar with enhanced emotional traits, deeper intelligence, and greater rarity. Inspired by natural evolution and powered by on-chain breeding algorithms, this feature introduces emotional inheritance to the NFT landscape.

When you fuse avatars, their dominant and recessive traits are analyzed and passed on to the offspring through a proprietary fusion engine. Traits such as emotional empathy, adaptability, patience, and creative thinking are calculated based on rarity, strength, and interaction history. Each fusion results in an emotionally richer avatar with the potential for new behaviors and a more refined aesthetic.

In addition to visual upgrades and personality enhancements, fused avatars gain higher rarity tiers and are tagged with a fusion lineage that adds prestige and value in the secondary marketplace. This lineage is traceable and permanently stored on the blockchain, giving collectors and users insight into the avatar's ancestry and trait evolution.

The fusion mechanism promotes not just collection but emotional curation—where users select traits that align with their values, goals, or even their own moods. It gamifies emotional development in a digital format and offers a dynamic way to evolve your identity in the metaverse.

With Avatar Fusion, your digital persona doesn't remain static—it grows, evolves, and deepens, just like human emotion.`
  },
  {
    icon: <Wallet className="h-8 w-8 text-cre8-purple" />,
    title: 'NFT Marketplace',
    description: 'Trade and monetize your avatars through our cross-chain NFT marketplace with automated royalties. Integrated with L1X for secure ownership verification.',
    modalContent: `The CRE8TAR NFT Marketplace is a cross-chain trading platform designed to help users buy, sell, and monetize their emotionally intelligent avatars with security, transparency, and speed. Unlike generic NFT marketplaces, CRE8TAR's ecosystem is designed specifically for emotion-based NFTs, adding a new layer of depth to digital identity and value.

Built with L1X blockchain integration, the marketplace guarantees secure ownership verification, fast transactions, and automated royalty distribution to original creators upon each resale. This ensures artists, collectors, and avatar breeders are fairly compensated throughout the life of the NFT, fostering a sustainable creator economy.

Each avatar listed on the marketplace showcases not just visuals but emotional traits and interaction histories, helping buyers assess compatibility, personality depth, and uniqueness. Filters allow sorting by mood types, rarity levels, fusion generation, or use-case (e.g., wellness, education, entertainment).

The interface is sleek, user-friendly, and optimized for both web and mobile devices. Wallet integration supports major chains and bridges, allowing seamless cross-chain functionality. Users can favorite, watchlist, or initiate trades through bids or instant purchases.

Beyond commerce, the marketplace also hosts community drops, rare emotional trait auctions, and breeding event releases. It's more than a marketplace—it's an emotional economy, where empathy, identity, and AI meet blockchain to redefine digital ownership.`
  },
  {
    icon: <Vote className="h-8 w-8 text-cre8-purple" />,
    title: 'DAO Governance',
    description: 'Participate in platform governance using your avatar NFT. Vote on treasury allocations, feature development, and ecosystem expansion through decentralized voting.',
    modalContent: `CRE8TAR goes beyond user interaction—it invites users into decision-making and ecosystem evolution through a powerful DAO Governance model. By owning an avatar NFT, you automatically become a CRE8TAR citizen, eligible to vote, propose changes, and shape the emotional AI universe collaboratively.

Each avatar acts as a voting credential in the decentralized governance system. Voting power may be weighted by emotional rarity, fusion generation, or experience level, creating a dynamic ecosystem where both quantity and quality of ownership matter.

DAO participants can:

• Vote on product roadmap features like avatar trait expansions or marketplace enhancements

• Decide on treasury allocations for ecosystem growth, grants, and partnerships

• Participate in emotional AI experiments, helping the platform decide which traits evolve or retire

• Launch proposals to shape avatar culture, design trends, or ethical AI policies

Governance voting is transparent and powered by on-chain smart contracts, ensuring that all changes reflect the will of the avatar-holding community. Through periodic town halls and proposals, the community becomes the heartbeat of CRE8TAR's direction.

DAO Governance transforms avatar ownership from passive collecting into active co-creation. With every vote, users participate in writing the next chapter of emotionally intelligent AI in Web3. CRE8TAR isn't just built for the people—it's built by the people who feel.`
  }
];

const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedFeature(index);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <section className="py-20 bg-[#05070F]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollTypingEffect
            text="Web3 Features"
            tag="h2"
            className="text-4xl md:text-5xl font-doto font-extrabold gradient-text mb-4 text-[#f1f1f1]"
            delay={80}
          />
          <ScrollTypingEffect
            text="Experience next-generation avatars with blockchain technology at their core"
            tag="p"
            className="text-gray-300 font-doto"
            delay={40}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0D0F1A] rounded-xl p-8 border border-[#1A1D2E] hover:border-cre8-purple/50 hover:scale-105 hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] transition-all duration-500 cursor-pointer transform-gpu hover:translate-y-[-5px]"
              onClick={() => openModal(index)}
            >
              <div className="bg-[#15172A] p-4 inline-block rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-[#e0e0e0] mb-3">{feature.title}</h3>
              <p className="text-white-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Modal for detailed feature content */}
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

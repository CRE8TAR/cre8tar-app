
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTheme } from '@/contexts/ThemeContext';

const faqData = [
  {
    question: "What is CRE8TAR?",
    answer: "CRE8TAR is an emotionally intelligent avatar platform powered by blockchain. Each avatar is a unique NFT that evolves with your emotions and interactions, combining the power of AI, emotional intelligence, and decentralized ownership."
  },
  {
    question: "How do I get started with CRE8TAR?",
    answer: "Sign up for an account.\n\nConnect your crypto wallet.\n\nMint your avatar with personalized traits.\n\nAdd emotional or functional plugins from the marketplace.\n\nStart interacting—your avatar learns and grows over time."
  },
  {
    question: "What makes CRE8TAR avatars different from other NFTs?",
    answer: "Unlike static profile pictures or collectibles, CRE8TAR avatars are interactive, evolving companions. They respond to emotional cues, grow with your interactions, and can be customized and upgraded with new traits and capabilities."
  },
  {
    question: "What blockchain does CRE8TAR use?",
    answer: "CRE8TAR is built with multi-chain support, with core functionality secured via L1X integration for fast, scalable, and secure NFT ownership, trading, and governance."
  },
  {
    question: "Can I trade or sell my avatar?",
    answer: "Yes! Each avatar is a tradable NFT. You can buy, sell, or auction avatars on our cross-chain marketplace, with built-in royalty systems ensuring creators earn from secondary sales."
  },
  {
    question: "How does avatar evolution work?",
    answer: "Your avatar evolves based on:\n\nEmotional interactions and feedback\n\nPlugin upgrades (language packs, personality modules, etc.)\n\nFusion with other avatars to create hybrid traits\n\nThis creates a living digital identity that reflects your personality and journey."
  },
  {
    question: "What is Avatar Fusion?",
    answer: "Avatar Fusion lets you merge two avatars to create a hybrid companion with enhanced emotional depth, rarity, and unique trait combinations—secured on-chain via our proprietary smart contracts."
  },
  {
    question: "What are plugins?",
    answer: "Plugins are optional enhancements for your avatar, including:\n\nEmotion detection modules\n\nMultilingual capabilities\n\nVisual upgrades\n\nBehavioral traits and voices\n\nYou can browse, buy, or build plugins in the Plugin Marketplace."
  },
  {
    question: "How does DAO governance work?",
    answer: "Each avatar NFT grants voting rights within the CRE8TAR DAO. Holders can propose and vote on:\n\nPlatform upgrades\n\nFeature development\n\nTreasury allocation\n\nEcosystem partnerships\n\nThis ensures the future of CRE8TAR is shaped by its community."
  },
  {
    question: "Is there a mobile or desktop app?",
    answer: "We're currently developing cross-platform support. While the core platform runs in-browser, native apps for mobile and desktop are planned for future releases."
  },
  {
    question: "How can I get early access?",
    answer: "Apply for our Q4 2025 early access program by filling out the form above. Only 1,000 testers will be selected to help shape the future of emotionally intelligent avatars."
  }
];

const FAQSection: React.FC = () => {
  const { readingMode } = useTheme();

  return (
    <section className={`py-20 ${readingMode ? 'bg-gradient-to-b from-gray-200 to-gray-300' : 'bg-[#07080F]'}`} id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-doto font-bold ${readingMode ? 'text-black font-black' : 'gradient-text'} mb-4`}>
            Frequently Asked Questions
          </h2>
          <p className={`${readingMode ? 'text-black font-black' : 'text-gray-100'} font-doto text-[20px]`}>
            Everything you need to know about CRE8TAR
          </p>
        </div>

        <div className={`${readingMode 
          ? 'bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 border-gray-500' 
          : 'bg-[#0D0F1A] border-[#1A1D2E]'} 
          rounded-xl p-8 border`}>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={`border-b ${readingMode ? 'border-gray-400' : 'border-[#1A1D2E]'}`}>
                <AccordionTrigger className={`text-left ${readingMode ? 'text-black font-black' : 'text-white'} text-lg font-bold hover:no-underline`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`${readingMode ? 'text-black font-black' : 'text-gray-300'} text-base leading-relaxed whitespace-pre-line`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

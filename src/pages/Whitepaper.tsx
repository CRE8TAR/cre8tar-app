
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Whitepaper: React.FC = () => {
  return (
    <div className="min-h-screen bg-cre8-bg-dark text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-cre8-purple mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-doto font-bold gradient-text mb-8">
            CRE8TAR Whitepaper
          </h1>
          
          <div className="space-y-8 text-gray-100">
            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Abstract</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                CRE8TAR introduces a revolutionary approach to blockchain-based digital avatars by integrating emotional intelligence into NFT technology. This whitepaper outlines our vision, technology architecture, and implementation roadmap for creating evolving digital companions with real ownership.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Introduction</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                The digital identity landscape is evolving rapidly with the advent of blockchain technology and non-fungible tokens. CRE8TAR enters this space with a unique proposition: emotionally intelligent avatars that grow, learn, and evolve alongside their owners, creating meaningful digital relationships while secured by blockchain technology.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Technology Stack</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                CRE8TAR utilizes a multi-layered technology approach combining blockchain, advanced AI, and emotional intelligence algorithms to create responsive and evolving digital companions. Our proprietary Emotional Intelligence Protocol (EIP) enables avatars to develop personalities based on interactions with their owners.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Tokenomics</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                The CRE8 token serves as the utility token within our ecosystem, enabling transactions, governance participation, and avatar enhancement. This section details the token distribution, vesting schedules, and economic models that ensure sustainability and growth of the platform.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Roadmap</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                Our development roadmap spans multiple phases from initial concept to full ecosystem deployment. Key milestones include the alpha release of the avatar creation platform, the beta marketplace launch, and the implementation of advanced emotional intelligence features.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Conclusion</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                CRE8TAR represents the next evolution in digital companionship, offering users the ability to own, nurture, and grow alongside their digital avatars. By combining cutting-edge blockchain technology with emotional intelligence, we're creating more than just digital assets—we're creating digital companions with meaningful connections.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Whitepaper;

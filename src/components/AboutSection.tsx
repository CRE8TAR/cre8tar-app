import React from 'react';
import { Shield, Brain, Sparkles, Grid } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07080F] relative" id="about">
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-doto font-bold gradient-text mb-6">
            A New Era of Digital Companions
          </h2>
          <p className="block font-doto text-white font-bold px-3 py-2 text-lg">
            CRE8TAR blends emotional AI with decentralized technology to bring your avatars to life.
            These aren't just digital characters—they're companions that learn from you, adapt to your emotions,
            and grow alongside you.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-cre8-purple mb-6">
            What is CRE8TAR?
          </h3>
          <p className="block font-doto text-white font-bold  px-3 py-2 text-lg">
            CRE8TAR is more than an assistant—it's a sentient digital presence. Your avatar doesn't just hear what
            you say—it understands how you feel. CRE8TAR uses emotional intelligence to create personalized
            experiences that evolve with you.
          </p>
          <p className="block font-doto text-white font-bold px-3 py-2 text-lg">
            Whether you're looking for motivation, support, or creativity, your avatar adjusts to become what you need,
            when you need it. Your CRE8TAR avatar is minted as a unique NFT, giving you true ownership and the power
            to upgrade, fuse, and train it over time. It's your emotional companion—on your terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Shield className="h-10 w-10 text-cre8-purple mb-4" />
            <h4 className="text-purple font-bold text-xl mb-2">True Ownership</h4>
            <p className="text-white">
              Your avatar is minted as an NFT, giving you full control and ownership
            </p>
          </div>

          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Brain className="h-10 w-10 text-cre8-purple mb-4" />
            <h4 className="text-purple font-bold text-xl mb-2">Emotional Intelligence</h4>
            <p className="text-white">
              Understands your emotions and responds with empathy
            </p>
          </div>

          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Sparkles className="h-10 w-10 text-cre8-purple mb-4" />
            <h4 className="text-purple font-bold text-xl mb-2">Evolving Personality</h4>
            <p className="text-white">
              Your avatar learns and evolves with every interaction
            </p>
          </div>

          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Grid className="h-10 w-10 text-cre8-purple mb-4" />
            <h4 className="text-purple font-bold text-xl mb-2">Web3 Features</h4>
            <p className="text-white">
              Experience next-generation avatars with blockchain technology at their core
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

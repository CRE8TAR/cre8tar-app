import React from 'react';
import { Shield, Brain, Sparkles, Grid } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import TypewriterEffect from './TypewriterEffect';

const AboutSection: React.FC = () => {
  const { readingMode } = useTheme();

  return (
    <section
      className={`py-20 relative ${readingMode ? 'bg-slate-50' : 'bg-[#07080F]'}`}
      id="about"
    >
      <div
        className={`absolute inset-0 ${
          readingMode
            ? 'bg-gradient-to-r from-slate-100 to-slate-200 opacity-50'
            : 'bg-hero-gradient opacity-10'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-doto font-bold mb-6 ${
              readingMode ? 'text-gray-999' : 'gradient-text'
            }`}
          >
            A New Era of Digital Companions
          </h2>

          <TypewriterEffect
            text="CRE8TAR blends emotional AI with decentralized technology to bring your avatars to life. These aren't just digital characters—they're companions that learn from you, adapt to your emotions, and grow alongside you."
            delay={10}
            className={`font-doto font-bold text-[20px] py-1 hover:text-cre8-purple transition-colors ${
              readingMode ? 'text-gray-800' : 'text-white'
            }`}
          />
        </div>

        {/* About Content */}
        <div className="mb-20">
          <h3
            className={`text-3xl font-bold mb-2 ${
              readingMode ? 'text-cre8-purple-dark' : 'text-cre8-purple-dark'
            }`}
          >
            What is CRE8TAR?
          </h3>
          <p
            className={`font-bold text-[20px] py-2 mb-1 ${
              readingMode ? 'text-gray-900' : 'text-white'
            }`}
          >
            CRE8TAR is more than an assistant—it's a sentient digital presence.
            Your avatar doesn't just hear what you say—it understands how you
            feel. CRE8TAR uses emotional intelligence to create personalized
            experiences that evolve with you.
          </p>
          <p
            className={`font-bold text-[20px] ${
              readingMode ? 'text-gray-900' : 'text-white'
            }`}
          >
            Whether you're looking for motivation, support, or creativity, your
            avatar adjusts to become what you need, when you need it. Your
            CRE8TAR avatar is minted as a unique NFT, giving you true ownership
            and the power to upgrade, fuse, and train it over time. It's your
            emotional companion—on your terms.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Shield
              className={`h-10 w-10 mb-4 ${
                readingMode ? 'text-cre8-purple-dark' : 'text-cre8-purple-dark'
              }`}
            />
            <h4
              className={`font-bold text-xl mb-2 ${
                readingMode
                  ? 'text-cre8-purple-dark'
                  : 'bg-gradient-to-r from-cre8-purple to-purple-500 bg-clip-text text-transparent'
              }`}
            >
              True Ownership
            </h4>
            <p
              className={`font-bold text-[17px] ${
                readingMode ? 'text-gray-900' : 'text-white'
              }`}
            >
              Your avatar is minted as an NFT, giving you full control and
              ownership.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Brain
              className={`h-10 w-10 mb-4 ${
                readingMode ? 'text-cre8-purple-dark' : 'text-cre8-purple'
              }`}
            />
            <h4
              className={`font-bold text-xl mb-2 ${
                readingMode
                  ? 'text-cre8-purple-dark'
                  : 'bg-gradient-to-r from-cre8-purple to-purple-500 bg-clip-text text-transparent'
              }`}
            >
              Emotional Intelligence
            </h4>
            <p
              className={`font-bold text-[17px] ${
                readingMode ? 'text-gray-900' : 'text-white'
              }`}
            >
              Understands your emotions and responds with empathy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Sparkles
              className={`h-10 w-10 mb-4 ${
                readingMode ? 'text-cre8-purple-dark' : 'text-cre8-purple'
              }`}
            />
            <h4
              className={`font-bold text-xl mb-2 ${
                readingMode
                  ? 'text-cre8-purple-dark'
                  : 'bg-gradient-to-r from-cre8-purple to-purple-500 bg-clip-text text-transparent'
              }`}
            >
              Evolving Personality
            </h4>
            <p
              className={`font-bold text-[17px] ${
                readingMode ? 'text-gray-900' : 'text-white'
              }`}
            >
              Your avatar learns and evolves with every interaction.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(155,135,245,0.3)] transition-all duration-300 transform-gpu">
            <Grid
              className={`h-10 w-10 mb-4 ${
                readingMode ? 'text-cre8-purple-dark' : 'text-cre8-purple-dark'
              }`}
            />
            <h4
              className={`font-bold text-xl mb-2 ${
                readingMode
                  ? 'text-cre8-purple-dark'
                  : 'bg-gradient-to-r from-cre8-purple to-purple-500 bg-clip-text text-transparent'
              }`}
            >
              Web3 Features
            </h4>
            <p
              className={`font-bold text-[17px] ${
                readingMode ? 'text-black' : 'text-white'
              }`}
            >
              Experience next-generation avatars with blockchain technology at
              their core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

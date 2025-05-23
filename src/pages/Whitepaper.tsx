
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
              <h2 className="text-2xl font-bold mb-4 gradient-text">CRE8TAR White Paper Version 1.0</h2>
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                Date: May 2025
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">1. Executive Summary</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                CRE8TAR is a next-generation AI and Web3-powered platform designed to humanize digital interaction through emotionally intelligent avatars. Our mission is to build a transformative ecosystem that blends creativity, AI, Web3, and blockchain ownership to create immersive, decentralized experiences across education, entertainment, healthcare, and urban infrastructure.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">2. Vision & Mission</h2>
              <p className="text-gray-100 font-bold text-[17px] mb-4">
                <span className="font-extrabold underline">Vision:</span><br />
                To build a future where emotionally intelligent avatars enhance every aspect of human life making digital interaction more natural, immersive, and emotionally engaging.
              </p>
              
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold underline">Mission:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">To empower creators and users with ownership through NFTs.</li>
                <li className="text-gray-100 font-bold text-[17px]">To decentralize digital identity using blockchain.</li>
                <li className="text-gray-100 font-bold text-[17px]">To provide AI-powered avatars that foster real, emotional connections.</li>
                <li className="text-gray-100 font-bold text-[17px]">To drive cultural restoration, education, and innovation via immersive tech.</li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">3. Platform Overview</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                CRE8TAR is a hybrid platform combining AI avatars, NFT ownership, and decentralized digital experiences. Users can create, own, and interact with human-like avatars powered by advanced emotional AI and supported by a robust Web3 infrastructure.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">4. Core Features (MVP)</h2>
              <ul className="space-y-3">
                <li>
                  <p className="text-gray-100 font-bold text-[17px]">
                    <span className="font-extrabold">AI Avatar Anchors:</span> Real-time news delivery via emotional, AI-powered avatars.
                  </p>
                </li>
                <li>
                  <p className="text-gray-100 font-bold text-[17px]">
                    <span className="font-extrabold">Emotion-Driven Ad Avatars:</span> Interactive ad experiences using expressive AI avatars.
                  </p>
                </li>
                <li>
                  <p className="text-gray-100 font-bold text-[17px]">
                    <span className="font-extrabold">AI Blogger:</span> A digital influencer that generates content with creativity and emotional nuance.
                  </p>
                </li>
                <li>
                  <p className="text-gray-100 font-bold text-[17px]">
                    <span className="font-extrabold">NFT Marketplace (Powered by L1X):</span> Enables trading and ownership of AI avatars and digital assets.
                  </p>
                </li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">5. Technology Stack</h2>
              <ul className="space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Frontend:</span> React, Vite
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Backend:</span> Node.js, MongoDB
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">AI Models:</span> Emotion recognition, NLP, Text-to-Speech
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Blockchain:</span> L1X (for NFTs, digital identity, and decentralized storage)
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Token Standard:</span> ERC-721 (NFTs), ERC-20 (C8T Utility Token)
                </li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">6. Tokenomics</h2>
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold">Token Name:</span> CRE8TAR Token (C8T)
              </p>
              <p className="text-gray-100 font-bold text-[17px] mb-3">
                <span className="font-extrabold">Total Supply:</span> 1,000,000,000 C8T
              </p>
              
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold underline">Utility:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-gray-100 font-bold text-[17px]">Purchase of avatars and digital assets</li>
                <li className="text-gray-100 font-bold text-[17px]">Governance and voting on platform decisions</li>
                <li className="text-gray-100 font-bold text-[17px]">Creator rewards and staking incentives</li>
              </ul>
              
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold underline">Distribution:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">30% Ecosystem & Community</li>
                <li className="text-gray-100 font-bold text-[17px]">25% Team & Founders (4-year vesting)</li>
                <li className="text-gray-100 font-bold text-[17px]">20% Partnerships & Development</li>
                <li className="text-gray-100 font-bold text-[17px]">15% Public Sale</li>
                <li className="text-gray-100 font-bold text-[17px]">10% Reserve & Treasury</li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">7. NFT Utility & Ownership</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Unique Avatars:</span> Creators can mint and customize avatars.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Digital Identity:</span> Own and manage your digital presence on-chain.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Interoperability:</span> Avatars usable across CRE8TAR ecosystem and partner metaverses.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Royalties:</span> Secondary sales automatically reward creators.
                </li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">8. CRE8TAR Ecosystem Goals (2025–2035)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">
                  Deploy AI avatars in education, healthcare, research, smart cities, and cultural preservation.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  Enable virtual time travel via immersive history-driven avatar simulations.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  Create physical AI-powered avatars for public interaction and assistance.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  Reduce loneliness and stress via AI companions in urban and remote areas.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  Develop a decentralized network of emotionally aware information and interaction hubs.
                </li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">9. Strategic Partnerships</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">
                  L1X – Blockchain infrastructure and NFT support.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  Industry Partners – Collaborations across education, healthcare, and Web3.
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  Universities & Labs – Co-develop AI models and avatar cognition.
                </li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">10. Roadmap</h2>
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold">Q1 2025:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-gray-100 font-bold text-[17px]">MVP launch (AI Anchors, NFT marketplace, Ad avatars)</li>
                <li className="text-gray-100 font-bold text-[17px]">Begin AI Blogger integration</li>
              </ul>
              
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold">Q2 2025:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-gray-100 font-bold text-[17px]">Complete AI Blogger</li>
                <li className="text-gray-100 font-bold text-[17px]">NFT Avatar Minting & Marketplace expansion</li>
              </ul>
              
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold">Q3 2025 – Q1 2026:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="text-gray-100 font-bold text-[17px]">Launch AI identity wallet & DAO governance</li>
                <li className="text-gray-100 font-bold text-[17px]">Start physical avatar research & prototyping</li>
              </ul>
              
              <p className="text-gray-100 font-bold text-[17px] mb-2">
                <span className="font-extrabold">2026–2030:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">Global scale-up across cities</li>
                <li className="text-gray-100 font-bold text-[17px]">Partnerships with governments, research labs, and educational institutions</li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">11. Legal & Compliance</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                CRE8TAR adheres to GDPR, MiCA, and other European crypto regulations. We commit to ethical AI development and full transparency in token use and asset ownership.
              </p>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">12. Contact & Communication</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Website:</span> <a href="https://cre8tar.vercel.app" className="text-cre8-purple hover:underline" target="_blank" rel="noopener noreferrer">https://cre8tar.vercel.app</a>
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">WhatsApp:</span> Available upon request
                </li>
                <li className="text-gray-100 font-bold text-[17px]">
                  <span className="font-extrabold">Email:</span> <a href="mailto:team@cre8tar.ai" className="text-cre8-purple hover:underline">team@cre8tar.ai</a>
                </li>
              </ul>
              
              <p className="text-gray-100 font-bold text-[17px] mt-4">
                CRE8TAR is not just a project, it is a movement towards emotionally intelligent, decentralized, and creator-owned digital futures.
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


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TokenInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-cre8-bg-dark text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-cre8-purple mb-8">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-doto font-bold gradient-text mb-8">
            CRE8 Token Information
          </h1>
          
          <div className="glass-panel p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">Token Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  The CRE8 token is the native utility token that powers the CRE8TAR ecosystem, providing governance rights, creator rewards, and in-platform transactions.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Token Name</span>
                    <span className="font-bold">CRE8</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Token Standard</span>
                    <span className="font-bold">ERC-20</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Total Supply</span>
                    <span className="font-bold">1,000,000,000 CRE8</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Initial Circulating Supply</span>
                    <span className="font-bold">150,000,000 CRE8 (15%)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <PieChart size={200} className="text-cre8-purple" />
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">Token Utility</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-cre8-purple h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Governance</h3>
                  <p className="text-gray-300">CRE8 holders can participate in platform governance by voting on proposals related to feature development, economic models, and protocol upgrades.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-cre8-neon-blue h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Avatar Enhancement</h3>
                  <p className="text-gray-300">Spend CRE8 to purchase emotional plugins, visual upgrades, and specialized features for your avatars.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-cre8-neon-pink h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Creator Rewards</h3>
                  <p className="text-gray-300">Creators earn CRE8 when their avatar plugins or templates are used by other community members.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-green-500 h-6 w-6 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Transaction Fees</h3>
                  <p className="text-gray-300">CRE8 is used to pay transaction fees when avatars are minted, traded, or evolved on the platform.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-6">Token Distribution</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Community Ecosystem (40%)</span>
                  <span>400,000,000 CRE8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-cre8-purple h-4 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Team & Advisors (20%)</span>
                  <span>200,000,000 CRE8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-cre8-neon-blue h-4 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Private Sale (15%)</span>
                  <span>150,000,000 CRE8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-cre8-neon-pink h-4 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Public Sale (10%)</span>
                  <span>100,000,000 CRE8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Treasury & Reserves (15%)</span>
                  <span>150,000,000 CRE8</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-4">
                  <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TokenInfo;

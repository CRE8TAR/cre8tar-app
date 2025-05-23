
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Pie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie as RechartsPie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const TokenInfo: React.FC = () => {
  const tokenData = [
    { name: 'Community Sale', value: 25, color: '#9b87f5' },
    { name: 'Team & Advisors', value: 20, color: '#5D35D5' },
    { name: 'Ecosystem Growth', value: 20, color: '#42C6FF' },
    { name: 'Staking Rewards', value: 15, color: '#FF42A1' },
    { name: 'Treasury', value: 10, color: '#D6BCFA' },
    { name: 'Liquidity', value: 10, color: '#8BE9FD' },
  ];

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
            CRE8 Token Information
          </h1>
          
          <div className="space-y-8">
            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Token Overview</h2>
              <p className="text-gray-100 font-bold text-[17px]">
                The CRE8 token is the native utility token of the CRE8TAR ecosystem, powering all interactions, transactions, and governance decisions on the platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-black/20 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cre8-purple">Token Name</h3>
                  <p className="text-gray-100 font-bold text-[17px]">CRE8</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cre8-purple">Total Supply</h3>
                  <p className="text-gray-100 font-bold text-[17px]">100,000,000 CRE8</p>
                </div>
                <div className="bg-black/20 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-cre8-purple">Token Standard</h3>
                  <p className="text-gray-100 font-bold text-[17px]">ERC-20</p>
                </div>
              </div>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Token Distribution</h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <RechartsPie
                      data={tokenData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={60}
                      paddingAngle={2}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {tokenData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </RechartsPie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend layout="vertical" verticalAlign="middle" align="right" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Token Utility</h2>
              <ul className="space-y-3 text-gray-100 font-bold text-[17px]">
                <li className="flex items-start gap-2">
                  <span className="text-cre8-purple text-xl">•</span>
                  <span>Avatar creation and minting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cre8-purple text-xl">•</span>
                  <span>Marketplace transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cre8-purple text-xl">•</span>
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cre8-purple text-xl">•</span>
                  <span>Staking rewards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cre8-purple text-xl">•</span>
                  <span>Avatar enhancement and evolution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cre8-purple text-xl">•</span>
                  <span>Access to premium features</span>
                </li>
              </ul>
            </section>

            <section className="glass-panel p-6">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Token Vesting</h2>
              <p className="text-gray-100 font-bold text-[17px] mb-4">
                CRE8 tokens allocated to team members, advisors, and investors are subject to vesting periods to ensure long-term alignment and commitment to the project.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Allocation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Vesting Period</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cliff</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Team & Founders</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">24 months</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">6 months</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Advisors</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">18 months</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">3 months</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Private Sale</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">12 months</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">1 month</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">Public Sale</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">No vesting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TokenInfo;

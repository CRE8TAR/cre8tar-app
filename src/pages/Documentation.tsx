
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Book, Code, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Documentation: React.FC = () => {
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
            Documentation
          </h1>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="getting-started" className="data-[state=active]:bg-cre8-purple">
                <Book className="mr-2 h-4 w-4" /> Getting Started
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-cre8-purple">
                <Code className="mr-2 h-4 w-4" /> API Reference
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-cre8-purple">
                <FileText className="mr-2 h-4 w-4" /> User Guides
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-cre8-purple">
                <Users className="mr-2 h-4 w-4" /> Community
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="space-y-6">
              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Welcome to CRE8TAR</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  This documentation will help you get started with creating, evolving, and trading your emotional avatars on the CRE8TAR platform.
                </p>
              </section>

              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Quick Start Guide</h2>
                <ol className="list-decimal list-inside space-y-4 text-gray-100 font-bold text-[17px]">
                  <li>Connect your wallet to the CRE8TAR platform</li>
                  <li>Create your first avatar through the minting process</li>
                  <li>Interact with your avatar to develop its emotional intelligence</li>
                  <li>Explore the marketplace to trade or acquire new avatars</li>
                  <li>Participate in governance decisions using CRE8 tokens</li>
                </ol>
              </section>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6">
              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">API Overview</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  The CRE8TAR API allows developers to integrate with our platform, access avatar data, and build applications that interact with the CRE8TAR ecosystem.
                </p>
              </section>

              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Authentication</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  All API requests require authentication using your API key. You can generate an API key from your developer dashboard.
                </p>
                <pre className="bg-black/50 p-4 mt-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    // Example API request with authentication header
                    fetch('https://api.cre8tar.com/v1/avatars', {'{'}
                      headers: {'{'}
                        'Authorization': 'Bearer YOUR_API_KEY'
                      {'}'}
                    {'}'})
                  </code>
                </pre>
              </section>
            </TabsContent>
            
            <TabsContent value="guides" className="space-y-6">
              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Avatar Creation Guide</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  This guide walks you through the process of creating your first emotionally intelligent avatar on the CRE8TAR platform.
                </p>
              </section>

              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Trading on the Marketplace</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  Learn how to navigate the CRE8TAR marketplace, list your avatars for sale, and purchase avatars from other creators.
                </p>
              </section>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-6">
              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Join Our Community</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  Connect with other CRE8TAR users and developers through our Discord server, forum, and social media channels.
                </p>
              </section>

              <section className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Contributing to CRE8TAR</h2>
                <p className="text-gray-100 font-bold text-[17px]">
                  Learn how you can contribute to the CRE8TAR platform through code, documentation, or community support.
                </p>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;

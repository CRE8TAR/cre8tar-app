
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070810] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-4">
              The future of emotionally intelligent avatars begins here.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">What is CRE8TAR?</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-cre8-purple transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-cre8-purple transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Avatar Minting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">AI Companion</a></li>
              <li><a href="#marketplace" className="text-gray-400 hover:text-cre8-purple transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Fusion Lab</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Token Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Website</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 CRE8TAR. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cre8-purple transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-cre8-bg-dark text-white">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">Privacy Policy for CRE8TAR</h1>
          <p className="text-gray-400 mb-8 text-center">Effective Date: 05-05-2025</p>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              CRE8TAR ("Company," "we," "our," or "us") is committed to protecting the privacy and emotional data integrity of our users. This Privacy Policy outlines how we collect, use, and safeguard information in connection with our emotionally intelligent avatar-based AI platform and services globally.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-bold text-cre8-purple mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Name, email, and contact details</li>
              <li className="mb-2">Subscription and payment data</li>
              <li className="mb-2">Account authentication credentials</li>
            </ul>

            <h3 className="text-xl font-bold text-cre8-purple mb-3">Avatar & Interaction Data</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Avatar preferences, emotional traits, and customization data</li>
              <li className="mb-2">Chat logs, emotional interaction history, feedback, and engagement patterns</li>
            </ul>

            <h3 className="text-xl font-bold text-cre8-purple mb-3">Technical Data</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">IP address, device type, OS, browser</li>
              <li className="mb-2">Usage metrics, crash reports, performance logs</li>
            </ul>

            <h3 className="text-xl font-bold text-cre8-purple mb-3">Biometric & Expression Data (with user consent)</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Voice tone, facial expressions, emotion detection indicators</li>
              <li className="mb-2">Real-time input used to animate and personalize avatars</li>
            </ul>

            <h3 className="text-xl font-bold text-cre8-purple mb-3">Blockchain & NFT Data</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Public wallet addresses and avatar NFT activity (on-chain)</li>
              <li className="mb-2">Trait lineage and avatar fusion history</li>
            </ul>

            <h3 className="text-xl font-bold text-cre8-purple mb-3">Third-Party Integrations</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Social media or metaverse platform interactions</li>
              <li className="mb-2">External tools integrated with CRE8TAR services</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use the Data</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">To deliver and improve avatar functionality and emotional responsiveness</li>
              <li className="mb-2">For training our emotional AI models and personalization engines</li>
              <li className="mb-2">To provide user support and service enhancements</li>
              <li className="mb-2">To fulfill legal or compliance obligations (e.g., GDPR, CCPA)</li>
              <li className="mb-2">To analyze market trends and optimize UX</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Sharing</h2>
            <p className="text-gray-300 mb-4">We do not sell user data. Data may be shared with:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Cloud providers, analytics tools, and email systems</li>
              <li className="mb-2">NFT platforms for on-chain interactions</li>
              <li className="mb-2">Legal authorities when required by law</li>
              <li className="mb-2">Partners (only with explicit user opt-in)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Global Compliance</h2>
            <p className="text-gray-300 mb-4">We comply with:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">GDPR (EU/UK) – Access, correction, deletion rights</li>
              <li className="mb-2">CCPA/CPRA (California) – Opt-out and transparency</li>
              <li className="mb-2">KVKK (Turkey), LGPD (Brazil), PDPA (Asia) – Local regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">User Rights</h2>
            <p className="text-gray-300 mb-4">Depending on jurisdiction, users can:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Access/edit/delete their personal or emotional data</li>
              <li className="mb-2">Withdraw consent for biometric data use</li>
              <li className="mb-2">Opt out of model training</li>
              <li className="mb-2">File complaints with local authorities</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Security</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">End-to-end encryption of sensitive data</li>
              <li className="mb-2">Consent-based emotional and biometric processing</li>
              <li className="mb-2">Secure memory management for avatar traits</li>
              <li className="mb-2">Regular audits, backups, and threat monitoring</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-300 mb-4">CRE8TAR is not intended for children under 13 (or legal age per jurisdiction). If you believe your child has shared data, contact us for removal.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact</h2>
            <p className="text-gray-300 mb-2">Email: privacy@cre8tar.com</p>
            <p className="text-gray-300 mb-2">Website: https://cre8tar.com</p>
            <p className="text-gray-300 mb-2">[ Bengaluru, India]</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

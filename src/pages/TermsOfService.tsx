
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-cre8-bg-dark text-white">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center">Terms and Conditions for CRE8TAR</h1>
          <p className="text-gray-400 mb-8 text-center">Effective Date: 05-05-2025</p>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              These Terms and Conditions ("Terms") govern your access to and use of CRE8TAR's AI avatar platform ("Services"). By using our site or services, you agree to comply with these Terms. If you disagree, do not use CRE8TAR.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Eligibility & General Use</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Users must be 13+ and legally able to enter contracts.</li>
              <li className="mb-2">You agree not to misuse the platform or impersonate others.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">All avatar AI models, code, UI, and branded content belong to CRE8TAR.</li>
              <li className="mb-2">You retain rights to your own inputs but grant CRE8TAR a non-exclusive license for avatar creation and improvement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. NFT & Blockchain Use</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Avatars may be minted as NFTs; all minting, fusion, and transfer actions are permanent and logged on-chain.</li>
              <li className="mb-2">You are responsible for managing your crypto wallets and blockchain transactions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Avatar Use License</h2>
            <p className="text-gray-300 mb-2">You may use avatars for personal or permitted commercial purposes.</p>
            <p className="text-gray-300 mb-2">You may not:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Reverse engineer models</li>
              <li className="mb-2">Use avatars for impersonation or fraud</li>
              <li className="mb-2">Distribute harmful or illegal content via avatars</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Payments & Refunds</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Subscription and NFT services are billed via third-party processors.</li>
              <li className="mb-2">Refunds are available within 3 days, unless:</li>
              <ul className="list-disc pl-6 text-gray-300 mb-2">
                <li className="mb-2">Avatar has been minted or fused</li>
                <li className="mb-2">NFT has been transferred on-chain</li>
              </ul>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Limitation of Liability</h2>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">CRE8TAR provides the service as-is.</li>
              <li className="mb-2">We are not liable for avatar misuse, third-party site integration issues, or emotional misinterpretations.</li>
              <li className="mb-2">Liability does not extend beyond fees paid to us in the past 12 months.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Termination</h2>
            <p className="text-gray-300 mb-2">We may terminate or restrict access if:</p>
            <ul className="list-disc pl-6 text-gray-300 mb-4">
              <li className="mb-2">Terms are violated</li>
              <li className="mb-2">Avatars are used for malicious, unethical, or illegal purposes</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. DAO Participation</h2>
            <p className="text-gray-300 mb-4">By holding a CRE8TAR NFT, you may be eligible to vote on platform proposals. Participation is subject to the DAO's evolving smart contract rules.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Modifications</h2>
            <p className="text-gray-300 mb-4">CRE8TAR reserves the right to update Terms or features. Continued use of the platform implies acceptance of updates.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Governing Law</h2>
            <p className="text-gray-300 mb-4">These Terms are governed by the laws of India. Disputes are subject to exclusive jurisdiction of Bengaluru courts.</p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact</h2>
            <p className="text-gray-300 mb-2">For legal inquiries, please contact:</p>
            <p className="text-gray-300 mb-2">Email: legal@cre8tar.com</p>
            <p className="text-gray-300 mb-2">Website: https://cre8tar.com</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;

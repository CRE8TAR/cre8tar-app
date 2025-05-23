import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Code, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const ApiReference: React.FC = () => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

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
            API Reference
          </h1>
          
          <p className="text-gray-100 font-bold text-[17px] mb-8">
            The CRE8TAR API gives developers the tools to integrate with our platform, access avatar data, and build applications that enrich the CRE8TAR ecosystem.
          </p>
          
          <Tabs defaultValue="authentication" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="authentication" className="data-[state=active]:bg-cre8-purple">Authentication</TabsTrigger>
              <TabsTrigger value="avatars" className="data-[state=active]:bg-cre8-purple">Avatars</TabsTrigger>
              <TabsTrigger value="marketplace" className="data-[state=active]:bg-cre8-purple">Marketplace</TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-cre8-purple">Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="authentication" className="space-y-6">
              <div className="glass-panel p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">Authentication</h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard('curl -X POST https://api.cre8tar.com/v1/auth/token -H "Content-Type: application/json" -d \'{"api_key": "YOUR_API_KEY"}\'', 'auth')}
                    className="border-cre8-purple text-white hover:bg-cre8-purple/20"
                  >
                    {copied === 'auth' ? <Check size={14} /> : <Copy size={14} />}
                    <span className="ml-1">{copied === 'auth' ? 'Copied' : 'Copy'}</span>
                  </Button>
                </div>
                <p className="text-gray-100 font-bold text-[17px] mb-4">
                  All API requests must include an authentication token. To obtain a token, make a POST request to the auth endpoint with your API key.
                </p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    // Request
                    POST /v1/auth/token
                    Content-Type: application/json
                    
                    {`{
  "api_key": "YOUR_API_KEY"
}`}
                    
                    // Response
                    {`{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}`}
                  </code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="avatars" className="space-y-6">
              <div className="glass-panel p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">List Avatars</h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard('curl https://api.cre8tar.com/v1/avatars -H "Authorization: Bearer YOUR_TOKEN"', 'list')}
                    className="border-cre8-purple text-white hover:bg-cre8-purple/20"
                  >
                    {copied === 'list' ? <Check size={14} /> : <Copy size={14} />}
                    <span className="ml-1">{copied === 'list' ? 'Copied' : 'Copy'}</span>
                  </Button>
                </div>
                <p className="text-gray-100 font-bold text-[17px] mb-4">
                  Get a list of all avatars owned by the authenticated user.
                </p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    // Request
                    GET /v1/avatars
                    Authorization: Bearer YOUR_TOKEN
                    
                    // Response
                    {`{
  "avatars": [
    {
      "id": "avatar_123456",
      "name": "Nebula",
      "emotional_level": 42,
      "creation_date": "2025-01-15T12:30:45Z",
      "image_url": "https://assets.cre8tar.com/avatars/nebula.png"
    },
    {
      "id": "avatar_789012",
      "name": "Quantum",
      "emotional_level": 37,
      "creation_date": "2025-02-20T09:15:30Z",
      "image_url": "https://assets.cre8tar.com/avatars/quantum.png"
    }
  ],
  "total": 2
}`}
                  </code>
                </pre>
              </div>

              <div className="glass-panel p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold mb-4 gradient-text">Get Avatar Details</h2>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard('curl https://api.cre8tar.com/v1/avatars/avatar_123456 -H "Authorization: Bearer YOUR_TOKEN"', 'detail')}
                    className="border-cre8-purple text-white hover:bg-cre8-purple/20"
                  >
                    {copied === 'detail' ? <Check size={14} /> : <Copy size={14} />}
                    <span className="ml-1">{copied === 'detail' ? 'Copied' : 'Copy'}</span>
                  </Button>
                </div>
                <p className="text-gray-100 font-bold text-[17px] mb-4">
                  Get detailed information about a specific avatar.
                </p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    // Request
                    GET /v1/avatars/avatar_123456
                    Authorization: Bearer YOUR_TOKEN
                    
                    // Response
                    {`{
  "id": "avatar_123456",
  "name": "Nebula",
  "emotional_level": 42,
  "creation_date": "2025-01-15T12:30:45Z",
  "owner": "0x1234...5678",
  "traits": {
    "empathy": 8,
    "creativity": 7,
    "logic": 6,
    "intuition": 9
  },
  "image_url": "https://assets.cre8tar.com/avatars/nebula.png",
  "metadata_uri": "ipfs://QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ",
  "token_id": 12345
}`}
                  </code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="marketplace" className="space-y-6">
              <div className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Marketplace Listings</h2>
                <p className="text-gray-100 font-bold text-[17px] mb-4">
                  Get all currently active marketplace listings.
                </p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    // Request
                    GET /v1/marketplace/listings
                    Authorization: Bearer YOUR_TOKEN
                    
                    // Response
                    {`{
  "listings": [
    {
      "id": "listing_123456",
      "avatar_id": "avatar_123456",
      "seller": "0x1234...5678",
      "price": "5.5",
      "currency": "CRE8",
      "created_at": "2025-04-10T15:20:30Z",
      "expires_at": "2025-04-17T15:20:30Z"
    },
    {
      "id": "listing_789012",
      "avatar_id": "avatar_789012",
      "seller": "0x8765...4321",
      "price": "2.75",
      "currency": "CRE8",
      "created_at": "2025-04-11T09:45:15Z",
      "expires_at": "2025-04-18T09:45:15Z"
    }
  ],
  "total": 2
}`}
                  </code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="space-y-6">
              <div className="glass-panel p-6">
                <h2 className="text-2xl font-bold mb-4 gradient-text">WebSocket Events API</h2>
                <p className="text-gray-100 font-bold text-[17px] mb-4">
                  Subscribe to real-time events for avatars and marketplace activities.
                </p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-gray-300">
                    // WebSocket Connection
                    const socket = new WebSocket('wss://api.cre8tar.com/v1/events');
                    
                    // Authentication
                    socket.onopen = () {"{"}
                      socket.send(JSON.stringify({"{"}
                        type: 'auth',
                        token: 'YOUR_TOKEN'
                      {"}"}));
                    {"}"};
                    
                    // Subscribe to avatar events
                    socket.send(JSON.stringify({"{"}
                      type: 'subscribe',
                      channel: 'avatar',
                      avatar_id: 'avatar_123456'
                    {"}"}));
                    
                    // Event handling
                    socket.onmessage = (event) {"{"}
                      const data = JSON.parse(event.data);
                      console.log('Event received:', data);
                    {"}"};
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApiReference;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Wallet, Sun, Moon, ChevronDown } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Early Access', href: '#early-access' }
];

const platformItems = [
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Stake & Governance', href: '/stake-governance' },
  { name: 'Avatar Minting', href: '/avatar-minting' },
  { name: 'Fusion Lab', href: '/fusion-lab' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { readingMode, toggleReadingMode } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      if (isHomePage) {
        // Track which section is currently in view
        const sections = ['features', 'use-cases', 'faq', 'early-access'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        } else if (window.scrollY < 200) {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const getNavItemClass = (href: string) => {
    const isActive = (href === '#' && activeSection === 'home') || 
                    (href.includes(activeSection) && activeSection !== 'home');
    
    return `font-doto font-bold px-2 py-1 text-base transition-all duration-500 transform ${
      readingMode ? 'text-gray-800' : 'text-white'
    } ${
      isActive 
        ? `scale-125 text-lg bg-gradient-to-r ${
            readingMode 
              ? 'from-purple-600 via-blue-600 to-purple-800' 
              : 'from-cre8-neon-blue via-cre8-purple to-cre8-neon-pink'
          } bg-clip-text text-transparent font-black ${
            readingMode ? '' : 'drop-shadow-[0_0_8px_rgba(155,135,245,0.6)]'
          }`
        : 'hover:text-cre8-purple hover:scale-105'
    }`;
  };

  return (
    <nav 
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center cursor-pointer">
              <img 
                src={readingMode ? "/lovable-uploads/34b261f0-50ce-4005-934b-c3582b4f0e37.png" : "/Logo_C8.png"}
                alt="CRE8TAR logo" 
                className="h-9 w-auto"
              />
              <h3 className={`ml-2 font-bold text-xl ${readingMode ? 'text-gray-800' : 'text-white'}`}></h3>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={getNavItemClass(item.href)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={getNavItemClass(item.href)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              {/* Platform Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={`font-doto font-bold hover:text-cre8-purple hover:scale-105 px-2 py-1 text-base transition-all duration-300 flex items-center gap-1 ${
                    readingMode ? 'text-gray-800' : 'text-white'
                  }`}>
                    Platform
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`${readingMode ? 'bg-white border-gray-200' : 'bg-black/90 border-gray-700'} backdrop-blur-md`}>
                  {platformItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className={`font-doto font-bold hover:text-cre8-purple cursor-pointer ${
                          readingMode ? 'text-gray-800' : 'text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className={`${
              readingMode 
                ? 'bg-blue-100 border border-blue-300 hover:bg-blue-200 text-blue-800' 
                : 'bg-transparent border border-cre8-purple hover:bg-cre8-purple/20 text-white'
            } flex items-center gap-2`}>
              <Wallet size={16} />
              Wallet
            </Button>
            
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${
              readingMode ? 'bg-gray-100 border border-gray-300' : 'bg-black/30 border border-white/10'
            }`}>
              {readingMode ? 
                <Sun size={18} className="text-gray-800" /> : 
                <Moon size={18} className="text-white" />
              }
              <Switch 
                checked={readingMode} 
                onCheckedChange={toggleReadingMode} 
                className="data-[state=checked]:bg-gray-600"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center">
              {readingMode ? 
                <Sun size={18} className="text-gray-800" /> : 
                <Moon size={18} className="text-white" />
              }
              <Switch 
                checked={readingMode} 
                onCheckedChange={toggleReadingMode} 
                className="ml-1 data-[state=checked]:bg-gray-600"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`hover:text-cre8-purple ${readingMode ? 'text-gray-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${readingMode ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200' : 'bg-black/95 backdrop-blur-lg'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-doto font-bold hover:text-cre8-purple px-3 py-2 text-lg ${
                    readingMode ? 'text-gray-800' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block font-doto font-bold hover:text-cre8-purple px-3 py-2 text-lg ${
                    readingMode ? 'text-gray-800' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            
            {/* Mobile Platform Menu */}
            <div 
              className={`block font-doto font-bold px-3 py-2 text-lg cursor-pointer ${
                readingMode ? 'text-gray-800' : 'text-white'
              }`}
              onClick={() => setPlatformDropdownOpen(!platformDropdownOpen)}
            >
              Platform
              <ChevronDown size={16} className={`inline ml-2 transition-transform ${platformDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {platformDropdownOpen && (
              <div className="pl-6">
                {platformItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block font-doto font-bold hover:text-cre8-purple px-3 py-2 text-base ${
                      readingMode ? 'text-gray-600' : 'text-gray-300'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            
            <Button 
              className={`w-full mt-4 ${
                readingMode 
                  ? 'bg-blue-100 border border-blue-300 hover:bg-blue-200 text-blue-800' 
                  : 'bg-transparent border border-cre8-purple hover:bg-cre8-purple/20 text-white'
              } flex items-center justify-center gap-2`}
            >
              <Wallet size={20} />
              Wallet
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

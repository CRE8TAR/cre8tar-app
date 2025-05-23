
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Wallet, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Stake & Governance', href: '#governance' },
  { name: 'Early Access', href: '#early-access' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { readingMode, toggleReadingMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-transparent'
      } ${readingMode ? 'reading-mode' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-doto text-white font-bold hover:text-cre8-purple px-2 py-1 text-base transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-doto text-white font-bold hover:text-cre8-purple px-2 py-1 text-base transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-transparent border border-cre8-purple hover:bg-cre8-purple/20 text-white flex items-center gap-2">
              <Wallet size={16} />
              Wallet
            </Button>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/30 border border-white/10">
              {readingMode ? 
                <Sun size={18} className="text-black" /> : 
                <Moon size={18} className="text-white" />
              }
              <Switch 
                checked={readingMode} 
                onCheckedChange={toggleReadingMode} 
                className="data-[state=checked]:bg-white"
              />
              <span className={`text-sm font-medium ${readingMode ? "text-black" : "text-white"}`}>
                {readingMode ? "" : ""}
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center">
              {readingMode ? 
                <Sun size={18} className="text-black" /> : 
                <Moon size={18} className="text-white" />
              }
              <Switch 
                checked={readingMode} 
                onCheckedChange={toggleReadingMode} 
                className="ml-1 data-[state=checked]:bg-white"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cre8-purple"
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
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block font-doto text-white font-bold hover:text-cre8-purple px-3 py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block font-doto text-white font-bold hover:text-cre8-purple px-3 py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            
            <Button 
              className="w-full mt-4 bg-transparent border border-cre8-purple hover:bg-cre8-purple/20 text-white flex items-center justify-center gap-2"
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

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#features' },
  { name: 'Use Cases', href: '/#use-cases' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Early Access', href: '/#early-access' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavItemClass = (href: string) =>
    'text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors';

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 text-xl font-bold text-primary">
            CRE8TAR
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav items */}
        <div className="hidden lg:flex lg:gap-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={getNavItemClass(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-4 overflow-y-auto shadow-lg sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/"
              className="text-xl font-bold text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              CRE8TAR
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={getNavItemClass(item.href)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

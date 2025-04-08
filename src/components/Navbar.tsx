
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pavlok-dark/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-white font-bold text-xl tracking-tight">PAVLOK</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-white hover:text-pavlok-lightPurple animated-border px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#features" className="text-white hover:text-pavlok-lightPurple animated-border px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-white hover:text-pavlok-lightPurple animated-border px-3 py-2 text-sm font-medium">
                How It Works
              </a>
              <a href="#testimonials" className="text-white hover:text-pavlok-lightPurple animated-border px-3 py-2 text-sm font-medium">
                Testimonials
              </a>
              <a href="#faq" className="text-white hover:text-pavlok-lightPurple animated-border px-3 py-2 text-sm font-medium">
                FAQ
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button 
              className="bg-pavlok-purple hover:bg-pavlok-blue text-white font-bold"
              size="lg"
              onClick={() => window.location.href = '#cta'}
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pavlok-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pavlok-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="text-white hover:bg-pavlok-purple/20 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#features"
              className="text-white hover:bg-pavlok-purple/20 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:bg-pavlok-purple/20 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-white hover:bg-pavlok-purple/20 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-white hover:bg-pavlok-purple/20 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-2">
              <Button 
                className="w-full bg-pavlok-purple hover:bg-pavlok-blue text-white font-bold"
                onClick={() => {
                  window.location.href = '#cta';
                  setIsMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

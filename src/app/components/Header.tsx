import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm shadow-lg z-50" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
              aria-label="Go to top of page"
            >
              Josh/Barteaux
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('expertise')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Expertise
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-700"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4" role="menu">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md"
                role="menuitem"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md"
                role="menuitem"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md"
                role="menuitem"
              >
                Expertise
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md"
                role="menuitem"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md"
                role="menuitem"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
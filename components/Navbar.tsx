
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Airline Ticketing', href: '#airline' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 shrink-0">
            <img
              src="/logo.webp"
              alt="Travel Companion"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <span className="text-xl font-bold font-heading tracking-tight text-[#0F0F0F]">
              TRAVEL<span className="text-orange-500">COMPANION</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold transition-colors text-[#0F0F0F] nav-link"
              >
                {link.name}
              </a>
            ))}
            
            {/* Umrah Link */}
            <a
              href="#umrah"
              className="text-sm font-semibold transition-colors text-[#0F0F0F] nav-link"
            >
              Umrah
            </a>
            
            {/* Tours Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className="flex items-center text-sm font-semibold transition-colors text-[#0F0F0F] nav-link">
                Tours <ChevronDown className="ml-1 w-4 h-4 text-orange-500" />
              </button>
              
              {activeDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-2xl rounded-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
                  <a href="#international" className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">International Tours</a>
                  <a href="#domestic" className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">Domestic Tours</a>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="text-sm font-semibold transition-colors text-[#0F0F0F] nav-link"
            >
              Contact
            </a>

            <div className="flex items-center space-x-4 border-l border-slate-200 pl-8 ml-4">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20">
                Book Now
              </a>
              <div className="hidden xl:block">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Support</p>
                <p className="text-sm font-bold text-[#0F0F0F]">+92 300 511 0575</p>
              </div>
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#0F0F0F]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 animate-in slide-in-from-right-full duration-300 h-screen overflow-y-auto">
          <div className="px-6 pt-10 pb-20 space-y-6 flex flex-col items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[#0F0F0F] hover:text-orange-500 block transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#umrah"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-[#0F0F0F] hover:text-orange-500 block transition-colors"
            >
              Umrah
            </a>
            <div className="w-full h-px bg-slate-100 my-4" />
            <a href="#international" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-700">International Tours</a>
            <a href="#domestic" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-700">Domestic Tours</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-700">Contact Us</a>
            
            <div className="mt-8 space-y-4 w-full">
               <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full bg-orange-500 text-white py-4 rounded-xl font-bold shadow-lg text-center">
                 Book Now
               </a>
               <a href="tel:+123456789" className="flex items-center justify-center space-x-3 w-full bg-slate-100 text-[#0F0F0F] py-4 rounded-xl font-bold">
                 <Phone size={20} className="text-orange-500" />
                 <span>Call Specialist</span>
               </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

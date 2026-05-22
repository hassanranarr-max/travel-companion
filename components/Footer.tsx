
import React from 'react';
import { Plane, Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          {/* Brand Col */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-orange-500">
                <Plane className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight text-white">
                <span className="text-orange-500">TRAVEL</span>COMPANION
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Luxury travel concierge providing unparalleled access to the world's most exquisite destinations since 2012.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-10 border-b border-white/10 pb-4 inline-block pr-8">Navigation</h4>
            <ul className="space-y-5">
              {[
                { label: 'About Our Agency', href: '#about' },
                { label: 'International Tours', href: '#international' },
                { label: 'Domestic Escapes', href: '#domestic' },
                { label: 'Umrah Services', href: '#umrah' },
                { label: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.label} className="group">
                  <a href={item.href} className="text-slate-400 hover:text-orange-500 transition-all flex items-center group-hover:translate-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 mr-3 group-hover:bg-orange-500 group-hover:w-3 transition-all" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-10 border-b border-white/10 pb-4 inline-block pr-8">Official Info</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <MapPin className="text-orange-500 shrink-0" size={20} />
                </div>
                <span className="text-slate-400 leading-snug">Office 5-B Basement Mehmood
Plaza 10ld #79W G-7 Fazal-e-Haq
Road Blue Area, Islamabad</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="text-orange-500 shrink-0" size={20} />
                </div>
                <span className="text-slate-400">051 212 0985 , 051 111 0986 , 051 844 3838 , +92 300 511 0575 , +92 344 511 0575</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="text-orange-500 shrink-0" size={20} />
                </div>
                <span className="text-slate-400">travelcompanionpk2@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p className="mb-4 md:mb-0 uppercase tracking-[0.1em]">© 2024 Travel Companion Travel & Tours — Built for Excellence</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-orange-500 uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 uppercase transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-orange-500 uppercase transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

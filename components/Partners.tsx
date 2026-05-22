
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="airline" className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Official Travel Partners</h3>
      </div>
      
      <div className="flex relative overflow-hidden group">
        {/* Grayscale hover to orange/color effect */}
        <div className="flex space-x-16 animate-[scroll_50s_linear_infinite] whitespace-nowrap px-4">
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div key={index} className="flex items-center justify-center w-48 shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Partners;

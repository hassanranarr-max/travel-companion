
import React from 'react';
// Added missing Plane icon import
import { ArrowRight, Play, Plane } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Gradient Fade to White */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Premium Travel Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F0F0F] font-heading leading-tight mb-6">
            Explore the <br /> 
            <span className="text-orange-500 italic">World</span> With Us.
          </h1>
          
          <p className="text-lg text-black mb-10 leading-relaxed max-w-lg">
            Discover breathtaking destinations, curated experiences, and world-class services tailored to your every travel desire.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#umrah" className="w-full sm:w-auto px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold flex items-center justify-center transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 group">
              Start Your Journey 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#about" className="w-full sm:w-auto px-8 py-5 bg-white border border-slate-200 hover:bg-slate-50 text-[#0F0F0F] rounded-2xl font-bold flex items-center justify-center transition-all group shadow-sm">
              <span className="mr-3 p-2 bg-orange-100 rounded-full group-hover:bg-orange-500 transition-colors">
                <Play size={14} className="text-orange-600 group-hover:text-white fill-current" />
              </span>
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Hero Experience Card */}
      <div className="hidden lg:flex absolute bottom-12 right-12 z-10 bg-white shadow-2xl border border-slate-100 p-8 rounded-3xl flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 p-3 rounded-2xl">
             <Plane className="text-orange-600" size={24} />
          </div>
          <div>
            <p className="text-[#0F0F0F] text-xl font-bold">1200+</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Flight Partners</p>
          </div>
        </div>
        <div className="w-full h-px bg-slate-100" />
        <div className="flex items-center space-x-4">
          <div className="bg-orange-100 p-3 rounded-2xl">
             <ArrowRight className="text-orange-600" size={24} />
          </div>
          <div>
            <p className="text-[#0F0F0F] text-xl font-bold">98%</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

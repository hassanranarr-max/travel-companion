
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">Our Travelers Experiences</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#0F0F0F]">Stories from the <span className="text-orange-500">World</span></h2>
        </div>

        <div className="max-w-5xl mx-auto relative px-10">
          {/* Navigation Buttons */}
          <button 
            onClick={prev} 
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20 w-14 h-14 rounded-full bg-white border border-slate-100 shadow-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all flex items-center justify-center group"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next} 
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20 w-14 h-14 rounded-full bg-white border border-slate-100 shadow-xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all flex items-center justify-center group"
          >
            <ChevronRight size={24} />
          </button>

          {/* Card */}
          <div className="bg-slate-50 border border-slate-100 p-10 md:p-20 rounded-[3rem] shadow-sm relative overflow-hidden transition-all duration-700">
             <div className="absolute top-10 right-10 text-orange-500/20">
               <Quote size={80} fill="currentColor" />
             </div>
             
             <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex space-x-1.5 mb-10">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={i < TESTIMONIALS[currentIndex].rating ? "fill-orange-500 text-orange-500" : "text-slate-300"} 
                    />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-medium text-[#0F0F0F] leading-relaxed mb-12 max-w-3xl italic">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>

                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img 
                      src={TESTIMONIALS[currentIndex].avatar} 
                      alt={TESTIMONIALS[currentIndex].name} 
                      className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-2xl"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-orange-500 p-1.5 rounded-full text-white shadow-lg">
                       <Quote size={12} fill="white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F0F0F]">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mt-1">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-4 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-orange-500 w-10' : 'bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

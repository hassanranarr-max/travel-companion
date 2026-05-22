
import React from 'react';
import TourCard from './TourCard';
import { ArrowRight } from 'lucide-react';
import { Tour } from '../types';

interface TourGridProps {
  internationalTours: Tour[];
  domesticTours: Tour[];
  umrahTours: Tour[];
}

const TourGrid: React.FC<TourGridProps> = ({ internationalTours, domesticTours, umrahTours }) => {
  return (
    <div className="py-24 bg-white">
      {/* Umrah Section */}
      <section id="umrah" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Spiritual Journeys</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F0F0F] leading-tight">Premium <br /><span className="text-orange-500">Umrah</span> Packages</h2>
          </div>
          <a href="#contact" className="mt-8 md:mt-0 flex items-center px-8 py-4 bg-[#0F0F0F] text-white rounded-2xl font-bold hover:bg-orange-500 transition-all group">
            Explore All <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {umrahTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* International Section */}
      <section id="international" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Global Journeys</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F0F0F] leading-tight">Featured <br /><span className="text-orange-500">International</span> Packages</h2>
          </div>
          <a href="#contact" className="mt-8 md:mt-0 flex items-center px-8 py-4 bg-[#0F0F0F] text-white rounded-2xl font-bold hover:bg-orange-500 transition-all group">
            Explore All <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {internationalTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* Domestic Section */}
      <section id="domestic" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Local Escapes</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0F0F0F] leading-tight">Premium <br /><span className="text-orange-500">Domestic</span> Gateways</h2>
          </div>
          <a href="#contact" className="mt-8 md:mt-0 flex items-center px-8 py-4 bg-white border border-slate-200 text-[#0F0F0F] rounded-2xl font-bold hover:border-orange-500 hover:text-orange-500 transition-all group">
            Discover More <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {domesticTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TourGrid;

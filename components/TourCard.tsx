
import React from 'react';
import { MapPin, Clock, Star, ArrowUpRight } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-3 border border-slate-100">
      {/* Image Wrapper */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[#0F0F0F] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-xl">
          {tour.category}
        </div>
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-orange-600 px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
          <Star size={12} className="mr-1 fill-orange-500 text-orange-500" />
          4.9
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
          <MapPin size={14} className="mr-1.5 text-orange-500" />
          {tour.location}
        </div>
        
        <h4 className="text-xl font-bold text-[#0F0F0F] mb-6 min-h-[56px] leading-tight group-hover:text-orange-500 transition-colors">
          {tour.title}
        </h4>

        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
          <div>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-1">Starting At</p>
            <p className="text-3xl font-extrabold text-[#0F0F0F]">${tour.price}</p>
          </div>
          
          <div className="flex flex-col items-end">
             <div className="flex items-center text-slate-500 text-sm font-semibold mb-3">
               <Clock size={16} className="mr-1.5 text-orange-500" />
               {tour.duration}
             </div>
             <button className="w-12 h-12 bg-slate-50 group-hover:bg-orange-500 rounded-2xl flex items-center justify-center transition-all text-slate-400 group-hover:text-white shadow-sm group-hover:shadow-lg group-hover:shadow-orange-500/30">
                <ArrowUpRight size={20} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

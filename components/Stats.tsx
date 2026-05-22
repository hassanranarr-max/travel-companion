
import React from 'react';
import { Users, Map, Plane, Globe } from 'lucide-react';
import { STATS } from '../constants';

const IconMap: Record<string, any> = {
  Users: Users,
  Map: Map,
  Plane: Plane,
  Globe: Globe
};

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, i) => {
            const Icon = IconMap[stat.icon];
            return (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-3xl bg-white/5 text-orange-500 flex items-center justify-center mb-8 border border-white/10 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-orange-500/20 group-hover:-translate-y-2">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-5xl font-extrabold text-white mb-3 tracking-tight">{stat.value}</h3>
                <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

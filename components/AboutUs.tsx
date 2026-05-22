
import React from 'react';
import { ShieldCheck, Headphones, Globe, Sparkles, Plane, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      title: 'Airlines Ticketing',
      desc: 'Seamless booking across global carriers with competitive pricing.',
      icon: <Plane className="text-orange-600" size={24} />,
      color: 'bg-orange-50'
    },
    {
      title: 'Customized Tours',
      desc: 'Unique itineraries designed specifically for your travel style.',
      icon: <Sparkles className="text-orange-600" size={24} />,
      color: 'bg-orange-50'
    },
    {
      title: '24/7 Support',
      desc: 'Dedicated experts available at every step of your journey.',
      icon: <Headphones className="text-orange-600" size={24} />,
      color: 'bg-orange-50'
    },
    {
      title: 'Global Reach',
      desc: 'Access to the world\'s most remote and beautiful locations.',
      icon: <Globe className="text-orange-600" size={24} />,
      color: 'bg-orange-50'
    },
    {
      title: 'Luxury Umrah',
      desc: 'Premium spiritual packages with white-glove service.',
      icon: <ShieldCheck className="text-orange-600" size={24} />,
      color: 'bg-orange-50'
    },
    {
      title: 'Quick Processing',
      desc: 'Efficient visa and documentation handling for peace of mind.',
      icon: <Clock className="text-orange-600" size={24} />,
      color: 'bg-orange-50'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      {/* Airline ticketing anchor for navbar */}
      <span id="airline" className="sr-only">Airline Ticketing</span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="relative">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">About the Brand</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-6 leading-tight">
              Crafting <span className="text-orange-500">Extraordinary</span> <br />
              Travel Experiences
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We believe travel is more than just reaching a destination. It's about the stories you tell and the memories you create. Since our founding, we've focused on excellence and personalization.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className={`shrink-0 w-12 h-12 ${f.color} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/20`}>
                    <span className="transition-colors group-hover:text-white">
                      {React.cloneElement(f.icon as React.ReactElement, { 
                        className: "group-hover:text-white transition-colors"
                      })}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0F0F0F] mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
               <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800" 
                    alt="Travel 1"
                    className="w-full h-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-700"
                  />
               </div>
               <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800" 
                    alt="Travel 2"
                    className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
            <div className="space-y-6">
               <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800" 
                    alt="Travel 3"
                    className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-700"
                  />
               </div>
               <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800" 
                    alt="Travel 4"
                    className="w-full h-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
            {/* Accent Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-100/50 rounded-full blur-[120px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

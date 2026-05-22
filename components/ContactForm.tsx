
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="bg-[#0F0F0F] rounded-[3.5rem] shadow-2xl overflow-hidden border border-slate-100 p-12 lg:p-20 text-white relative text-center">
            <div className="relative z-10">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">Connect With Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Start Your <span className="text-orange-500">Dream</span> Holiday Today
              </h2>
              <p className="text-slate-400 mb-16 text-lg max-w-md mx-auto leading-relaxed">
                Whether it's a quick getaway or a month-long expedition, our team is here to handle every detail with precision.
              </p>

              <div className="space-y-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-white text-lg">Visit Boutique</h4>
                    <p className="text-slate-400">
                      Office 5-B Basement Mehmood Plaza 10ld #79W G-7 Fazal-e-Haq Road Blue Area, Islamabad
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <Phone size={28} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-white text-lg">Call Concierge</h4>
                    <p className="text-slate-400">051 212 0985 , 051 111 0986 , 051 844 3838 , +92 300 511 0575 , +92 344 511 0575</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                    <Mail size={28} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-white text-lg">Email Inquiry</h4>
                    <p className="text-slate-400">travelcompanionpk2@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 p-40 bg-orange-500/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

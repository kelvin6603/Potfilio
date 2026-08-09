import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Service } from '../types';
import { 
  Building2, ShoppingBag, Briefcase, GraduationCap, Activity, 
  Home, CalendarCheck, Layers, Code, ArrowRight, CheckCircle2, 
  Clock, Sparkles, X, Send, RefreshCw
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Icon mapping helper
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'ShoppingBag': return ShoppingBag;
      case 'Briefcase': return Briefcase;
      case 'GraduationCap': return GraduationCap;
      case 'Activity': return Activity;
      case 'Home': return Home;
      case 'CalendarCheck': return CalendarCheck;
      case 'Layers': return Layers;
      case 'Code': return Code;
      case 'RefreshCw': return RefreshCw;
      default: return Building2;
    }
  };

  return (
    <section id="services" className="py-20 relative">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Digital Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Services Engineered For <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From sleek corporate websites to enterprise SaaS portals, every project is tailored for speed, SEO dominance, and high customer conversions.
          </p>
        </div>

        {/* Services Grid (All 9 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Popular Tag */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-slate-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                    Popular Choice
                  </div>
                )}

                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-slate-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Footer details */}
                <div className="pt-4 border-t border-slate-800/80 space-y-4">
                  
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {service.turnaroundTime}
                    </span>
                    <span className="font-bold text-slate-200 text-sm">
                      {service.startingPrice} <span className="text-[10px] text-slate-400 font-normal">starting</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:text-white transition-all text-center cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-400 hover:to-slate-500 shadow-md shadow-blue-500/10 flex items-center justify-center gap-1 transition-all cursor-pointer"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 to-slate-600 p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  {React.createElement(getServiceIcon(selectedService.iconName), { className: "w-6 h-6 text-blue-400" })}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">{selectedService.title}</h3>
                <p className="text-xs text-slate-400">Starting from {selectedService.startingPrice} • Delivery in {selectedService.turnaroundTime}</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">What’s Included in This Package:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Need a customized package? <span className="text-slate-200 font-semibold">We offer custom scope builds!</span>
              </div>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(serviceName);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 to-slate-600 shadow-lg shadow-slate-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Request Custom Quote for {selectedService.title}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

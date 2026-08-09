import React from 'react';
import { SpeedTestVisualizer } from './SpeedTestVisualizer';
import { 
  Zap, Search, Smartphone, ShieldCheck, Palette, 
  Headphones, DollarSign, Sparkles, CheckCircle2 
} from 'lucide-react';

export const WhyChooseMe: React.FC = () => {
  const pillars = [
    {
      title: 'MOBILE FRIENDLY',
      icon: Smartphone,
      color: 'text-blue-400',
      badge: 'All Devices',
      desc: 'Looks perfect on any device'
    },
    {
      title: 'FAST LOADING',
      icon: Zap,
      color: 'text-amber-400',
      badge: '< 1.5s Load',
      desc: 'Optimized for speed & performance'
    },
    {
      title: 'MODERN DESIGN',
      icon: Palette,
      color: 'text-slate-400',
      badge: 'Award Level',
      desc: 'Clean, professional & user-focused'
    },
    {
      title: 'AFFORDABLE PRICING',
      icon: DollarSign,
      color: 'text-emerald-400',
      badge: 'Transparent',
      desc: 'Quality solutions within your budget'
    },
    {
      title: 'ONGOING SUPPORT',
      icon: Headphones,
      color: 'text-blue-400',
      badge: 'Post Launch',
      desc: "I'm here even after your project goes live"
    },
    {
      title: 'SECURE & RELIABLE',
      icon: ShieldCheck,
      color: 'text-teal-400',
      badge: 'Bank Grade',
      desc: 'Built with best practices'
    },
    {
      title: 'SEO FRIENDLY',
      icon: Search,
      color: 'text-sky-400',
      badge: 'Top Search',
      desc: 'Helps your site rank higher'
    },
    {
      title: '100% SATISFACTION',
      icon: Sparkles,
      color: 'text-blue-400',
      badge: 'Guaranteed',
      desc: 'Your success is my priority'
    }
  ];

  return (
    <section id="why-me" className="py-20 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold text-blue-300">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">THE KELVIN MURIUKI GUARANTEE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            WHY WORK <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">WITH ME?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            I don’t just build templates—I engineer high-converting digital solutions tailored for real growth.
          </p>
        </div>

        {/* 8 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-4 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live PageSpeed Benchmark Comparison */}
        <SpeedTestVisualizer />

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Star, Code, Award, 
  Users, Rocket, Building2, ShoppingBag, Briefcase, Home, 
  GraduationCap, CalendarCheck, RefreshCw, Tag 
} from 'lucide-react';
import { InteractiveMockupViewer } from './InteractiveMockupViewer';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigateToPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onNavigateToPortfolio }) => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [expYears, setExpYears] = useState(0);

  // Animated Counter Effect
  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setProjectCount(Math.min(Math.floor(100 * progress), 100));
      setClientCount(Math.min(Math.floor(50 * progress), 50));
      setExpYears(Math.min(Math.floor(5 * progress), 5));

      if (currentStep >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { label: '99+ PageSpeed Score', icon: Zap, color: 'text-amber-400' },
    { label: 'SEO Top 1% Ranked', icon: Award, color: 'text-blue-400' },
    { label: '100% Mobile Responsive', icon: CheckCircle2, color: 'text-emerald-400' },
    { label: 'Bank-Grade SSL Security', icon: ShieldCheck, color: 'text-slate-400' }
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Badge */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-blue-300 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="uppercase tracking-widest text-[11px]">KELVIN MURIUKI • WEB DESIGNER</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-normal">Nairobi & Worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.05] uppercase">
            I DESIGN <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-slate-500 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
              WEBSITES
            </span>
          </h1>

          {/* Tagline */}
          <div className="text-lg sm:text-2xl font-medium italic text-blue-200 tracking-wide">
            Modern. Responsive. Purposeful.
          </div>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
            I help businesses and organizations build powerful digital experiences that engage users, drive results, and <strong className="text-white font-bold underline decoration-blue-400 decoration-2 underline-offset-4">grow brands</strong>.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group shadow-lg shadow-emerald-950/20"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onNavigateToPortfolio}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View My Portfolio</span>
              <Code className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl w-full">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-slate-300">
                  <Icon className={`w-4 h-4 ${badge.color}`} />
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* MY SERVICES & PRICING Card (Poster Flyer Layout) */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-blue-500/40 shadow-2xl shadow-blue-950/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-[11px] font-bold text-blue-300 mb-2">
                <Tag className="w-3.5 h-3.5 text-blue-400" />
                <span>OFFICIAL SERVICE RATE CARD</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                MY SERVICES & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">PRICING</span>
              </h2>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-blue-400 hover:bg-blue-300 transition-all flex items-center gap-2 shadow-lg shadow-blue-400/20 cursor-pointer"
            >
              <span>Get FREE Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 8 Services Rate Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">Business Websites</h3>
                  <p className="text-[10px] text-slate-400">Corporate & Brand Sites</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 25,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-slate-500/20 border border-slate-500/40 text-slate-400 flex items-center justify-center shrink-0">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">E-commerce Stores</h3>
                  <p className="text-[10px] text-slate-400">M-Pesa Checkout & Orders</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 40,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">Portfolio Websites</h3>
                  <p className="text-[10px] text-slate-400">Creators & Executives</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 20,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">Real Estate Websites</h3>
                  <p className="text-[10px] text-slate-400">Property Listings & Maps</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 30,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">School & Org Systems</h3>
                  <p className="text-[10px] text-slate-400">Admissions & Student Portals</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 25,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">Booking & Tour Sites</h3>
                  <p className="text-[10px] text-slate-400">Hotels, Safaris & Airbnbs</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 35,000</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center shrink-0">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">Custom Web Applications</h3>
                  <p className="text-[10px] text-slate-400">Tailored SaaS & Software</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 60,000+</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white group-hover:text-blue-300">Website Redesign</h3>
                  <p className="text-[10px] text-slate-400">Modern Revamp & Speed Boost</p>
                </div>
              </div>
              <div className="text-right pt-1 border-t border-slate-800/80">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">From </span>
                <span className="text-sm font-black text-blue-400">KES 15,000</span>
              </div>
            </div>
          </div>

          {/* Pricing Note Box */}
          <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-blue-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-300 font-medium">
              💡 <strong className="text-white">Note:</strong> Prices may vary depending on project requirements.
            </span>
            <span className="text-blue-300 font-bold bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
              Get a FREE consultation & quote today!
            </span>
          </div>
        </div>

        {/* Interactive Device Mockups Stage */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
              Interactive Live Preview Stage
            </span>
            <p className="text-xs text-slate-400 mt-2">
              Toggle devices and design templates below to experience responsive previews
            </p>
          </div>

          <InteractiveMockupViewer />
        </div>

        {/* Digital Solutions Rocket Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-blue-500/30 shadow-2xl shadow-blue-950/40 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 flex items-center justify-center shrink-0 shadow-xl shadow-blue-500/30 border border-blue-300/40">
            <Rocket className="w-8 h-8 text-white animate-bounce" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-widest mb-1">
              I DON'T JUST BUILD WEBSITES,
            </h3>
            <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">DIGITAL SOLUTIONS</span>
            </p>
            <p className="text-xs sm:text-base text-slate-300 mt-1 max-w-2xl">
              that solve problems, simplify processes, and create amazing user experiences.
            </p>
          </div>
        </div>

        {/* Animated Statistics Counters */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/90 p-6 rounded-2xl text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-white mb-1">
              {projectCount}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Projects Completed</div>
            <div className="text-[11px] text-slate-400 mt-1">Websites, Portals & Web Apps</div>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-white mb-1">
              {clientCount}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Happy Clients</div>
            <div className="text-[11px] text-slate-400 mt-1">Kenya & International</div>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-white mb-1">
              {expYears}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Years Experience</div>
            <div className="text-[11px] text-slate-400 mt-1">Full-Stack Development</div>
          </div>

          <div className="bg-slate-900/90 p-6 rounded-2xl text-center border border-slate-800 hover:border-slate-700 transition-all">
            <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 mb-1">
              99.9%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">Client Satisfaction</div>
            <div className="text-[11px] text-slate-400 mt-1">5-Star Verified Reviews</div>
          </div>
        </div>

      </div>
    </section>
  );
};

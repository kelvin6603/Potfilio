import React, { useState } from 'react';
import { Laptop, Tablet, Smartphone, ExternalLink, ShieldCheck, Zap, Globe, ShoppingBag, Home, Activity, GraduationCap } from 'lucide-react';

export const InteractiveMockupViewer: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'laptop' | 'tablet' | 'mobile'>('laptop');
  const [activePreset, setActivePreset] = useState<'ecommerce' | 'saas' | 'realestate' | 'healthcare'>('ecommerce');

  const presets = [
    {
      id: 'ecommerce',
      name: 'E-Commerce Store',
      tag: 'Shopify / React',
      icon: ShoppingBag,
      headerTitle: 'VELVET & CO. | Luxury Fashion',
      bannerText: 'Summer Luxury Collection 2026 - 20% Off With Code KELVIN20',
      bgColor: 'from-slate-950/80 via-slate-900 to-slate-950',
      accentColor: 'text-slate-400',
      badge: 'M-Pesa STK Push Active',
      heroTitle: 'Elegance Redefined',
      heroSubtitle: 'Handcrafted luxury apparel delivered globally with instant checkout.',
      buttonText: 'Shop New Arrivals',
      items: [
        { title: 'Silk Blazer', price: '$240', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=300&q=80' },
        { title: 'Luxury Timepiece', price: '$580', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
        { title: 'Italian Leather Bag', price: '$390', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=300&q=80' }
      ]
    },
    {
      id: 'saas',
      name: 'SaaS Analytics',
      tag: 'Next.js / Node',
      icon: Zap,
      headerTitle: 'PAYPULSE | Financial Metrics',
      bannerText: 'Real-Time MRR & Subscription Growth Monitoring',
      bgColor: 'from-blue-950/80 via-slate-900 to-slate-950',
      accentColor: 'text-blue-400',
      badge: '99.99% Uptime',
      heroTitle: 'Revenue Intelligence',
      heroSubtitle: 'Track your subscriptions, cohort retention, and cashflow in real time.',
      buttonText: 'Launch Dashboard',
      items: [
        { title: 'Monthly Revenue', price: '$84,920', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80' },
        { title: 'Active Subscribers', price: '12,450', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80' },
        { title: 'Conversion Rate', price: '4.85%', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=300&q=80' }
      ]
    },
    {
      id: 'realestate',
      name: 'Real Estate Platform',
      tag: 'React / Mapbox',
      icon: Home,
      headerTitle: 'APEX ESTATES | High-End Living',
      bannerText: 'Explore Prime Properties in Nairobi & Coast Region',
      bgColor: 'from-amber-950/60 via-slate-900 to-slate-950',
      accentColor: 'text-amber-400',
      badge: '3D Virtual Tours',
      heroTitle: 'Find Your Dream Estate',
      heroSubtitle: 'Curated luxury villas, penthouse suites, and oceanfront retreats.',
      buttonText: 'Explore Listings',
      items: [
        { title: 'Karen Villa Suite', price: '$850,000', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=300&q=80' },
        { title: 'Westlands Penthouse', price: '$420,000', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80' },
        { title: 'Vipingo Ocean Retreat', price: '$1,200,000', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=300&q=80' }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare Portal',
      tag: 'React / PostgreSQL',
      icon: Activity,
      headerTitle: 'MEDICARE | Specialist Clinic',
      bannerText: 'Online Doctor Appointments & Electronic Health Records',
      bgColor: 'from-teal-950/70 via-slate-900 to-slate-950',
      accentColor: 'text-teal-300',
      badge: 'HIPAA Encrypted',
      heroTitle: 'Healthcare Simplified',
      heroSubtitle: 'Book certified specialists, view lab results, and receive prescriptions.',
      buttonText: 'Book Appointment',
      items: [
        { title: 'Cardiology Center', price: 'Available Today', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=300&q=80' },
        { title: 'Teleconsultation', price: 'Instant Call', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80' },
        { title: 'Diagnostics Lab', price: '24hr Results', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=300&q=80' }
      ]
    }
  ];

  const currentPreset = presets.find(p => p.id === activePreset) || presets[0];

  return (
    <div className="w-full space-y-6">
      
      {/* Device & Preset Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl glass-card border border-slate-800">
        
        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-1.5">
          {presets.map((p) => {
            const Icon = p.icon;
            const isSelected = p.id === activePreset;
            return (
              <button
                key={p.id}
                onClick={() => setActivePreset(p.id as any)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-500 to-slate-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Device Switcher */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveDevice('laptop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeDevice === 'laptop' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Laptop</span>
          </button>
          <button
            onClick={() => setActiveDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeDevice === 'tablet' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setActiveDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeDevice === 'mobile' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Phone</span>
          </button>
        </div>

      </div>

      {/* Realistic Device Stage Display */}
      <div className="relative flex justify-center items-center py-4">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-500/10 to-pink-500/10 blur-3xl -z-10 rounded-full"></div>

        {/* LAPTOP FRAME */}
        {activeDevice === 'laptop' && (
          <div className="w-full max-w-4xl animate-in zoom-in-95 duration-300">
            {/* Laptop Screen Top */}
            <div className="bg-[#0f172a] rounded-t-2xl p-2 sm:p-3 border-t border-x border-slate-700/80 shadow-2xl">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex-1 max-w-md mx-4 bg-slate-900 border border-slate-800 rounded-lg px-3 py-1 text-[11px] text-slate-400 flex items-center gap-2 justify-center">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span className="truncate">https://{currentPreset.id}.kelvinmuriuki.dev</span>
                </div>
                <div className="text-[10px] font-semibold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                  {currentPreset.badge}
                </div>
              </div>

              {/* Screen Content View */}
              <div className={`rounded-xl overflow-hidden bg-gradient-to-br ${currentPreset.bgColor} border border-slate-800 p-4 sm:p-8 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between transition-all duration-500 relative`}>
                
                {/* Simulated Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <span className="font-bold text-sm tracking-wide text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                    {currentPreset.headerTitle}
                  </span>
                  <div className="hidden sm:flex items-center gap-4 text-xs text-slate-300 font-medium">
                    <span>Products</span>
                    <span>Solutions</span>
                    <span>About Us</span>
                    <span className={`px-3 py-1 rounded-full bg-white/10 ${currentPreset.accentColor} font-semibold`}>
                      Live Demo
                    </span>
                  </div>
                </div>

                {/* Simulated Hero */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-auto py-2">
                  <div className="space-y-3 text-left">
                    <span className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 ${currentPreset.accentColor}`}>
                      {currentPreset.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {currentPreset.heroTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentPreset.heroSubtitle}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-slate-600 text-white font-semibold text-xs shadow-lg">
                        {currentPreset.buttonText}
                      </button>
                      <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10">
                        Learn More
                      </button>
                    </div>
                  </div>

                  {/* Cards Gallery */}
                  <div className="grid grid-cols-3 gap-2">
                    {currentPreset.items.map((item, idx) => (
                      <div key={idx} className="bg-slate-900/80 rounded-xl p-2 border border-slate-800 space-y-1.5 hover:border-blue-500/50 transition-all">
                        <img src={item.img} alt={item.title} className="w-full h-20 object-cover rounded-lg" referrerPolicy="no-referrer" />
                        <div className="text-[10px] font-bold text-white truncate">{item.title}</div>
                        <div className={`text-[10px] font-semibold ${currentPreset.accentColor}`}>{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Footer status */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Design & Developed by Kelvin Muriuki</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Zap className="w-3 h-3" /> PageSpeed 99/100
                  </span>
                </div>

              </div>

            </div>

            {/* Laptop Base Bottom Stand */}
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 h-4 rounded-b-xl border-x border-b border-slate-600 flex justify-center items-center relative shadow-xl">
              <div className="w-20 h-1.5 bg-slate-900 rounded-b-md"></div>
            </div>
          </div>
        )}

        {/* TABLET FRAME */}
        {activeDevice === 'tablet' && (
          <div className="w-full max-w-xl animate-in zoom-in-95 duration-300">
            <div className="bg-[#0f172a] p-4 rounded-3xl border-4 border-slate-700 shadow-2xl relative">
              <div className="w-3 h-3 rounded-full bg-slate-800 mx-auto mb-2"></div>
              
              <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${currentPreset.bgColor} border border-slate-800 p-5 min-h-[380px] flex flex-col justify-between`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-bold text-xs text-white">{currentPreset.headerTitle}</span>
                  <span className="text-[10px] text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
                    Tablet Mode
                  </span>
                </div>

                <div className="space-y-3 py-4 text-left">
                  <h3 className="text-xl font-bold text-white">{currentPreset.heroTitle}</h3>
                  <p className="text-xs text-slate-300">{currentPreset.heroSubtitle}</p>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {currentPreset.items.map((item, idx) => (
                      <div key={idx} className="bg-slate-900/90 rounded-xl p-2 border border-slate-800">
                        <img src={item.img} alt={item.title} className="w-full h-16 object-cover rounded-lg" referrerPolicy="no-referrer" />
                        <div className="text-[10px] font-bold text-white truncate mt-1">{item.title}</div>
                        <div className={`text-[10px] ${currentPreset.accentColor}`}>{item.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-white/10 pt-2">
                  <span>Fluid Responsive Layout</span>
                  <span className="text-emerald-400 font-semibold">100% Mobile Optimized</span>
                </div>
              </div>

              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        )}

        {/* MOBILE FRAME */}
        {activeDevice === 'mobile' && (
          <div className="w-full max-w-xs animate-in zoom-in-95 duration-300">
            <div className="bg-[#0f172a] p-3 rounded-[36px] border-4 border-slate-700 shadow-2xl relative">
              {/* Notch */}
              <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto mb-2 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-800"></div>
              </div>

              <div className={`rounded-[24px] overflow-hidden bg-gradient-to-br ${currentPreset.bgColor} border border-slate-800 p-4 min-h-[420px] flex flex-col justify-between`}>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="font-extrabold text-xs text-white tracking-wider">{currentPreset.headerTitle.split('|')[0]}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>

                  <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-white/10 ${currentPreset.accentColor}`}>
                    {currentPreset.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white leading-tight">
                    {currentPreset.heroTitle}
                  </h3>

                  <p className="text-[11px] text-slate-300">
                    {currentPreset.heroSubtitle}
                  </p>

                  <button className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-slate-600 text-white font-bold text-xs shadow-md">
                    {currentPreset.buttonText}
                  </button>

                  <div className="space-y-2 pt-2">
                    {currentPreset.items.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                        <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded-lg" referrerPolicy="no-referrer" />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-white">{item.title}</div>
                          <div className={`text-[10px] ${currentPreset.accentColor}`}>{item.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center text-[9px] text-slate-400 pt-2 border-t border-white/10">
                  Touch Friendly • M-Pesa Integration Ready
                </div>

              </div>

              {/* Home indicator bar */}
              <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, Sparkles, CheckCircle2, Building } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800/40 text-xs font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Business Owners <span className="text-gradient">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Read real feedback from directors, business owners, and startup founders who scaled their revenue with Kelvin's web solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-700 group-hover:text-slate-400 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {t.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-slate-400">{t.role}, <strong className="text-slate-300">{t.company}</strong></p>
                    <p className="text-[10px] text-slate-500">{t.location}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-blue-300 bg-blue-950 px-2.5 py-1 rounded-full border border-blue-800/50">
                    {t.projectType}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

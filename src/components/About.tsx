import React from 'react';
import { Sparkles, Code2, Award, Briefcase, Download, CheckCircle2, Terminal, UserCheck } from 'lucide-react';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto items-center">
          
          {/* Bio Story */}
          <div className="space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-semibold text-blue-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Crafting <span className="text-gradient">Digital Experiences</span> That Turn Visitors Into Buyers
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Hello! I’m <strong className="text-white">Kelvin Muriuki</strong>, a passionate Web Designer & Full-Stack Developer with over 5 years of hands-on experience building custom business applications, high-converting e-commerce stores, and enterprise portals.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              I combine sleek, modern UI/UX design (inspired by Awwwards & Framer) with robust full-stack engineering using React, Next.js, Node.js, Laravel, and PostgreSQL. Every single line of code I write is optimized for sub-second page loads, top Google SEO rankings, and seamless M-Pesa / Stripe payment integrations.
            </p>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pixel-Perfect UI/UX Design System</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Sub-1.5s Fast Page Load Speed</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                <span>M-Pesa, Stripe & PayPal Payments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Post-Launch Technical Support</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 via-blue-600 to-slate-600 hover:from-blue-400 hover:to-slate-500 shadow-lg shadow-slate-500/20 cursor-pointer"
              >
                Work With Kelvin
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-xs text-slate-300 glass-card hover:bg-slate-800 hover:text-white border border-slate-700 flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download CV / Resume
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

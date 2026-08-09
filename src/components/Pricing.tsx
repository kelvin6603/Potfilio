import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/portfolioData';
import { Sparkles, Check, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onSelectPlanForQuote: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlanForQuote }) => {
  const [includeMaintenance, setIncludeMaintenance] = useState(false);

  return (
    <section id="pricing" className="py-20 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-glow pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fair, Transparent <span className="text-gradient">Pricing Plans</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            No surprise invoices or hidden charges. Choose a plan or request a custom milestone quote tailored for your business.
          </p>

          {/* Maintenance Add-on Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-medium ${!includeMaintenance ? 'text-white' : 'text-slate-400'}`}>
              One-Time Project Build
            </span>
            <button
              onClick={() => setIncludeMaintenance(!includeMaintenance)}
              className={`w-12 h-6 rounded-full p-1 transition-colors relative cursor-pointer ${
                includeMaintenance ? 'bg-blue-500' : 'bg-slate-800'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  includeMaintenance ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <span className={`text-xs font-medium flex items-center gap-1.5 ${includeMaintenance ? 'text-blue-300' : 'text-slate-400'}`}>
              Include Monthly Tech Maintenance & Security Updates
              <span className="text-[10px] bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-800">
                +KES 4,000/mo
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500/60 shadow-2xl shadow-blue-500/20 lg:-translate-y-2 bg-slate-900/90'
                  : 'border-slate-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-slate-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{plan.idealFor}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">
                    /{plan.period} {includeMaintenance && '+ KES 4,000/mo support'}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed border-b border-slate-800 pb-4">
                  {plan.description}
                </p>

                {/* Feature checklist */}
                <div className="space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Included Features:</span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      {feat.included ? (
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                      )}
                      <span className={feat.included ? 'text-slate-200' : 'text-slate-500 line-through'}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 space-y-2">
                <button
                  onClick={() => onSelectPlanForQuote(plan.name)}
                  className={`w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                    plan.popular
                      ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-lg shadow-emerald-950/20'
                      : 'bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Money Back & Milestone Guarantee */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Milestone & Satisfaction Guarantee</h4>
              <p className="text-xs text-slate-300">You review each design milestone before proceeding to coding. 100% satisfaction guaranteed.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlanForQuote('Custom Package')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400 hover:text-white shrink-0 cursor-pointer"
          >
            Need a Custom Milestone Quote?
          </button>
        </div>

      </div>
    </section>
  );
};

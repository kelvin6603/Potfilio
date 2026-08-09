import React, { useState } from 'react';
import { Gauge, Zap, CheckCircle2, XCircle, RefreshCw, Award, ArrowUpRight } from 'lucide-react';

export const SpeedTestVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kelvin' | 'standard'>('kelvin');

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <Gauge className="w-4 h-4" /> Live Performance Audit
          </div>
          <h3 className="text-xl font-bold text-white mt-1">Google PageSpeed Insights Benchmark</h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('kelvin')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'kelvin' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-400'
            }`}
          >
            ⚡ Kelvin's Build
          </button>
          <button
            onClick={() => setActiveTab('standard')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === 'standard' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-slate-400'
            }`}
          >
            ⚠️ Standard Bloated Site
          </button>
        </div>
      </div>

      {/* Audit Gauge Metrics */}
      {activeTab === 'kelvin' ? (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-emerald-400">99/100</div>
              <div className="text-xs font-bold text-slate-200">Performance</div>
              <div className="text-[10px] text-emerald-400">Optimal Score</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-emerald-400">100/100</div>
              <div className="text-xs font-bold text-slate-200">Accessibility</div>
              <div className="text-[10px] text-emerald-400">WCAG Compliant</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-emerald-400">100/100</div>
              <div className="text-xs font-bold text-slate-200">Best Practices</div>
              <div className="text-[10px] text-emerald-400">Clean Architecture</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-emerald-400">100/100</div>
              <div className="text-xs font-bold text-slate-200">SEO Score</div>
              <div className="text-[10px] text-emerald-400">Google Rank Ready</div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-medium text-slate-300">
              <span>First Contentful Paint (FCP): <strong className="text-emerald-400">0.4s</strong></span>
              <span>Largest Contentful Paint (LCP): <strong className="text-emerald-400">0.8s</strong></span>
              <span>Cumulative Layout Shift: <strong className="text-emerald-400">0.00</strong></span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-400 h-full w-[99%]"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-rose-400">42/100</div>
              <div className="text-xs font-bold text-slate-200">Performance</div>
              <div className="text-[10px] text-rose-400">Slow Loading</div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-amber-400">68/100</div>
              <div className="text-xs font-bold text-slate-200">Accessibility</div>
              <div className="text-[10px] text-amber-400">Warnings Found</div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-amber-400">71/100</div>
              <div className="text-xs font-bold text-slate-200">Best Practices</div>
              <div className="text-[10px] text-amber-400">Unused Plugins</div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-center space-y-1">
              <div className="text-3xl font-extrabold text-rose-400">55/100</div>
              <div className="text-xs font-bold text-slate-200">SEO Score</div>
              <div className="text-[10px] text-rose-400">Missing Metadata</div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-medium text-slate-300">
              <span>First Contentful Paint (FCP): <strong className="text-rose-400">3.8s</strong></span>
              <span>Largest Contentful Paint (LCP): <strong className="text-rose-400">6.2s</strong></span>
              <span>Cumulative Layout Shift: <strong className="text-rose-400">0.42</strong></span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-rose-500 h-full w-[42%]"></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

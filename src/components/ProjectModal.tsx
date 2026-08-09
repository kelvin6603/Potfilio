import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Zap, ShieldCheck, Smartphone, Laptop, Globe, Star } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'preview'>('overview');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-4xl w-full rounded-3xl border border-slate-700 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded border border-blue-800/50">
                {project.category}
              </span>
              <span className="text-xs text-slate-400">• Client: {project.client} ({project.year})</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 px-6 py-2 bg-slate-900/50 border-b border-slate-800 shrink-0 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview' ? 'border-blue-400 text-blue-300 font-bold' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-2 border-b-2 transition-all cursor-pointer ${
              activeTab === 'preview' ? 'border-blue-400 text-blue-300 font-bold' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Interactive Simulator
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {activeTab === 'overview' ? (
            <>
              {/* Project Image Header */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 group h-64 sm:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-slate-200 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveTab('preview')}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-slate-600 shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Try Simulator</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-gradient-blue">{metric.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Project Description & Design Highlights */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{project.fullDescription || project.fullDesc}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/30 border border-slate-800/40 space-y-1">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Design & UI Strategy</h4>
                  <p className="text-xs text-slate-300">{project.designHighlight}</p>
                </div>

                {/* Core Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">Key Functionality & Modules</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* SIMULATOR TAB */
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-900 p-2 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-300 font-medium px-2">Simulated Viewport</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                      deviceMode === 'desktop' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-slate-400'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" /> Desktop
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                      deviceMode === 'mobile' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' : 'text-slate-400'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Mobile
                  </button>
                </div>
              </div>

              <div className={`mx-auto transition-all duration-300 ${deviceMode === 'mobile' ? 'max-w-xs' : 'w-full'}`}>
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-3 shadow-2xl">
                  
                  {/* Browser top */}
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <div className="flex gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    </div>
                    <div className="flex-1 bg-slate-950 px-2 py-0.5 rounded text-center truncate">
                      https://{project.id}.demo.kelvinmuriuki.dev
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-950 min-h-[340px] border border-slate-800 flex flex-col justify-between">
                    <img
                      src={deviceMode === 'mobile' ? project.mobileImage : project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-left">
                      <h5 className="text-sm font-bold text-white">{project.title}</h5>
                      <p className="text-xs text-slate-400 mt-0.5">{project.shortDesc}</p>
                      <div className="flex items-center justify-between text-[11px] text-emerald-400 pt-2 font-semibold">
                        <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> PageSpeed: 99/100</span>
                        <span>M-Pesa / Card Gateway Active</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400">
            Impressed by this project? <span className="text-white font-semibold">Kelvin can build a similar platform for your business.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-400 hover:to-slate-500 shadow-md shadow-slate-500/20 cursor-pointer"
          >
            Request a Project Like This
          </button>
        </div>

      </div>
    </div>
  );
};

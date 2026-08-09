import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { Sparkles, ArrowRight, ExternalLink, Code2, Eye, TrendingUp, Check } from 'lucide-react';

interface PortfolioProps {
  onOpenQuoteModal: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'E-commerce', 'Web Apps', 'SaaS', 'Real Estate', 'Healthcare', 'Education'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-800/40 text-xs font-semibold text-slate-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Case Studies & Previews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted With <span className="text-gradient">Precision</span> & Innovation
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore a selection of recent web platforms, custom applications, and e-commerce stores designed for high performance and business impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-slate-600 text-white shadow-lg shadow-blue-500/20'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Overlay */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700/80 text-[10px] font-bold text-blue-300">
                    {project.category}
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-xs">
                    <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-slate-600 text-white font-bold text-xs shadow-xl flex items-center gap-2">
                      <Eye className="w-4 h-4" /> View Full Case Study
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Key Metric highlight */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-blue-300 font-semibold">
                    <TrendingUp className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{project.metrics[0].label}: {project.metrics[0].value}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-medium text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-medium text-slate-500 bg-slate-900 px-2 py-1 rounded-md border border-slate-800">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="w-full py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 group-hover:bg-slate-800 group-hover:text-white transition-all">
                  <span>Explore Interactive Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-2xl font-extrabold text-white">Have a Unique Web Project in Mind?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Whether you need a full custom e-commerce portal, a SaaS platform, or a school management system, Kelvin brings your exact vision to life.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 via-blue-600 to-slate-600 hover:scale-105 transition-all shadow-xl shadow-slate-500/20 shrink-0 cursor-pointer"
          >
            Request Custom Build Quote
          </button>
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuoteModal}
      />

    </section>
  );
};

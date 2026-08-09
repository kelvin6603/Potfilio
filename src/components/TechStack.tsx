import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { TechItem } from '../types';
import { 
  Code2, Terminal, Database, GitBranch, Sparkles, 
  Search, CheckCircle2, Cpu, Zap, Layers 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

  const filteredTech = TECH_STACK.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech" className="py-20 relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-xs font-semibold text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Development Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Powered By <span className="text-gradient">Cutting-Edge</span> Tech
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            I leverage battle-tested modern frameworks, robust backend APIs, and cloud databases to build scalable, high-speed applications.
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-4 rounded-2xl border border-slate-800">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-slate-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                    <Code2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-extrabold text-blue-300 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/50">
                    {item.experience}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skill Proficiency Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <div className="flex justify-between text-[11px] font-medium text-slate-300">
                  <span>Proficiency</span>
                  <span className="text-blue-400 font-bold">{item.level}</span>
                </div>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-slate-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: item.level }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

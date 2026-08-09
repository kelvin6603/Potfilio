import React, { useState } from 'react';
import { 
  Code2, Send, ArrowUp, Github, Linkedin, Twitter, 
  Dribbble, MessageSquare, Instagram, Heart, CheckCircle2, Facebook 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial-glow opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Newsletter & Brand Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          
          <div className="lg:col-span-6 space-y-3">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-slate-600 p-[1px]">
                <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">
                Kelvin <span className="text-gradient">Muriuki</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              High-performance web designer & full-stack developer based in Nairobi, Kenya. Crafting award-winning web platforms that drive business growth worldwide.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 glass-card p-6 rounded-3xl border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white">Subscribe to Tech & Web Design Insights</h4>
            <p className="text-xs text-slate-400">Receive actionable tips on web speed optimization, SEO trends, and UI design.</p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 p-3 rounded-xl border border-emerald-800/60">
                <CheckCircle2 className="w-4 h-4" /> You're subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 to-slate-600 hover:from-blue-400 hover:to-slate-500 shadow-md shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Links & Socials Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs text-slate-400">
          
          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-white">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Kelvin</a></li>
              <li><a href="#why-me" className="hover:text-blue-400 transition-colors">Why Choose Me</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-white">Solutions</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">E-Commerce Stores</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">School Systems</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Healthcare Systems</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Real Estate Platforms</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-white">Tech Stack</h5>
            <ul className="space-y-2">
              <li><a href="#tech" className="hover:text-blue-400 transition-colors">React & Next.js</a></li>
              <li><a href="#tech" className="hover:text-blue-400 transition-colors">Tailwind CSS</a></li>
              <li><a href="#tech" className="hover:text-blue-400 transition-colors">Node.js & Express</a></li>
              <li><a href="#tech" className="hover:text-blue-400 transition-colors">PHP & Laravel</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold uppercase tracking-wider text-white">Connect</h5>
            <div className="flex flex-wrap gap-2 pt-1">
              <a href="https://facebook.com/search/top?q=Kelvin%20Muriuki" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 hover:text-white hover:border-blue-500 transition-all" title="Facebook: Kelvin Muriuki">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/254703393804" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:border-emerald-500 transition-all" title="WhatsApp: 0703393804">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kelvin Muriuki. All Rights Reserved. Built with React & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-all cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

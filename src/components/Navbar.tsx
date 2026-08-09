import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['services', 'portfolio', 'about', 'why-me', 'tech', 'pricing', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 border border-blue-400/50 flex items-center justify-center font-black text-white text-base tracking-tighter shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              KM
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-white uppercase block leading-tight">
                KELVIN MURIUKI
              </span>
              <span className="text-[10px] text-blue-400 tracking-widest font-extrabold block uppercase">
                WEB DESIGNER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-800 text-white font-semibold border border-slate-700'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Status */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-400 text-slate-950"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Accepting New Clients
            </div>
            <a href="tel:+254703393804" className="text-xs text-slate-400 flex items-center gap-1 hover:text-blue-400">
              <PhoneCall className="w-3 h-3" /> 0703393804
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Get Instant Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

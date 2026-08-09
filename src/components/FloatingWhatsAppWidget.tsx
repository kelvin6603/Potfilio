import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const handleSend = () => {
    const text = quickMsg || 'Hi Kelvin! I saw your portfolio and would like a quote for a new website.';
    const url = `https://wa.me/254703393804?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 glass-card w-80 rounded-3xl p-5 border border-emerald-500/40 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
                  KM
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 absolute bottom-0 right-0 animate-pulse"></span>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Kelvin Muriuki</div>
                <div className="text-[10px] text-emerald-400 font-medium">Online • Replies instantly</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-2xl border border-slate-800 text-xs text-slate-200 leading-relaxed">
            👋 Hi there! Looking for a fast, modern business website, e-commerce store, or custom app? Type a message below or click to chat.
          </div>

          <div className="space-y-2">
            <input
              type="text"
              placeholder="Type your project idea..."
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={handleSend}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-slate-950 text-[9px] font-bold flex items-center justify-center animate-bounce">
          1
        </span>
        <MessageSquare className="w-6 h-6" />
      </button>

    </div>
  );
};

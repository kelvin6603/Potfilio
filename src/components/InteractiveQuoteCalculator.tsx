import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, Sparkles, CheckCircle2, ArrowRight, X, Send, 
  MessageSquare, DollarSign, Clock, ShieldCheck, Check
} from 'lucide-react';

interface QuoteCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const InteractiveQuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [projectType, setProjectType] = useState<string>(preselectedService || 'Business Website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Mobile Responsive Layout',
    'Basic SEO Setup'
  ]);
  const [timeline, setTimeline] = useState<string>('Standard (10-14 Days)');
  const [designStyle, setDesignStyle] = useState<string>('Dark Luxury Glassmorphism');

  // Contact fields
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setProjectType(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const projectTypes = [
    { name: 'Business Website', baseMin: 35000, baseMax: 50000 },
    { name: 'E-commerce Store', baseMin: 60000, baseMax: 90000 },
    { name: 'Portfolio Website', baseMin: 25000, baseMax: 40000 },
    { name: 'School System', baseMin: 80000, baseMax: 120000 },
    { name: 'Healthcare System', baseMin: 95000, baseMax: 150000 },
    { name: 'Real Estate Website', baseMin: 55000, baseMax: 85000 },
    { name: 'Hotel & Booking Website', baseMin: 50000, baseMax: 80000 },
    { name: 'SaaS Platform', baseMin: 120000, baseMax: 200000 },
    { name: 'Custom Web Application', baseMin: 75000, baseMax: 140000 }
  ];

  const availableFeatures = [
    { name: 'M-Pesa STK Push / Card Payment Gateway', cost: 12000 },
    { name: 'Custom Admin Dashboard & User Analytics', cost: 15000 },
    { name: 'SMS & WhatsApp Automated Alerts', cost: 8000 },
    { name: 'Multi-Currency & Multi-Language Support', cost: 9000 },
    { name: 'Content Writing & Logo Branding Package', cost: 10000 },
    { name: 'Advanced SEO & Google Search Indexing', cost: 7000 },
    { name: 'Interactive 3D / Parallax Animations', cost: 11000 }
  ];

  const timelines = [
    { name: 'Express Rush (3-5 Days)', multiplier: 1.25 },
    { name: 'Standard (10-14 Days)', multiplier: 1.0 },
    { name: 'Flexible (20-30 Days)', multiplier: 0.95 }
  ];

  const currentType = projectTypes.find(p => p.name === projectType) || projectTypes[0];

  // Calculate total min & max cost
  const featuresAddonCost = availableFeatures
    .filter(f => selectedFeatures.includes(f.name))
    .reduce((sum, f) => sum + f.cost, 0);

  const selectedTimelineObj = timelines.find(t => t.name === timeline) || timelines[1];

  const minTotal = Math.round((currentType.baseMin + featuresAddonCost) * selectedTimelineObj.multiplier);
  const maxTotal = Math.round((currentType.baseMax + featuresAddonCost) * selectedTimelineObj.multiplier);

  const toggleFeature = (featureName: string) => {
    if (selectedFeatures.includes(featureName)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== featureName));
    } else {
      setSelectedFeatures([...selectedFeatures, featureName]);
    }
  };

  const handleSendWhatsApp = () => {
    const text = `Hi Kelvin! I calculated a project quote on your website:
- Project Type: ${projectType}
- Selected Features: ${selectedFeatures.join(', ')}
- Design Style: ${designStyle}
- Timeline: ${timeline}
- Estimated Cost: KES ${minTotal.toLocaleString()} - KES ${maxTotal.toLocaleString()}
- My Name: ${clientName || 'Client'}
- Email: ${clientEmail || 'N/A'}
- Phone: ${clientPhone || 'N/A'}
- Notes: ${message || 'Looking forward to discussing.'}`;

    const url = `https://wa.me/254703393804?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    triggerConfetti();
    setSubmitted(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    triggerConfetti();
    setSubmitted(true);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-3xl w-full rounded-3xl border border-slate-700 shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-slate-600 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Instant Project Cost Calculator</h3>
              <p className="text-xs text-slate-400">Configure your scope & get a transparent instant quote range</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h4 className="text-2xl font-bold text-white">Quote Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{clientName || 'valued client'}</strong>. Kelvin Muriuki will review your scope (KES {minTotal.toLocaleString()} - KES {maxTotal.toLocaleString()}) and reach out via WhatsApp/Email within 2 hours.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 to-slate-600"
              >
                Close Calculator
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  1. Select Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type.name}
                      onClick={() => setProjectType(type.name)}
                      className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                        projectType === type.name
                          ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="truncate">{type.name}</div>
                      <div className="text-[10px] text-slate-400 font-normal">from KES {type.baseMin.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Add-on Features */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Select Desired Features & Modules
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableFeatures.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.name);
                    return (
                      <button
                        key={feat.name}
                        onClick={() => toggleFeature(feat.name)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-950/40 border-slate-500/60 text-slate-200'
                            : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-slate-500 border-slate-400 text-white' : 'border-slate-700'}`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span className="truncate">{feat.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-semibold shrink-0">+KES {feat.cost.toLocaleString()}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline & Design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    3. Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    {timelines.map((t) => (
                      <option key={t.name} value={t.name}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    4. Preferred Design Style
                  </label>
                  <select
                    value={designStyle}
                    onChange={(e) => setDesignStyle(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-slate-500"
                  >
                    <option value="Dark Luxury Glassmorphism">Dark Luxury Glassmorphism</option>
                    <option value="Modern Minimalist Clean">Modern Minimalist Clean</option>
                    <option value="Corporate Professional">Corporate Professional</option>
                  </select>
                </div>
              </div>

              {/* Live Price Estimation Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Estimated Investment Range</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    KES {minTotal.toLocaleString()} – KES {maxTotal.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Includes SSL setup, mobile optimization, & launch deployment</div>
                </div>

                <div className="text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-800/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> 100% Milestone Guarantee
                </div>
              </div>

              {/* Contact Information Form */}
              <form onSubmit={handleSubmitForm} className="space-y-4 pt-2 border-t border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Submit Quote Request directly to Kelvin:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Phone Number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <textarea
                  placeholder="Additional project notes, reference websites, or special features..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={2}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                ></textarea>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 py-3 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" /> Send via WhatsApp
                  </button>

                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/20"
                  >
                    <Send className="w-4 h-4" /> Submit Quote Request
                  </button>
                </div>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

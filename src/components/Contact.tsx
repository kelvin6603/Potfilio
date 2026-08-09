import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  MessageSquare, Mail, Phone, MapPin, Send, 
  Calendar, CheckCircle2, Clock, Sparkles, Globe, ShieldCheck, Facebook, QrCode, User
} from 'lucide-react';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Business Website');
  const [budget, setBudget] = useState(35000);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}
    setSubmitted(true);
  };

  const openWhatsAppDirect = () => {
    const text = `Hi Kelvin! I'm interested in starting a project:
- Name: ${name || 'Interested Client'}
- Service: ${service}
- Budget: ~KES ${budget.toLocaleString()}
- Notes: ${message || 'I would like to discuss a new website build.'}`;

    const url = `https://wa.me/254703393804?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-bold text-blue-300">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="uppercase tracking-widest text-[11px]">LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            LET'S BUILD SOMETHING <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-slate-400 bg-clip-text text-transparent">
              AMAZING TOGETHER!
            </span>
          </h2>
          <p className="text-base sm:text-xl text-blue-200 font-semibold tracking-wide">
            Your vision. My design. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Google Map Mockup */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800/60">
                  Instant Response
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Direct WhatsApp Chat</h3>
                <p className="text-xs text-slate-300 mt-1">Get immediate answers and project consultations in real time.</p>
              </div>

              <button
                onClick={openWhatsAppDirect}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> Start WhatsApp Chat Now
              </button>
            </div>

            {/* Email & Phone Details */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Email Directly</div>
                  <a href="mailto:kelvinmuriuki9701@gmail.com" className="text-xs font-semibold text-white hover:text-blue-400 truncate block">
                    kelvinmuriuki9701@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-500/20 border border-slate-500/40 text-slate-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Phone / Call</div>
                  <a href="tel:+254703393804" className="text-xs font-semibold text-white hover:text-slate-400 block">
                    0703393804 / +254 703 393 804
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Facebook Profile</div>
                  <a href="https://facebook.com/search/top?q=Kelvin%20Muriuki" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-white hover:text-blue-400 block">
                    Kelvin Muriuki
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Schedule a Meeting</div>
                  <button
                    onClick={() => setShowMeetingModal(true)}
                    className="text-xs font-semibold text-blue-400 hover:underline cursor-pointer"
                  >
                    Book a 15-Min Strategy Call
                  </button>
                </div>
              </div>

            </div>

            {/* QR Code Connect Badge Card (From Poster Flyer) */}
            <div className="glass-card p-5 rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase text-blue-300 tracking-wider">
                  <User className="w-3.5 h-3.5 text-blue-400" /> Kelvin Muriuki
                </div>
                <div className="text-xs font-bold text-white">0703393804</div>
                <div className="text-[11px] text-slate-300 truncate max-w-[180px] sm:max-w-[220px]">kelvinmuriuki9701@gmail.com</div>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest pt-1">
                  Let's Connect!
                </div>
              </div>

              {/* QR Code Graphic Box */}
              <div className="w-24 h-24 rounded-2xl bg-white p-2 flex flex-col items-center justify-center shrink-0 border-2 border-blue-400 shadow-lg shadow-blue-500/20">
                <QrCode className="w-16 h-16 text-slate-950" />
                <span className="text-[9px] font-black text-slate-950 uppercase tracking-tighter mt-0.5">SCAN ME</span>
              </div>
            </div>

            {/* Google Map Visual Mockup */}
            <div className="glass-card p-4 rounded-3xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> Based in Nairobi, Kenya</span>
                <span className="text-blue-400 font-semibold flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Global Remote</span>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative h-40 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                  alt="Nairobi Kenya Location"
                  className="w-full h-full object-cover filter brightness-75 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40"></div>
                
                <div className="relative z-10 px-4 py-2 glass-card rounded-xl border border-blue-500/50 text-center space-y-0.5">
                  <div className="text-xs font-extrabold text-white flex items-center gap-1.5 justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Kelvin Muriuki Studio
                  </div>
                  <div className="text-[10px] text-slate-300">Nairobi, East Africa & Remote Worldwide</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white">Send Kelvin a Direct Message</h3>
                <p className="text-xs text-slate-400 mt-1">Fill out your project goals and receive a detailed reply within 2 hours.</p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Delivered!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you <strong className="text-white">{name}</strong>. Kelvin has received your inquiry for a <strong className="text-blue-300">{service}</strong> and will email you shortly at <span className="text-slate-200">{email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Mwangi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+254 700 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Service Category</label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="E-commerce Store">E-commerce Store</option>
                        <option value="Portfolio Website">Portfolio Website</option>
                        <option value="School System">School System</option>
                        <option value="Healthcare System">Healthcare System</option>
                        <option value="Real Estate Website">Real Estate Website</option>
                        <option value="Hotel & Booking Website">Hotel & Booking Website</option>
                        <option value="SaaS Platform">SaaS Platform</option>
                        <option value="Custom Web Application">Custom Web Application</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Budget Slider */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">Target Budget Range:</span>
                      <span className="text-blue-400">KES {budget.toLocaleString()} - KES {(budget + 30000).toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="25000"
                      max="200000"
                      step="5000"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full accent-blue-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>KES 25,000 (Basic)</span>
                      <span>KES 100,000 (Pro)</span>
                      <span>KES 200,000+ (Enterprise)</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Project Description / Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Kelvin about your business, target audience, preferred deadline, and any specific feature requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Schedule Call Modal Popup */}
      {showMeetingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-card max-w-md w-full rounded-3xl p-6 border border-slate-700 shadow-2xl relative space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" /> Book 15-Min Strategy Call
              </h4>
              <button onClick={() => setShowMeetingModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Select a convenient time slot to discuss your project scope directly with Kelvin Muriuki via Google Meet or Phone Call.
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex justify-between items-center cursor-pointer hover:border-blue-500">
                <span>Tomorrow at 10:00 AM (EAT)</span>
                <span className="text-blue-400 font-semibold">Available</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex justify-between items-center cursor-pointer hover:border-blue-500">
                <span>Tomorrow at 3:00 PM (EAT)</span>
                <span className="text-blue-400 font-semibold">Available</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex justify-between items-center cursor-pointer hover:border-blue-500">
                <span>Friday at 11:30 AM (EAT)</span>
                <span className="text-blue-400 font-semibold">Available</span>
              </div>
            </div>

            <button
              onClick={() => {
                setShowMeetingModal(false);
                openWhatsAppDirect();
              }}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-500 to-slate-600"
            >
              Confirm Meeting on WhatsApp
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

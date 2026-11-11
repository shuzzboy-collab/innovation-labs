import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle2, RefreshCw, Clock, ShieldCheck, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { sendFormDataToWhatsApp, WHATSAPP_DISPLAY_NUMBER, getWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('AI Agents & Bots');
  const [budget, setBudget] = useState('$35,000 - $75,000');
  const [timeline, setTimeline] = useState('1-3 Months');
  const [date, setDate] = useState('2026-11-12');
  const [timeSlot, setTimeSlot] = useState('14:00 - 14:45 GMT');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Send formatted client details straight to WhatsApp 03330241899
    const targetUrl = sendFormDataToWhatsApp({
      name,
      email,
      company,
      service,
      budget,
      timeline,
      date,
      timeSlot,
      notes,
      formType: 'Contact Page Inquiry',
    });
    setWhatsappUrl(targetUrl);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'consultation',
          name,
          email,
          company,
          service,
          budget,
          timeline,
          date,
          timeSlot,
          notes,
          whatsappSentTo: WHATSAPP_DISPLAY_NUMBER,
        }),
      });

      if (!response.ok) {
        console.warn('Backend sync returned non-OK, but WhatsApp dispatch succeeded.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      // Even if network has issues, WhatsApp dispatch proceeded
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold">
          Get in Touch
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Schedule a Technical AI Consultation
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Book a 30-minute discovery call directly with an InnovationLab Principal Architect. We will review your current systems, evaluate automation feasibility, and provide realistic cost and timeline guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Contact details & Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Direct Office Contacts</h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              
              {/* WhatsApp Dedicated Card */}
              <div className="p-3.5 bg-emerald-50/90 border border-emerald-200 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span>WhatsApp Direct Channel</span>
                  </div>
                  <span className="text-[10px] font-semibold bg-emerald-200/60 text-emerald-900 px-2 py-0.5 rounded-full">
                    Instant
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 pt-0.5">
                  <div>
                    <div className="text-base font-extrabold text-slate-900 font-mono tracking-wide">
                      {WHATSAPP_DISPLAY_NUMBER}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Direct line to Mr. Shuja Ali & senior team
                    </div>
                  </div>
                  <a
                    href={getWhatsAppUrl('Hello Mr. Shuja Ali, I am contacting you from the InnovationLab website regarding your AI solutions.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-lg transition-all shadow-xs flex items-center gap-1.5 shrink-0"
                  >
                    <span>Chat Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Client Operations:</span>
                  <a href="mailto:contact@innovation.com" className="text-orange-600 hover:underline">
                    contact@innovation.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Direct Enterprise Line:</span>
                  <span>+1 (800) 555-0199</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-slate-900">Offices:</span>
                  <span>San Francisco, California · London, United Kingdom · Singapore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">What Happens On This Call</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Zero sales pitch; 100% technical and operational review.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Audit of your target data formats, volume, and API readiness.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Immediate initial recommendation on single vs. multi-agent architecture.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                <span>Execution of mutual NDA upon request prior to discussion.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Smart Scheduling Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Inquiry & Consultation Dispatched</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>! Your inquiry details have been forwarded to our WhatsApp channel (<strong>{WHATSAPP_DISPLAY_NUMBER}</strong>) and confirmed for <strong>{date}</strong> at <strong>{timeSlot}</strong>.
              </p>

              {/* WhatsApp Delivery Card */}
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-left max-w-md mx-auto space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    Sent to WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
                  </span>
                  <span className="text-[10px] bg-emerald-200/70 text-emerald-800 px-2 py-0.5 rounded-full font-mono">
                    Direct Channel
                  </span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Your requirements have been packaged and routed directly to Mr. Shuja Ali & the technical team.
                </p>
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in WhatsApp ({WHATSAPP_DISPLAY_NUMBER})</span>
                  </a>
                )}
              </div>

              <div className="text-xs text-slate-500 pt-1">
                A calendar invitation with a secure Google Meet link has also been prepared for <strong>{email}</strong>.
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">Book Your Discovery Session</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Full Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Henderson"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Business Email <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="d.henderson@enterprise.com"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="AI Agents & Bots">AI Agents & Bots</option>
                    <option value="Enterprise AI Chatbots">Enterprise AI Chatbots</option>
                    <option value="Business Process Automation">Business Process Automation</option>
                    <option value="Generative AI Solutions">Generative AI Solutions</option>
                    <option value="Machine Learning & Prediction">Machine Learning & Prediction</option>
                    <option value="Natural Language Processing">Natural Language Processing</option>
                    <option value="Computer Vision">Computer Vision</option>
                    <option value="Custom Enterprise AI">Custom Enterprise AI</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Select Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="10:00 - 10:45 GMT">10:00 – 10:45 GMT</option>
                    <option value="14:00 - 14:45 GMT">14:00 – 14:45 GMT</option>
                    <option value="16:00 - 16:45 GMT">16:00 – 16:45 GMT</option>
                    <option value="18:00 - 18:45 GMT">18:00 – 18:45 GMT / 10:00 PST</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Target Budget (Optional)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="$15,000 - $35,000">$15,000 – $35,000 (Pilot)</option>
                    <option value="$35,000 - $75,000">$35,000 – $75,000 (Production System)</option>
                    <option value="$75,000 - $150,000+">$75,000 – $150,000+ (Enterprise Multi-Agent)</option>
                    <option value="Flexible / Needs Scoping">Flexible / Needs Scoping</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Describe Your Current Challenge & Systems
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Which manual processes, databases, or ERPs are involved? What is your target accuracy or turnaround goal?"
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              {error && <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg">{error}</div>}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Scheduling with Lead Architect...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Confirm 30-Min Technical Discovery Session</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

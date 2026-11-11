import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle2, RefreshCw, ShieldCheck, Video, Building2, Mail, User, MessageSquare, ExternalLink } from 'lucide-react';
import { sendFormDataToWhatsApp, WHATSAPP_DISPLAY_NUMBER, getWhatsAppUrl } from '../utils/whatsapp';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialNotes?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'AI Agents & Bots',
  initialNotes = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState('$35,000 - $75,000');
  const [timeline, setTimeline] = useState('1-3 Months');
  const [date, setDate] = useState('2026-11-12');
  const [timeSlot, setTimeSlot] = useState('14:00 - 14:45 GMT');
  const [notes, setNotes] = useState(initialNotes);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Dispatch directly to WhatsApp (number: 03330241899)
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
      formType: 'Technical Consultation Form',
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
        console.warn('Backend sync returned non-OK, but WhatsApp dispatch proceeded.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      // Even if local server fails, WhatsApp dispatch succeeded
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Book an AI Technical Consultation</h3>
              <p className="text-xs text-slate-400">30-Minute Architecture & Feasibility Discovery Session</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Consultation Dispatched & Scheduled</h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>! Your consultation request has been forwarded directly to our lead engineering team on WhatsApp (<strong>{WHATSAPP_DISPLAY_NUMBER}</strong>).
            </p>

            {/* Prominent WhatsApp Dispatch Status Box */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Sent to WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
                </span>
                <span className="text-[11px] bg-emerald-200/60 text-emerald-800 px-2 py-0.5 rounded-full font-mono">
                  Delivered
                </span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Your project brief and chosen slot ({date} · {timeSlot}) have been formatted and directed to our WhatsApp channel.
              </p>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Chat on WhatsApp Now ({WHATSAPP_DISPLAY_NUMBER})</span>
                </a>
              )}
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1 text-slate-700">
              <div><strong className="text-slate-900">Meeting Format:</strong> Google Meet / Zoom HD</div>
              <div><strong className="text-slate-900">Attendee Email:</strong> {email}</div>
              <div><strong className="text-slate-900">Direct Contact:</strong> Mr. Shuja Ali & InnovationLab Lead Team</div>
              <div><strong className="text-slate-900">Target Focus:</strong> {service}</div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Full Name <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Work Email <span className="text-orange-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Global"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Time Slot (30 Mins)
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                >
                  <option value="10:00 - 10:45 GMT">10:00 – 10:45 GMT (Morning)</option>
                  <option value="14:00 - 14:45 GMT">14:00 – 14:45 GMT (Afternoon)</option>
                  <option value="16:00 - 16:45 GMT">16:00 – 16:45 GMT (Late Afternoon)</option>
                  <option value="18:00 - 18:45 GMT">18:00 – 18:45 GMT / 10:00 PST</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Estimated Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                >
                  <option value="$15,000 - $35,000">$15,000 – $35,000 (Pilot Scope)</option>
                  <option value="$35,000 - $75,000">$35,000 – $75,000 (Standard System)</option>
                  <option value="$75,000 - $150,000+">$75,000 – $150,000+ (Multi-Agent)</option>
                  <option value="Flexible / Needs Scoping">Flexible / Needs Scoping</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Desired Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                >
                  <option value="ASAP (< 1 Month)">ASAP (&lt; 1 Month)</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Project Background / Key Bottleneck
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Briefly describe your systems, volume, or key automation target..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>

            {error && <div className="text-xs text-red-600 bg-red-50 p-2 rounded">{error}</div>}

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Guaranteed zero-sales-pitch technical review.
              </span>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Calendar className="w-4 h-4" />}
                <span>Confirm Appointment</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

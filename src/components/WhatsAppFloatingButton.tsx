import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, getWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    'I need an AI Agent for back-office automation.',
    'I want to inquire about custom chatbot pricing.',
    'Looking to schedule a discovery consultation with Mr. Shuja Ali.',
    'Interested in AI Lead Generation workflows.',
  ];

  const handleStartChat = (text?: string) => {
    const messageToSend = text || customMsg || 'Hello InnovationLab! I would like to inquire about your AI solutions.';
    const url = getWhatsAppUrl(messageToSend);
    
    // Open in new tab
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      
      {/* Expandable Quick-Chat Popup Card */}
      {isOpen && (
        <div className="mb-3 w-[88vw] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#075E54]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">InnovationLab WhatsApp</h4>
                <div className="flex items-center gap-1.5 text-xs text-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Direct: <strong>{WHATSAPP_DISPLAY_NUMBER}</strong></span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50 text-slate-800 text-xs">
            <div className="p-3 bg-emerald-50/80 border border-emerald-200/80 rounded-xl space-y-1">
              <span className="font-semibold text-emerald-900 block text-[11px] uppercase tracking-wider">
                Direct WhatsApp Channel
              </span>
              <p className="text-slate-600 text-xs leading-relaxed">
                Connect directly with Mr. Shuja Ali and our solutions team. Average response time: <strong>&lt; 15 mins</strong>.
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Quick Topics:
              </span>
              <div className="space-y-1">
                {quickMessages.map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => handleStartChat(msg)}
                    className="w-full text-left p-2 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-900 text-[11px] transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="line-clamp-1">{msg}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Message Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleStartChat();
              }}
              className="pt-1 flex gap-2"
            >
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center cursor-pointer"
                title="Send on WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Footer Callout */}
          <div className="p-3 bg-white border-t border-slate-200 text-center">
            <button
              onClick={() => handleStartChat()}
              className="w-full py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Chat on WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer active:scale-95 group border-2 border-white"
          aria-label="Chat on WhatsApp 03330241899"
          title={`Click to chat on WhatsApp (${WHATSAPP_DISPLAY_NUMBER})`}
        >
          {/* Animated pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

          {/* WhatsApp Icon */}
          <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider leading-none">
              WhatsApp
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-white leading-tight">
              {WHATSAPP_DISPLAY_NUMBER}
            </span>
          </div>
        </button>
      </div>

    </div>
  );
};

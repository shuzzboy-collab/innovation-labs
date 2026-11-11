import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, RefreshCw, Calendar, ArrowRight, User } from 'lucide-react';

interface InteractiveAssistantProps {
  onOpenConsultation?: () => void;
  isFloating?: boolean;
}

export const InteractiveAssistant: React.FC<InteractiveAssistantProps> = ({
  onOpenConsultation,
  isFloating = false,
}) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Hello! I am the InnovationLab AI Solutions Assistant. Ask me about our autonomous agents, pricing benchmarks, technical architecture, or how we automate complex business workflows.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'What are your pricing & engagement tiers?',
    'How do you guarantee zero hallucinations?',
    'Show case studies in Logistics or Banking',
    'How do we schedule a technical discovery call?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (messageToSend?: string) => {
    const text = messageToSend || input;
    if (!text.trim() || loading) return;

    const newMessages = [...messages, { role: 'user' as const, text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newMessages.map((m) => ({ role: m.role, content: m.text })),
        }),
      });

      if (!response.ok) {
        throw new Error('Chat API returned an error');
      }

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          text: 'Our AI engine is currently busy. You can also explore our AI Tools tab or click "Book Consultation" to speak directly with our Senior AI Architect.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // If floating widget mode
  if (isFloating) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold text-xs sm:text-sm rounded-full shadow-lg btn-hover-lift cursor-pointer active:scale-95 group"
            aria-label="Open AI Assistant"
          >
            <Bot className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110" />
            <span>Ask InnovationLab AI</span>
          </button>
        ) : (
          <div className="w-[90vw] sm:w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
            {/* Header */}
            <div className="px-4 py-3 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-white">InnovationLab Assistant</h4>
                  <div className="text-[10px] text-slate-400">Gemini 3.8 Flash Powered</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 text-xs sm:text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-md bg-orange-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      IL
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-xl leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-orange-600 text-white rounded-br-xs'
                        : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2 items-center text-xs text-slate-500 py-1">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-orange-600" />
                  <span>InnovationLab reasoning...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="p-2 bg-white border-t border-slate-200 flex flex-wrap gap-1.5">
              {quickPrompts.slice(0, 2).map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-[11px] px-2 py-1 bg-slate-100 hover:bg-orange-50 hover:text-orange-700 text-slate-700 rounded transition-colors text-left truncate max-w-[200px]"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-slate-200 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI agents, architecture, or pricing..."
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white rounded-lg transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  // Embedded Page Section Mode
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-orange-700 text-xs font-semibold mb-3">
          <Bot className="w-3.5 h-3.5" />
          Interactive AI Solutions Assistant
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Have Questions About AI Automation? Ask Our Engine.
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
          Chat in real-time with our solutions consultant. Get clear answers on our agent architectures, pricing models, integration feasibility, and case study outcomes.
        </p>

        {/* Quick Prompts */}
        <div className="mt-4 flex flex-wrap gap-2">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSend(prompt)}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-orange-700 text-slate-700 border border-slate-200/80 transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col h-[480px]">
        {/* Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold shadow-xs">
                  IL
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-orange-600 text-white rounded-br-xs'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2 items-center text-xs text-slate-500 py-1 pl-11">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-orange-600" />
              <span>InnovationLab reasoning...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-white border-t border-slate-200 flex gap-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question about autonomous AI agents, security, or integrations..."
            className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-slate-300 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
        <span>Connected to InnovationLab Enterprise Knowledge Gateway</span>
        {onOpenConsultation && (
          <button
            onClick={onOpenConsultation}
            className="text-orange-600 font-semibold hover:underline flex items-center gap-1"
          >
            <span>Prefer a live human architect? Book a meeting</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

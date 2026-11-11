import React, { useState } from 'react';
import { Calendar, Menu, X, ArrowUpRight, ShieldCheck, ChevronDown, UserCheck, MessageSquare } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
  onOpenClientPortal: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
  onOpenClientPortal,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'agents-bots', label: 'AI Agents & Bots' },
    { id: 'innovation-lab', label: 'Innovation Lab' },
    { id: 'projects', label: 'Case Studies' },
    { id: 'tools', label: 'AI Tools' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs transition-colors">
      {/* Brand Accent Top Line */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Zone 1: Original Brand Logo in Top-Left Corner */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative flex items-center text-left focus:outline-none group cursor-pointer py-1"
              title="InnovationLab – AI Agency | Agents & Bots"
            >
              {/* Seamless Natural Logo Integration with Background Dissolve */}
              <div className="relative flex items-center justify-center">
                <img
                  src="/assets/aistudio/Screenshot_2026-11-05_113325_c39267d1.png"
                  alt="InnovationLab – AI Agency | Agents & Bots"
                  className="logo-blend-natural h-13 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (single line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer whitespace-nowrap active:scale-95 ${
                  activeTab === link.id
                    ? 'text-orange-600 bg-orange-50 font-semibold shadow-2xs'
                    : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action, WhatsApp & Portal Access */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Direct Link */}
            <a
              href={getWhatsAppUrl('Hello InnovationLab, I am visiting your website and would like to chat.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-all flex items-center gap-1.5 shadow-2xs group"
              title={`Direct WhatsApp: ${WHATSAPP_DISPLAY_NUMBER}`}
            >
              <svg className="w-3.5 h-3.5 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{WHATSAPP_DISPLAY_NUMBER}</span>
            </a>

            <button
              onClick={onOpenClientPortal}
              className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 hover:shadow-2xs rounded-lg transition-all duration-150 flex items-center gap-1.5 cursor-pointer active:scale-95"
              title="Access Client Milestone & SLA Portal"
            >
              <UserCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Client Portal</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-xs btn-hover-lift btn-shimmer flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-orange-600 rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === link.id
                  ? 'text-orange-600 bg-orange-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={getWhatsAppUrl('Hello InnovationLab, I am contacting you via mobile from your website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg flex items-center justify-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Us: {WHATSAPP_DISPLAY_NUMBER}</span>
            </a>
            <button
              onClick={() => {
                onOpenClientPortal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-slate-600" />
              Client Portal
            </button>
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-800 text-center"
            >
              Admin Dashboard
            </button>
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

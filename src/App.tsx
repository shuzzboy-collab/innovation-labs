import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ClientPortal } from './components/ClientPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { InteractiveAssistant } from './components/InteractiveAssistant';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AgentsBotsPage } from './pages/AgentsBotsPage';
import { InnovationLabPage } from './pages/InnovationLabPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ToolsPage } from './pages/ToolsPage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationInitialService, setConsultationInitialService] = useState('AI Agents & Bots');
  const [consultationInitialNotes, setConsultationInitialNotes] = useState('');
  const [clientPortalOpen, setClientPortalOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const handleOpenConsultation = (serviceOrNote?: string) => {
    if (serviceOrNote) {
      if (serviceOrNote.includes('Service:')) {
        setConsultationInitialService(serviceOrNote.replace('Service:', '').trim());
      } else {
        setConsultationInitialNotes(serviceOrNote);
      }
    } else {
      setConsultationInitialNotes('');
    }
    setConsultationModalOpen(true);
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col antialiased">
      
      {/* Navigation Bar with Original Logo in Top-Left Corner */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenClientPortal={() => setClientPortalOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}
        {activeTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}
        {activeTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}
        {activeTab === 'agents-bots' && (
          <AgentsBotsPage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}
        {activeTab === 'innovation-lab' && (
          <InnovationLabPage
            onNavigate={handleNavigate}
            onBookConsultation={() => handleOpenConsultation('Innovation Lab Sandbox Inquiry')}
          />
        )}
        {activeTab === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onBookConsultation={handleOpenConsultation}
          />
        )}
        {activeTab === 'tools' && (
          <ToolsPage onBookConsultation={handleOpenConsultation} />
        )}
        {activeTab === 'research' && <ResearchPage />}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Floating Interactive AI Assistant (Always accessible, bottom right) */}
      <InteractiveAssistant
        isFloating={true}
        onOpenConsultation={() => handleOpenConsultation('Inquiry via Floating Assistant')}
      />

      {/* Dedicated Floating WhatsApp Button (03330241899, bottom left) */}
      <WhatsAppFloatingButton />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService={consultationInitialService}
        initialNotes={consultationInitialNotes}
      />

      {/* Client SLA & Deliverables Portal Modal */}
      {clientPortalOpen && (
        <ClientPortal onClose={() => setClientPortalOpen(false)} />
      )}

      {/* Enterprise Admin Dashboard Modal */}
      {adminOpen && (
        <AdminDashboard onClose={() => setAdminOpen(false)} />
      )}

      {/* Quiet Footer */}
      <Footer
        setActiveTab={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenClientPortal={() => setClientPortalOpen(true)}
      />

    </div>
  );
}

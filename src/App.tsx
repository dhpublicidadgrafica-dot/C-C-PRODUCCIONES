import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { EventsPage } from './pages/EventsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AIChatWidget } from './components/AIChatWidget';
import { SEOInspectorDrawer } from './components/SEOInspectorDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';

import { ServiceId } from './types';
import { SERVICES_DATA } from './data/servicesData';

export function App() {
  // Navigation State: 'home' | 'quienes-somos' | 'servicios' | 'eventos' | 'blog' | 'contacto' | 'servicio-detalle' | 'servicio-[id]'
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeServiceId, setActiveServiceId] = useState<ServiceId | null>(null);

  // Modals & Drawers State
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  const [isSEOInspectorOpen, setIsSEOInspectorOpen] = useState<boolean>(false);

  // Scroll to top on page or service selection change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeServiceId, activeTab]);

  const handleSelectService = (id: ServiceId) => {
    setActiveServiceId(id);
    setActiveTab(`servicio-${id}`);
  };

  const handleTabChange = (tab: string) => {
    if (tab.startsWith('servicio-') && tab !== 'servicio-detalle') {
      const sId = tab.replace('servicio-', '') as ServiceId;
      if (SERVICES_DATA.some(s => s.id === sId)) {
        setActiveServiceId(sId);
        setActiveTab(tab);
        return;
      }
    }
    setActiveServiceId(null);
    setActiveTab(tab);
  };

  const handleOpenQuoteWithService = (id?: ServiceId) => {
    let message = '¡Hola CyC Producciones! Quisiera solicitar una cotización para un evento.';
    if (id) {
      const service = SERVICES_DATA.find(s => s.id === id);
      if (service) {
        message = `¡Hola CyC Producciones! Quisiera solicitar una cotización para el servicio de: ${service.name}.`;
      }
    }
    window.open(`https://wa.me/573004978810?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Determine current service if viewing a service page
  const currentServiceId: ServiceId | null = activeServiceId || 
    (activeTab.startsWith('servicio-') && activeTab !== 'servicio-detalle' 
      ? (activeTab.replace('servicio-', '') as ServiceId) 
      : null);

  // Render current independent page view
  const renderCurrentPage = () => {
    if (currentServiceId) {
      return (
        <ServiceDetailPage
          serviceId={currentServiceId}
          onNavigateTab={handleTabChange}
          onSelectService={handleSelectService}
          onOpenQuoteModal={handleOpenQuoteWithService}
        />
      );
    }

    switch (activeTab) {
      case 'quienes-somos':
        return (
          <AboutPage
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
            onNavigateTab={handleTabChange}
          />
        );
      case 'servicios':
        return (
          <ServicesPage
            onSelectService={handleSelectService}
            onOpenQuoteModal={handleOpenQuoteWithService}
            onNavigateTab={handleTabChange}
          />
        );
      case 'eventos':
        return (
          <EventsPage
            onNavigateTab={handleTabChange}
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
            onNavigateTab={handleTabChange}
          />
        );
      case 'contacto':
        return (
          <ContactPage
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
            onNavigateTab={handleTabChange}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onSelectService={handleSelectService}
            onOpenQuoteModal={handleOpenQuoteWithService}
            onOpenAIChat={() => setIsAIChatOpen(true)}
            onNavigateTab={handleTabChange}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans antialiased selection:bg-[#C99327] selection:text-black custom-scrollbar relative overflow-x-hidden">
      
      {/* CINEMATIC LIGHT ATMOSPHERE ACCENTS */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[#C99327]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        selectedServiceId={activeServiceId}
        onSelectService={handleSelectService}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
        onOpenAIChat={() => setIsAIChatOpen(true)}
        onOpenSEOInspector={() => setIsSEOInspectorOpen(true)}
      />

      {/* DYNAMIC INDEPENDENT PAGE ROUTING */}
      {renderCurrentPage()}

      {/* FOOTER */}
      <Footer
        onSelectService={handleSelectService}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
        onOpenSEOInspector={() => setIsSEOInspectorOpen(true)}
        onNavigateTab={handleTabChange}
      />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppFloatingButton />

      {/* AI ASSIST CHAT DRAWER */}
      <AIChatWidget
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
      />

      {/* SEO & SCHEMA INSPECTOR DRAWER */}
      <SEOInspectorDrawer
        isOpen={isSEOInspectorOpen}
        onClose={() => setIsSEOInspectorOpen(false)}
      />

    </div>
  );
}

export default App;

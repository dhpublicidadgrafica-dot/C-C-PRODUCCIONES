import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';
import { FaqSection } from '../components/FaqSection';
import { ServiceId } from '../types';

interface ServicesPageProps {
  onSelectService: (id: ServiceId) => void;
  onOpenQuoteModal: (id?: ServiceId) => void;
  onNavigateTab: (tab: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenQuoteModal,
}) => {
  return (
    <main id="services-page" className="pt-24 min-h-screen bg-[#050505] text-white animate-in fade-in duration-300">
      
      {/* 10 SERVICES CATALOG GRID */}
      <ServicesGrid
        onSelectService={onSelectService}
        onOpenQuoteModalWithService={(id) => onOpenQuoteModal(id)}
      />

      {/* FAQS FOR SERVICES */}
      <FaqSection />

    </main>
  );
};


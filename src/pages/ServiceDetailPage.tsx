import React from 'react';
import { ServiceDetailView } from '../components/ServiceDetailView';
import { ServiceItem, ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { Home, Sparkles, ChevronRight } from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: ServiceId;
  onNavigateTab: (tab: string) => void;
  onSelectService: (id: ServiceId) => void;
  onOpenQuoteModal: (id?: ServiceId) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigateTab,
  onSelectService,
  onOpenQuoteModal,
}) => {
  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  return (
    <main id={`service-page-${service.id}`} className="animate-in fade-in duration-300">
      {/* DETAILED SERVICE CONTENT WITH 5-IMAGE CAROUSEL */}
      <ServiceDetailView
        service={service}
        onBackToServices={() => onNavigateTab('servicios')}
        onOpenQuoteForService={() => onOpenQuoteModal(service.id)}
      />
    </main>
  );
};

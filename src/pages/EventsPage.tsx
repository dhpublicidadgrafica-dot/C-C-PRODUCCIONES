import React from 'react';
import { EventsView } from '../components/EventsView';

interface EventsPageProps {
  onNavigateTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  onNavigateTab,
  onOpenQuoteModal,
}) => {
  return (
    <main id="events-page" className="animate-in fade-in duration-300">
      <EventsView
        onBackToHome={() => onNavigateTab('home')}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </main>
  );
};

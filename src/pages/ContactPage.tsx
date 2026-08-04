import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  onOpenQuoteModal: () => void;
  onNavigateTab: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <main id="contact-page" className="pt-24 min-h-screen bg-[#050505] text-white animate-in fade-in duration-300">
      
      {/* CONTACT SECTION FORM & MAP */}
      <ContactSection />

    </main>
  );
};


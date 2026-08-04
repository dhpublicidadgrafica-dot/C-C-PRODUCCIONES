import React, { useState } from 'react';
import { Sparkles, Search, ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Con cuánto tiempo de anticipación debo reservar los equipos para mi evento?',
      a: 'Recomendamos realizar la reserva con un mínimo de 2 a 4 semanas de anticipación, especialmente para temporadas altas (mayo-junio y octubre-diciembre). Sin embargo, contamos con un servicio de logística exprés para montajes de emergencia en menos de 48 horas.'
    },
    {
      q: '¿Qué garantía me ofrecen en caso de fallas de energía o mal tiempo?',
      a: 'Todos nuestros montajes cuentan con plantas eléctricas insonorizadas redundantes de respaldo (UPS) y estructuras impermeabilizadas con prueba de resistencia e informes de cálculo de viento.'
    },
    {
      q: '¿Ofrecen el servicio de cotización presencial con visita técnica al recinto?',
      a: 'Sí, realizamos una visita técnica de inspección sin costo en la ciudad sede para evaluar acometidas eléctricas trifásicas, puntos de anclaje de rigging, accesos de carga y acústica antes de emitir la propuesta.'
    },
    {
      q: '¿Pueden emitir factura electrónica y contrato con pólizas de cumplimiento?',
      a: 'Absolutamente. CyC Producciones es una persona jurídica constituida con régimen común. Emitimos facturación electrónica y adjuntamos pólizas de responsabilidad civil extracontractual para eventos masivos.'
    },
    {
      q: '¿Qué tipo de resoluciones manejan para las pantallas LED?',
      a: 'Manejamos módulos LED fine pitch P1.9 y P2.5 Indoor (Full HD y 4K UHD) con tasa de refresco de 3840Hz libre de parpadeo en cámaras de video broadcast, así como P3.9 Outdoor de alto brillo (5000 nits).'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resuelve tus Dudas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-poppins tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Información técnica, administrativa y logística para la contratación de CyC Producciones.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por palabra clave (ej. pantalla LED, reserva, factura)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#C99327]"
          />
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3 mb-8">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-colors hover:border-[#C99327]/30">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-white font-poppins"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-[#C99327] shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

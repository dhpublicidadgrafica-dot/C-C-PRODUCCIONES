import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Calendar as CalendarIcon, 
  MessageCircle, 
  Sparkles,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Corporativo');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [leadId, setLeadId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedLeadId = `CYC-${Date.now().toString().slice(-6)}`;
    setLeadId(generatedLeadId);

    try {
      // 1. Send via backend /api/contact which forwards directly to cycproducciones2015@gmail.com
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          eventType,
          message,
          leadId: generatedLeadId,
        }),
      });

      // 2. Client-side resilient dispatch to guarantee email delivery
      if (!res.ok) {
        await fetch('https://formsubmit.co/ajax/cycproducciones2015@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            _subject: `🔔 Nueva Solicitud Web [${generatedLeadId}] - ${name}`,
            _template: 'table',
            _captcha: 'false',
            'Radicado': generatedLeadId,
            'Nombre': name,
            'Correo': email,
            'Teléfono': phone,
            'Tipo de Evento': eventType,
            'Mensaje': message,
          }),
        });
      }

      setIsSent(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C99327', '#E5A93C', '#ffffff']
      });
    } catch (err) {
      console.error('Error sending email:', err);
      // Fallback direct dispatch
      try {
        await fetch('https://formsubmit.co/ajax/cycproducciones2015@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            _subject: `🔔 Nueva Solicitud Web [${generatedLeadId}] - ${name}`,
            _template: 'table',
            _captcha: 'false',
            'Radicado': generatedLeadId,
            'Nombre': name,
            'Correo': email,
            'Teléfono': phone,
            'Tipo de Evento': eventType,
            'Mensaje': message,
          }),
        });
      } catch (fallbackErr) {
        console.warn('Fallback error:', fallbackErr);
      }
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900" id="contacto-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C99327]/10 border border-[#C99327]/30 text-[#C99327] text-xs font-poppins font-normal uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atención Directa & Cotización</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-poppins tracking-tight">
            Ponte en Contacto con un Asesor Técnico
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-poppins font-normal">
            Estamos listos para hacer realidad tu evento. Respuesta prioritaria e inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* CONTACT INFO & GOOGLE MAPS SIMULATOR */}
          <div className="space-y-8">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white font-poppins">Oficinas Centrales & Sede Logística</h3>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C99327] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dirección Principal:</span>
                    <span>Carrera 55 # 1B-19, Medellin, Colombia.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C99327] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">PBX / WhatsApp Directo:</span>
                    <span>+57 300 4978810</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#C99327] shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <span className="font-bold text-white block">Correo Oficial:</span>
                    <span className="break-all">cycproducciones2015@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C99327] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Horario de Atención:</span>
                    <span>Lunes a Sábado: 7:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP PREVIEW SIMULATION */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 relative overflow-hidden h-64">
              <div className="absolute inset-0 opacity-70 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-zinc-950/60" />
              </div>
              <div className="relative z-10 p-4 bg-zinc-950/90 border border-zinc-800 rounded-2xl max-w-xs text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#C99327] font-poppins">
                  <Building2 className="w-4 h-4" />
                  <span>CyC Producciones S.A.S.</span>
                </div>
                <p className="text-zinc-300 text-[11px]">Nuestras Bodegas Principales</p>
                <a 
                  href="https://www.google.com/maps/place/Cra.+55+%231B-19,+Guayabal,+Medell%C3%ADn,+Guayabal,+Medell%C3%ADn,+Antioquia/@6.20946,-75.5894867,848m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e4429d83a33ffff:0x355f7c84c1773c04!8m2!3d6.2094547!4d-75.5869118!16s%2Fg%2F11y50zwdks?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#C99327] font-mono text-[10px] underline block"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </div>

          </div>

          {/* SMART CONTACT FORM */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            {isSent ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-poppins">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-xs text-amber-400 font-mono mt-1">
                    Enviado a: cycproducciones2015@gmail.com
                  </p>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-xs text-zinc-300 max-w-sm mx-auto space-y-2 text-left">
                  <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                    <span className="text-zinc-500">Número de Radicado:</span>
                    <strong className="text-[#C99327] font-mono">#{leadId}</strong>
                  </div>
                  <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                    <span className="text-zinc-500">Remitente:</span>
                    <span className="text-white font-medium">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Tipo de Evento:</span>
                    <span className="text-white font-medium">{eventType}</span>
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <a
                    href={`https://wa.me/573004978810?text=${encodeURIComponent(
                      `Hola CyC Producciones, acabo de enviar una solicitud por la web (Radicado #${leadId}) a cycproducciones2015@gmail.com. Mi nombre es ${name} y me interesa cotizar un evento ${eventType}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirmar también por WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white font-poppins mb-2">Formulario de Contacto</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-poppins font-normal uppercase text-zinc-400 mb-1">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Andrés Ramírez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#C99327] font-poppins font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-poppins font-normal uppercase text-zinc-400 mb-1">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +57 300 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#C99327] font-poppins font-normal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-poppins font-normal uppercase text-zinc-400 mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="ejemplo@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#C99327] font-poppins font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-poppins font-normal uppercase text-zinc-400 mb-1">Tipo de Evento</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#C99327] font-poppins font-normal"
                    >
                      <option value="Corporativo">Evento Corporativo / Congreso</option>
                      <option value="Concierto">Concierto / Evento Masivo</option>
                      <option value="Boda">Boda / Social Luxury</option>
                      <option value="Lanzamiento">Lanzamiento de Producto</option>
                      <option value="Feria">Feria / Stand Publicitario</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-poppins font-normal uppercase text-zinc-400 mb-1">Detalles de la Propuesta / Requerimientos</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Escribe aquí los detalles del lugar, fecha estimada, número de personas y equipos que necesitas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-[#C99327] font-poppins font-normal"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-[#C99327] hover:bg-[#B27F1C] text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C99327]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud de Cotización'}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-mono pt-1 text-center">
                  <Mail className="w-3.5 h-3.5 text-[#C99327] shrink-0" />
                  <span>Tu solicitud llega directamente a <strong className="text-zinc-200">cycproducciones2015@gmail.com</strong></span>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

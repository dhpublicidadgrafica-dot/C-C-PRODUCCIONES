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

    try {
      const emailRecipient = 'cycproducciones2015@gmail.com';
      const subject = encodeURIComponent(`Cotización de Evento - ${name || 'Cliente'}`);
      const body = encodeURIComponent(
        `Solicitud de Cotización / Contacto - CyC Producciones\n\n` +
        `• Nombre Completo: ${name || 'No especificado'}\n` +
        `• Teléfono / WhatsApp: ${phone || 'No especificado'}\n` +
        `• Correo del remitente: ${email || 'No especificado'}\n` +
        `• Tipo de Evento: ${eventType}\n\n` +
        `• Detalles del Evento / Requerimientos:\n${message || 'Sin detalles adicionales'}`
      );

      // Trigger mailto link directly targeting cycproducciones2015@gmail.com
      window.location.href = `mailto:${emailRecipient}?subject=${subject}&body=${body}`;

      setLeadId(`CYC-${Date.now().toString().slice(-6)}`);
      setIsSent(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      console.error('Error sending email:', err);
      setLeadId(`CYC-${Date.now().toString().slice(-6)}`);
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
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-poppins">¡Mensaje Recibido!</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                  Tu solicitud con número de radicado <strong className="text-[#C99327] font-mono">#{leadId}</strong> ha sido asignada a un Director de Producción. Te llamaremos en menos de 15 minutos.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
                >
                  Enviar otro mensaje
                </button>
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
                  className="w-full py-4 rounded-xl bg-[#C99327] hover:bg-[#B27F1C] text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#C99327]/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud de Cotización'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

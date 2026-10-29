import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  CheckCircle, 
  Sparkles, 
  Download, 
  MessageCircle, 
  Building2, 
  Users, 
  MapPin, 
  Calendar as CalendarIcon, 
  Check, 
  FileText,
  Volume2,
  Tv,
  Maximize2,
  Home as HomeIcon,
  ShoppingBag,
  Disc,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ServiceId } from '../types';
import { SERVICES_DATA } from '../data/servicesData';

interface ServiceSelection {
  enabled: boolean;
  tier: 'estandar' | 'luxury' | 'ultra_vip';
}

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: ServiceId | null;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form state
  const [eventType, setEventType] = useState('Corporativo');
  const [guestsCount, setGuestsCount] = useState<number>(300);
  const [city, setCity] = useState('Bogotá D.C.');
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [eventDate, setEventDate] = useState('');

  // Selected services with tiers
  const [selectedServices, setSelectedServices] = useState<Record<string, { enabled: boolean; tier: 'estandar' | 'luxury' | 'ultra_vip' }>>(() => {
    const initial: Record<string, { enabled: boolean; tier: 'estandar' | 'luxury' | 'ultra_vip' }> = {};
    SERVICES_DATA.forEach(s => {
      initial[s.id] = {
        enabled: preselectedServiceId ? s.id === preselectedServiceId : ['sonido-profesional', 'pantallas-led', 'eventos-corporativos'].includes(s.id),
        tier: 'luxury'
      };
    });
    return initial;
  });

  // Contact info
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteGenerated, setQuoteGenerated] = useState(false);
  const [leadReference, setLeadReference] = useState('');

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        enabled: !prev[id]?.enabled
      }
    }));
  };

  const changeTier = (id: string, tier: 'estandar' | 'luxury' | 'ultra_vip') => {
    setSelectedServices(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        tier
      }
    }));
  };

  // Budget calculation logic
  const calculateTotalBudget = () => {
    let baseTotal = 0;
    
    // Scale multiplier for guests count
    let scaleMultiplier = 1;
    if (guestsCount > 1000) scaleMultiplier = 2.8;
    else if (guestsCount > 500) scaleMultiplier = 1.9;
    else if (guestsCount > 250) scaleMultiplier = 1.4;
    else if (guestsCount > 100) scaleMultiplier = 1.1;

    // Outdoor multiplier
    const outdoorMultiplier = isOutdoor ? 1.25 : 1.0;

    SERVICES_DATA.forEach(service => {
      const selection = selectedServices[service.id];
      if (selection?.enabled) {
        let tierMultiplier = 1.0;
        if (selection.tier === 'luxury') tierMultiplier = 1.5;
        if (selection.tier === 'ultra_vip') tierMultiplier = 2.3;

        const itemCost = service.basePriceUSD * scaleMultiplier * outdoorMultiplier * tierMultiplier;
        baseTotal += itemCost;
      }
    });

    return Math.round(baseTotal);
  };

  const totalUSD = calculateTotalBudget();
  const totalCOP = Math.round(totalUSD * 4100);

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const activeServicesList = (Object.entries(selectedServices) as [string, ServiceSelection][])
        .filter(([_, val]) => val.enabled)
        .map(([id, val]) => {
          const sObj = SERVICES_DATA.find(s => s.id === id);
          return `${sObj?.name || id} (${val.tier.toUpperCase()})`;
        });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clientName,
          company: clientCompany,
          city,
          email: clientEmail,
          phone: clientPhone,
          eventType,
          eventDate,
          guestsCount,
          budget: `$${totalUSD.toLocaleString()} USD (~$${totalCOP.toLocaleString()} COP)`,
          message: `Servicios Seleccionados: ${activeServicesList.join(', ')}. Notas: ${customNotes}`,
        }),
      });

      const data = await response.json();
      setLeadReference(data.leadId || `CYC-${Date.now().toString().slice(-6)}`);
      setQuoteGenerated(true);
      setStep(3);

      // Trigger Celebration Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#f59e0b', '#d97706', '#ffffff']
      });

    } catch (err) {
      console.error('Error submitting quote:', err);
      setLeadReference(`CYC-${Date.now().toString().slice(-6)}`);
      setQuoteGenerated(true);
      setStep(3);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendWhatsAppQuote = () => {
    const activeServicesList = (Object.entries(selectedServices) as [string, ServiceSelection][])
      .filter(([_, val]) => val.enabled)
      .map(([id, val]) => {
        const sObj = SERVICES_DATA.find(s => s.id === id);
        return `• ${sObj?.name} [${val.tier.toUpperCase()}]`;
      })
      .join('%0A');

    const msg = `¡Hola CyC Producciones! He generado la cotización instantánea *#${leadReference}* en su sitio web:%0A%0A` +
      `*Cliente:* ${clientName} (${clientCompany || 'Personal'})%0A` +
      `*Evento:* ${eventType} para ${guestsCount} asistentes%0A` +
      `*Ubicación:* ${city} (${isOutdoor ? 'Al aire libre' : 'Interior'})%0A` +
      `*Fecha estimada:* ${eventDate || 'Por definir'}%0A` +
      `*Servicios Requeridos:*%0A${activeServicesList}%0A%0A` +
      `*Presupuesto Estimado:* $${totalUSD.toLocaleString()} USD (~$${totalCOP.toLocaleString()} COP)%0A` +
      `Por favor contáctenme para coordinar el contrato formal.`;

    window.open(`https://wa.me/573001234567?text=${msg}`, '_blank');
  };

  const handlePrintQuote = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* HEADER BAR */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-950 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-zinc-950 font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-poppins flex items-center gap-2">
                Cotizador Inteligente <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400 font-mono">En Tiempo Real</span>
              </h2>
              <p className="text-xs text-zinc-400">CyC Producciones • Presupuesto transparente e instantáneo</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP INDICATOR */}
        <div className="px-6 py-3 bg-zinc-950/60 border-b border-zinc-800/80 flex items-center justify-between text-xs font-mono">
          <div className={`flex items-center gap-2 ${step >= 1 ? 'text-amber-400 font-bold' : 'text-zinc-400'}`}>
            <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">1</span>
            <span>Detalles del Evento</span>
          </div>
          <div className="w-8 h-[1px] bg-zinc-800" />
          <div className={`flex items-center gap-2 ${step >= 2 ? 'text-amber-400 font-bold' : 'text-zinc-400'}`}>
            <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px]">2</span>
            <span>Servicios & Tiers</span>
          </div>
          <div className="w-8 h-[1px] bg-zinc-800" />
          <div className={`flex items-center gap-2 ${step === 3 ? 'text-emerald-400 font-bold' : 'text-zinc-400'}`}>
            <span className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center text-[10px]">3</span>
            <span>Resumen & Exportación</span>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          
          {/* STEP 1: EVENT PARAMETERS */}
          {step === 1 && (
            <div className="space-y-6">
              
              <div>
                <label className="block text-xs font-mono uppercase text-amber-400 mb-2">1. Tipo de Evento</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'Corporativo / Congreso',
                    'Concierto / Festival',
                    'Boda / Social Luxury',
                    'Lanzamiento de Marca',
                    'Feria / Exposición',
                    'Pasarela / Fashion'
                  ].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                        eventType === type
                          ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold shadow-md'
                          : 'bg-zinc-800/60 border-zinc-700/60 text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* GUESTS SLIDER */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono uppercase text-amber-400">2. Cantidad de Asistentes</label>
                    <span className="text-sm font-bold text-white font-mono bg-zinc-800 px-2.5 py-0.5 rounded-lg border border-zinc-700">
                      {guestsCount} personas
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-zinc-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                    <span>50 VIP</span>
                    <span>500 Mediano</span>
                    <span>1,500 Masivo</span>
                    <span>5,000+ Estadio</span>
                  </div>
                </div>

                {/* CITY & VENUE */}
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-400 mb-2">3. Ciudad del Evento</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
                  >
                    <option value="Bogotá D.C.">Bogotá D.C. (Sede Principal)</option>
                    <option value="Medellín">Medellín</option>
                    <option value="Cali">Cali</option>
                    <option value="Cartagena">Cartagena de Indias</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="Bucaramanga">Bucaramanga</option>
                    <option value="Eje Cafetero">Eje Cafetero (Pereira/Armenia/Manizales)</option>
                    <option value="Otras Ciudades (Cobertura Nacional)">Otras Ciudades (Cobertura Nacional)</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* OUTDOOR TOGGLE */}
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-400 mb-2">4. Tipo de Recinto</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOutdoor(false)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        !isOutdoor 
                          ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold' 
                          : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                      }`}
                    >
                      Indoor (Cerrado)
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOutdoor(true)}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        isOutdoor 
                          ? 'bg-amber-400 text-zinc-950 border-amber-400 font-bold' 
                          : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                      }`}
                    >
                      Outdoor (Al Aire Libre)
                    </button>
                  </div>
                </div>

                {/* EVENT DATE */}
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-400 mb-2">5. Fecha Estimada</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
                  />
                </div>

              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  Siguiente: Seleccionar Servicios <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* STEP 2: SERVICES & TIERS SELECTION */}
          {step === 2 && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-white font-poppins">Selecciona los Equipos y Servicios Requeridos</h3>
                  <p className="text-xs text-zinc-400">Puedes personalizar el nivel técnico (Estándar, Luxury o Ultra VIP)</p>
                </div>
                
                {/* LIVE RUNNING BUDGET BADGE */}
                <div className="text-right">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Estimado en Vivo</div>
                  <div className="text-lg font-black text-amber-400 font-poppins">
                    ${totalUSD.toLocaleString()} USD
                  </div>
                  <div className="text-[10px] text-zinc-400">~${totalCOP.toLocaleString()} COP</div>
                </div>
              </div>

              <div className="space-y-3">
                {SERVICES_DATA.map((service) => {
                  const selection = selectedServices[service.id];
                  const isChecked = selection?.enabled;

                  return (
                    <div 
                      key={service.id} 
                      className={`p-4 rounded-2xl border transition-all ${
                        isChecked 
                          ? 'bg-zinc-850 border-amber-500/40 shadow-md' 
                          : 'bg-zinc-900/50 border-zinc-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        
                        {/* SERVICE CHECKBOX & TITLE */}
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleService(service.id)}
                            className="mt-1 w-4 h-4 accent-amber-400 rounded"
                          />
                          <div>
                            <span className="text-sm font-bold text-white block">{service.name}</span>
                            <span className="text-xs text-zinc-400 block line-clamp-1">{service.shortDesc}</span>
                          </div>
                        </label>

                        {/* TIER PICKER */}
                        {isChecked && (
                          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800 shrink-0">
                            <button
                              type="button"
                              onClick={() => changeTier(service.id, 'estandar')}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-colors ${
                                selection.tier === 'estandar' 
                                  ? 'bg-zinc-700 text-white' 
                                  : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              Estándar
                            </button>
                            <button
                              type="button"
                              onClick={() => changeTier(service.id, 'luxury')}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-colors ${
                                selection.tier === 'luxury' 
                                  ? 'bg-amber-400 text-zinc-950 font-bold' 
                                  : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              Luxury
                            </button>
                            <button
                              type="button"
                              onClick={() => changeTier(service.id, 'ultra_vip')}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold transition-colors ${
                                selection.tier === 'ultra_vip' 
                                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 font-bold' 
                                  : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              Ultra VIP
                            </button>
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CONTACT FORM AT STEP 2 */}
              <form onSubmit={handleSubmitQuote} className="pt-4 border-t border-zinc-800 space-y-4">
                <h4 className="text-xs font-mono uppercase text-amber-400">Datos para enviar el Resumen Oficial</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre Completo *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Empresa / Organización"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp / Teléfono *"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Correo Electrónico *"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Detalles adicionales, requerimientos especiales o dudas..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs focus:outline-none focus:border-amber-400"
                />

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-xs text-zinc-400 hover:text-white"
                  >
                    ← Regresar
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Procesando Cotización...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Generar Cotización Instantánea
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          )}

          {/* STEP 3: FINAL QUOTE RECEIPT & EXPORT */}
          {step === 3 && quoteGenerated && (
            <div className="space-y-6 text-center py-2 animate-in fade-in zoom-in-95 duration-300">
              
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  Cotización Ref: #{leadReference}
                </span>
                <h3 className="text-2xl font-black text-white font-poppins">
                  ¡Cotización Generada con Éxito!
                </h3>
                <p className="text-xs text-zinc-300 max-w-lg mx-auto mt-2">
                  Hemos procesado los parámetros para <strong className="text-white">{eventType}</strong> en <strong className="text-white">{city}</strong> para {guestsCount} asistentes.
                </p>
              </div>

              {/* RECEIPT CARD */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-left max-w-xl mx-auto space-y-4 shadow-2xl">
                <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-mono block">Cliente / Empresa</span>
                    <span className="text-sm font-bold text-white">{clientName} {clientCompany ? `(${clientCompany})` : ''}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-400 uppercase font-mono block">Validez de Oferta</span>
                    <span className="text-xs font-mono text-amber-400 font-semibold">15 Días</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-[10px] text-amber-400 font-mono uppercase">Desglose de Servicios Seleccionados:</div>
                  {(Object.entries(selectedServices) as [string, ServiceSelection][])
                    .filter(([_, val]) => val.enabled)
                    .map(([id, val]) => {
                      const sObj = SERVICES_DATA.find(s => s.id === id);
                      return (
                        <div key={id} className="flex justify-between items-center py-1 border-b border-zinc-900">
                          <span className="text-zinc-300 font-medium">{sObj?.name}</span>
                          <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded uppercase">
                            Tier {val.tier.replace('_', ' ')}
                          </span>
                        </div>
                      );
                    })}
                </div>

                <div className="pt-3 border-t border-zinc-800 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase font-mono block">Inversión Estimada Total</span>
                    <span className="text-2xl font-black text-amber-400 font-poppins">
                      ${totalUSD.toLocaleString()} USD
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-mono text-zinc-400 block">
                      ~${totalCOP.toLocaleString()} COP
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono">Incluye transporte y montaje</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsAppQuote}
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enviar Cotización por WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handlePrintQuote}
                  className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs tracking-wider flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  Descargar / Imprimir PDF
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

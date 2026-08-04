import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, Loader2, Calculator } from 'lucide-react';

interface AIChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AIChatWidget: React.FC<AIChatWidgetProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: '¡Hola! Soy CyC AI Assist, tu asesor virtual inteligente en producción de eventos. ¿Qué tipo de evento estás planeando y cuántos asistentes esperas?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');

    const userMsg: ChatMessage = {
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat-ia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          prompt: userText,
          contextHistory: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text,
            parts: [{ text: m.text }]
          })),
          history: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });

      const data = await response.json();
      const aiResponse = data.reply || 'Disculpa, ocurrió una breve interrupción. Por favor déjanos tu número y un asesor humano te llamará de inmediato.';

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: aiResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: 'Para un cálculo preciso de equipos y sonido según los metros cuadrados de tu espacio, te recomiendo abrir nuestro Cotizador Inteligente en Vivo.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-zinc-900 border-l border-amber-500/30 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      
      {/* HEADER */}
      <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-600 text-zinc-950 flex items-center justify-center font-bold shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white font-poppins flex items-center gap-1.5">
              CyC AI Assist
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </h3>
            <p className="text-[10px] text-zinc-400 font-mono">Asesor Inteligente en Producción & Logística</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* CHAT MESSAGES BODY */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar bg-zinc-950/60">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
              msg.sender === 'user' 
                ? 'bg-amber-400 text-zinc-950' 
                : 'bg-zinc-800 text-amber-400 border border-amber-400/30'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
            </div>

            <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-amber-400 text-zinc-950 font-medium'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-200'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <span className={`text-[9px] font-mono block mt-1 ${
                msg.sender === 'user' ? 'text-zinc-800 text-right' : 'text-zinc-500'
              }`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800 w-fit">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Analizando requerimientos técnicos...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* QUICK SUGGESTIONS & COTIZAR TRIGGER */}
      <div className="p-3 bg-zinc-950 border-t border-zinc-800 space-y-2">
        <button
          onClick={() => {
            onClose();
            onOpenQuoteModal();
          }}
          className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
        >
          <Calculator className="w-4 h-4" />
          Abrir Cotizador Inteligente Oficial
        </button>

        {/* INPUT FORM */}
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            placeholder="Pregunta por sonido, pantallas, costos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold transition-transform hover:scale-105 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};

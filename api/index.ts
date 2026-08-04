import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Gemini AI initialization warning:', err);
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'CyC Producciones',
    aiEnabled: !!ai,
    timestamp: new Date().toISOString(),
  });
});

// AI Chat endpoint
app.post('/api/chat-ia', async (req, res) => {
  try {
    const { message, prompt, contextHistory = [], history = [] } = req.body;
    const userQuery = message || prompt;

    if (!userQuery) {
      return res.status(400).json({ error: 'Message or prompt is required' });
    }

    if (!ai && process.env.GEMINI_API_KEY) {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: { 'User-Agent': 'aistudio-build' },
        },
      });
    }

    if (!ai) {
      return res.json({
        reply: `¡Hola! Gracias por consultar con CyC Producciones. Para asesorarte con "${userQuery}", te recomendamos considerar nuestras pantallas LED 4K UHD, sistemas de sonido Line Array y estructuras modulares para eventos. Por favor contáctanos al WhatsApp +57 300 497 8810 para una cotización inmediata y personalizada.`,
        suggestedService: 'Eventos Corporativos',
        estimatedBudgetRange: '$1,500 - $4,500 USD',
      });
    }

    const systemPrompt = `Eres "CyC Assist", el Asistente Experto en Producción Técnica y Logística de Eventos de la empresa CyC Producciones (C&C Producciones).
Tu misión es brindar asesoría técnica de nivel Apple + Tesla + Luxury Event Production a clientes corporativos, productores, organizadores de bodas y marcas.

Servicios de CyC Producciones:
1. Sonido Profesional (Line Array, Consolas Digitales, Microfonía inalámbrica Sennheiser/Shure)
2. Eventos Corporativos (Congresos, Lanzamientos, Ferias, Activaciones)
3. Decoración de Eventos (Iluminación arquitectónica, estructuras luxury, backing)
4. Carpas (Tensionadas, Domos, Estructuras de alto impacto)
5. Tarimas (Modulares, Escenarios de alto tonelaje)
6. Pantallas LED (Indoor/Outdoor, P2.5/P3.9, Full HD & 4K UHD)
7. Pasarelas (Moda, Presentaciones)
8. Escenarios (Renders 3D, Eventos masivos, Roof trusses)
9. Pistas de Baile (LED Interactivas, Madera pulida, Vinilo)
10. Material POP & Stands (Backings, Termos, Gorras, Banderas, Banners)

Inspiración y tono:
- Sumamente profesional, elegante, seguro, eficiente y persuasivo.
- Da detalles técnicos concretos cuando el usuario mencione número de asistentes o metros cuadrados.
- Invita siempre a solicitar cotización formal en la web o vía WhatsApp (+57 300 497 8810).
- Mantén tus respuestas concisas (máximo 150-200 palabras) estructuradas con viñetas elegantes.`;

    const combinedHistory = contextHistory.length > 0 ? contextHistory : history;
    const contentsArray = combinedHistory.map((item: { role: string; content?: string; text?: string; parts?: { text: string }[] }) => {
      let text = item.content || item.text || '';
      if (!text && item.parts && item.parts.length > 0) {
        text = item.parts[0].text;
      }
      return {
        role: item.role === 'user' ? 'user' : 'model',
        parts: [{ text }],
      };
    });

    contentsArray.push({
      role: 'user',
      parts: [{ text: userQuery }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: contentsArray,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'Con gusto coordinamos la logística técnica completa para tu evento.';
    return res.json({ reply });
  } catch (err: unknown) {
    console.error('Error in /api/chat-ia:', err);
    return res.json({
      reply: 'Gracias por tu mensaje. Para darte la propuesta técnica exacta según los requerimientos de tu evento, nuestro equipo de producción está listo en WhatsApp: +57 300 497 8810.',
    });
  }
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, company, city, eventType, eventDate, guestsCount } = req.body;
  const leadId = `CYC-${Date.now().toString().slice(-6)}`;

  res.json({
    success: true,
    leadId,
    message: `¡Gracias ${name || 'Cliente'}! Tu solicitud #${leadId} ha sido recibida con éxito. Un productor ejecutivo de CyC Producciones te contactará a la brevedad.`,
    summary: {
      client: name,
      eventType,
      eventDate,
      estimatedGuests: guestsCount,
      city,
      company,
    },
  });
});

// Dynamic Sitemap
app.get('/api/seo-sitemap', (req, res) => {
  const baseUrl = process.env.APP_URL || 'https://cycproducciones.com';
  const services = [
    'sonido-profesional',
    'eventos-corporativos',
    'decoracion-eventos',
    'carpas',
    'tarimas',
    'pantallas-led',
    'pasarelas',
    'escenarios',
    'pistas-de-baile',
    'material-pop',
  ];

  const urls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/quienes-somos`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${baseUrl}/portafolio`, priority: '0.9', changefreq: 'weekly' },
    { loc: `${baseUrl}/cotizador`, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/proceso`, priority: '0.7', changefreq: 'monthly' },
    { loc: `${baseUrl}/blog`, priority: '0.8', changefreq: 'weekly' },
    { loc: `${baseUrl}/contacto`, priority: '0.9', changefreq: 'monthly' },
    ...services.map((s) => ({
      loc: `${baseUrl}/servicios/${s}`,
      priority: '0.95',
      changefreq: 'weekly',
    })),
  ];

  res.json({
    totalUrls: urls.length,
    generatedAt: new Date().toISOString(),
    urls,
  });
});

export default app;

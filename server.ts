import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

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

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'CyC Producciones',
    aiEnabled: !!ai,
    timestamp: new Date().toISOString(),
  });
});

// AI Event Planning Assistant Endpoint
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
      // Fallback response if key is missing
      return res.json({
        reply: `¡Hola! Gracias por consultar con CyC Producciones. Para un evento con "${userQuery}", te recomendamos considerar nuestras pantallas LED 4K UHD, sistemas de sonido Line Array d&b/L-Acoustics y tarimas modulares. Por favor contáctanos al WhatsApp +57 300 497 8810 para una asesoría técnica personalizada.`,
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
- Da detalles técnicos concretos (ej. decibeles, píxel pitch, luxes, capacidad de metros cuadrados) cuando el usuario mencione número de asistentes o metros cuadrados.
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
      reply: 'Gracias por consultar con CyC Producciones. Nuestro equipo de ingenieros de eventos está disponible en WhatsApp (+57 300 497 8810) para entregarte una propuesta técnica inmediata.',
    });
  }
});

// Smart Lead Submission Endpoint
app.post('/api/contact', (req, res) => {
  const { name, company, city, email, phone, eventType, eventDate, guestsCount, budget, message } = req.body;

  // Lead registration simulation
  const leadId = `CYC-${Date.now().toString().slice(-6)}`;
  console.log(`[CyC Lead Received]: ${leadId} from ${name} (${company || 'Personal'}) - ${eventType}`);

  res.json({
    success: true,
    leadId,
    message: `¡Gracias ${name}! Tu solicitud #${leadId} ha sido recibida con éxito. Un productor ejecutivo de CyC Producciones te contactará en menos de 15 minutos.`,
    summary: {
      client: name,
      eventType,
      eventDate,
      estimatedGuests: guestsCount,
    },
  });
});

// Dynamic Sitemap Endpoint
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

// Vite server setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT} for CyC Producciones`);
  });
}

startServer();

import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini client server-side
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// API route for generating pedagogical content, Conceptests, or active learning prompts
app.post('/api/gemini/generate-pedagogical-content', async (req, res) => {
  try {
    if (!ai) {
      return res.status(500).json({
        error: 'API key not configured server-side. Set GEMINI_API_KEY in environment variables.',
      });
    }

    const { type, topic, targetAudience, customContext } = req.body;

    let systemInstruction = `Você é um assistente pedagógico sênior especialista no currículo do Ensino Médio da Secretaria de Estado da Educação do Espírito Santo (SEDU/ES - 2026).
Sua função é auxiliar professores da EEEFM "Antônio dos Santos Neves" (Vitória/ES) no planejamento de projetos integradores, sequências didáticas e avaliações formativas em Matemática, Física, Química e Biologia.

DIRETRIZES OBRIGATÓRIAS A INCORPORAR EM TODAS AS RESPOSTAS:
1. Os 4 Pilares da Educação (UNESCO):
   - Aprender a Saber (Fundamentos científicos, conceitos e dados)
   - Aprender a Fazer (Experimentação, prototipagem, sensores e programação)
   - Aprender a Viver Juntos (Diversidade, empatia, justiça social e combate ao racismo)
   - Aprender a Ser (Autonomia, ética digital e protagonismo)
2. Educação para as Relações Étnico-Raciais (ERER - Leis 10.639/03 e 11.645/08):
   - Valorização da etnoastronomia, etnobotânica, racismo ambiental nas cidades e contribuições da ciência/tecnologia ancestral quilombola, negra e indígena (ex: Tupiniquim, Guarani e Quilombos do Sapê do Norte/ES).
3. Educação Inclusiva & Desenho Universal para a Aprendizagem (DUA):
   - Múltiplos meios de representação (visuais, auditivos, táteis), ação/expressão e engajamento para acesso universal (incluindo estudantes com deficiência).
4. Pensamento Computacional:
   - Uso de planilhas de dados, simulações interativas, sensores físicos (Arduino) e modelos matemáticos.`;

    let prompt = '';

    if (type === 'conceptest') {
      prompt = `Elabore 2 questões de múltipla escolha no formato Conceptest (Peer Instruction / Plickers) sobre o tema: "${topic || 'Potência Elétrica e Eficiência Energética'}".
Para cada questão forneça:
1. Enunciado instigante (situação-problema da vida real ou ambiente escolar);
2. 4 alternativas (A, B, C, D) com distratores baseados em concepções alternativas comuns dos alunos;
3. A resposta correta;
4. Uma justificativa física/matemática/química detalhada para mediação do professor no debate de pares (Peer Instruction).`;
    } else if (type === 'inquiry') {
      prompt = `Crie um roteiro de Investigação Científica Rápida (15-20 minutos) para ser executado no laboratório ou sala da EEEFM Antônio dos Santos Neves sobre: "${topic || 'Consumo Energético de Eletrodomésticos na Escola'}".
Inclua:
- Pergunta disparadora de impacto;
- Hipóteses a testar pelos alunos;
- Materiais necessários (medidores de tomada / multímetro / plaquetas Procel / simulação);
- Passos de coleta de dados e tabela de registros;
- Perguntas para discussão em grupo.`;
    } else if (type === 'action-plan') {
      prompt = `Gere uma proposta de Plano de Ação de Eficiência Energética para a Direção da EEEFM "Antônio dos Santos Neves" com foco em: "${topic || 'Redução do Consumo no Vespertino'}".
Inclua:
- Diagnóstico sintético baseado no levantamento da 3ª V01;
- 3 Medidas de Curto Prazo (Custo Zero / Mudança de Hábitos);
- 2 Medidas de Médio Prazo (Pequeno Investimento, ex: sensores / LED);
- Projeção de redução percentual e retorno financeiro;
- Indicadores socioambientais (redução de pegada de carbono em kg CO2).`;
    } else {
      prompt = `Responda à seguinte solicitação pedagógica relacionada ao Projeto Integrador ASNPI2026: ${customContext || topic}`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({ result: response.text });
  } catch (error: any) {
    console.error('Error in /api/gemini/generate-pedagogical-content:', error);
    return res.status(500).json({ error: error.message || 'Erro ao processar requisição com Gemini.' });
  }
});

// Setup Vite middleware in dev mode
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await vite.transformIndexHtml(
        url,
        `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ASNPI2026 - Eficiência Energética na Escola | EEEFM Antônio dos Santos Neves</title>
    <meta name="description" content="Projeto Integrador Interdisciplinar de Ciências da Natureza e Matemática na EEEFM Antônio dos Santos Neves." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
      );
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
} else {
  // Serve static dist in production
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`ASNPI2026 server running on http://localhost:${PORT}`);
});

import React from 'react';
import { GradeLevel } from '../types/project';
import { PROJECTS_BY_GRADE } from '../data/projectData';
import { Heart, Compass, Accessibility, Cpu, BookOpen, ShieldAlert } from 'lucide-react';

interface ErerDuaHubProps {
  selectedGrade: GradeLevel;
}

export const ErerDuaHub: React.FC<ErerDuaHubProps> = ({ selectedGrade }) => {
  const currentProject = PROJECTS_BY_GRADE[selectedGrade];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-xs font-semibold text-emerald-300 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Matriz SEDU/ES 2026 · Eixos Transversais Obrigatorios</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              ERER, DUA, UNESCO & Pensamento Computacional
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Articulação curricular transversal para {currentProject.gradeTitle} na EEEFM Antônio dos Santos Neves.
            </p>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300">
            <div><strong className="text-white">Leis Federais:</strong> 10.639/03 e 11.645/08</div>
            <div><strong className="text-emerald-400">Desenho Universal:</strong> DUA Ativo</div>
          </div>
        </div>
      </div>

      {/* Grid of the 4 Transversal Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pillar 1: ERER & Racismo Ambiental */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-amber-400 font-bold font-heading text-sm border-b border-slate-800 pb-3">
            <ShieldAlert className="w-5 h-5" />
            <span>1. Relações Étnico-Raciais (ERER) & Justiça Ambiental</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {currentProject.ererHighlight}
          </p>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1.5">
            <span className="font-semibold text-amber-300 block">Conexão Territorial Capixaba:</span>
            <ul className="list-disc list-inside text-slate-400 space-y-1">
              <li>Valorização dos saberes das comunidades quilombolas do Sapê do Norte (ES) e indígenas Tupiniquim e Guarani em Aracruz/ES.</li>
              <li>Análise do racismo ambiental no acesso desigual a parques, arborização e energia limpa nas periferias urbanas.</li>
            </ul>
          </div>
        </div>

        {/* Pillar 2: Desenho Universal para Aprendizagem (DUA) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-cyan-400 font-bold font-heading text-sm border-b border-slate-800 pb-3">
            <Accessibility className="w-5 h-5" />
            <span>2. Desenho Universal para a Aprendizagem (DUA)</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-cyan-300 block font-heading">• Múltiplos Meios de Representação:</strong>
              <span className="text-slate-400">Leitura de dados por contraste alto, representações táteis/experimentais com sensores físicos e infográficos visuais simplificados.</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-cyan-300 block font-heading">• Múltiplos Meios de Ação e Expressão:</strong>
              <span className="text-slate-400">Opção de resposta via cartões físicos Plickers, aplicativo interativo, gravação de áudio ou cartaz impresso.</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-cyan-300 block font-heading">• Múltiplos Meios de Engajamento:</strong>
              <span className="text-slate-400">Trabalho colaborativo em pequenos grupos com papéis rotativos de protagonismo.</span>
            </div>
          </div>
        </div>

        {/* Pillar 3: Os 4 Pilares da Educação (UNESCO) */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-purple-400 font-bold font-heading text-sm border-b border-slate-800 pb-3">
            <Heart className="w-5 h-5" />
            <span>3. Os 4 Pilares da Educação (UNESCO)</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-purple-300 block font-heading">Aprender a Saber:</strong>
              <span className="text-slate-400">Fundamentos de Física, Química, Biologia e Matemática com dados reais.</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-purple-300 block font-heading">Aprender a Fazer:</strong>
              <span className="text-slate-400">Prototipagem com Arduino, medições com Wattímetro e simulações.</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-purple-300 block font-heading">Aprender a Viver Juntos:</strong>
              <span className="text-slate-400">Peer Instruction, escuta empática e combate ao racismo ambiental.</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <strong className="text-purple-300 block font-heading">Aprender a Ser:</strong>
              <span className="text-slate-400">Autonomia, ética digital e liderança comunitária dos estudantes.</span>
            </div>
          </div>
        </div>

        {/* Pillar 4: Pensamento Computacional & Sensores */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
          <div className="flex items-center gap-2.5 text-emerald-400 font-bold font-heading text-sm border-b border-slate-800 pb-3">
            <Cpu className="w-5 h-5" />
            <span>4. Pensamento Computacional & Informática</span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
            <span className="font-semibold text-emerald-300 block font-heading">Aplicações Tecnológicas no Projeto:</span>
            <ul className="list-disc list-inside text-slate-400 space-y-1">
              <li><strong>Abstração e Decomposição:</strong> Modelagem da função afim f(x) = ax + b e equações exponenciais C(t) = C₀ · e⁻ᵏᵗ.</li>
              <li><strong>Prototipagem com Sensores:</strong> Coleta física de corrente/tensão com Arduino e sensor SCT-013 / termômetros infravermelhos.</li>
              <li><strong>Análise de Dados em Planilhas:</strong> Tabulação de matrizes de consumo e temperaturas para plotagem de curvas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { GradeLevel } from '../types/project';
import { PROJECTS_BY_GRADE } from '../data/projectData';
import { SchoolCrest } from './SchoolCrest';
import { FileText, Download, CheckCircle2, Award, Printer, Share2 } from 'lucide-react';

interface ActionPlanGeneratorProps {
  selectedGrade: GradeLevel;
}

export const ActionPlanGenerator: React.FC<ActionPlanGeneratorProps> = ({ selectedGrade }) => {
  const currentProject = PROJECTS_BY_GRADE[selectedGrade];
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handlePrint = () => {
    setIsExporting(true);
    setTimeout(() => {
      window.print();
      setIsExporting(false);
    }, 300);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md text-xs font-semibold text-amber-300 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Produto Final do Projeto Integrador · Culminância</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              {selectedGrade === '1a_serie' && 'Infográfico Executivo & Plano de Ação de Eficiência'}
              {selectedGrade === '2a_serie' && 'Mapa de Calor & Proposta de Intervenção Bioclimática'}
              {selectedGrade === '3a_serie' && 'Cartilha de Orientação do Uso Racional de Medicamentos'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Proposta executiva pronta para impressão e apresentação à Direção e Comunidade Escolar da EEEFM Antônio dos Santos Neves.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 whitespace-nowrap self-start sm:self-auto"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Exportar PDF</span>
          </button>
        </div>
      </div>

      {/* Exec Report Document Container (Printable) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-200">
        {/* Document Header with Official School Crest */}
        <div className="border-b border-slate-800 pb-6 text-center space-y-3 flex flex-col items-center">
          <SchoolCrest className="w-12 h-12 mb-1" />
          <span className="text-xs font-bold text-amber-400 font-heading uppercase tracking-widest block">
            GOVERNO DO ESTADO DO ESPÍRITO SANTO · SEDU/ES
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
            EEEFM "ANTÔNIO DOS SANTOS NEVES" · BOA ESPERANÇA
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            {currentProject.gradeTitle} · Turno Vespertino · Projeto Integrador ASNPI2026
          </p>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-heading border-b border-slate-800/80 pb-1">
            1. Diagnóstico Executivo & Objetivos
          </h4>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
            {currentProject.objective}
          </p>
        </div>

        {/* Key Measures Table */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider font-heading border-b border-slate-800/80 pb-1">
            2. Medidas Prioritárias de Intervenção
          </h4>

          {selectedGrade === '1a_serie' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 block font-heading">
                  • Curto Prazo (Custo Zero / Mudança de Hábitos):
                </span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Desligar iluminação e projetores nos intervalos e no fim das aulas.</li>
                  <li>Manter portas e janelas fechadas durante uso do ar-condicionado.</li>
                  <li>Ajustar o termostato do ar-condicionado para a faixa sustentável de 23°C.</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 block font-heading">
                  • Médio/Longo Prazo (Investimento com Payback Garantido):
                </span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Substituir 56 lâmpadas fluorescentes T8 por LED (Payback em 8 meses).</li>
                  <li>Instalar inversores e sensores de presença nos corredores.</li>
                  <li>Instalar painéis solares fotovoltaicos no telhado principal.</li>
                </ul>
              </div>
            </div>
          )}

          {selectedGrade === '2a_serie' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-rose-400 block font-heading">
                  • Desimpermeabilização & Infraestrutura Verde:
                </span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Plantio de 12 mudas de árvores nativas da Mata Atlântica no pátio.</li>
                  <li>Instalação de Jardins Verticais nos corredores expostos ao sol da tarde.</li>
                  <li>Substituição de piso cimentado por paver permeável com grama.</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 block font-heading">
                  • Pintura Térmica Refletiva (Cool Roofs):
                </span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Aplicação de tinta acrílica branca de alto albedo (0.80) no telhado metálico.</li>
                  <li>Redução estimada de até 6°C na temperatura de superfície da cobertura.</li>
                </ul>
              </div>
            </div>
          )}

          {selectedGrade === '3a_serie' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-cyan-400 block font-heading">
                  • Regras de Ouro do Uso Racional:
                </span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Respeitar rigorosamente o intervalo de meia-vida do fármaco (6h, 8h, 12h).</li>
                  <li>Jamais interromper o tratamento com antibióticos antes do prazo estipulado.</li>
                  <li>Não ingerir medicamentos com bebidas alcoólicas ou refrigerantes ácidos.</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-amber-400 block font-heading">
                  • Descarte Seguro e Conscientização:
                </span>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>Entregar remédios vencidos em pontos de coleta nas farmácias e postos de saúde.</li>
                  <li>Evitar contaminação do lençol freático e do esgoto doméstico.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Signatures Footer */}
        <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-xs text-slate-400">
          <div>
            <div className="border-b border-slate-700 mb-1 pb-4 font-semibold text-slate-200">
              Estudantes Representantes
            </div>
            <span>Turma {currentProject.targetTurma}</span>
          </div>

          <div>
            <div className="border-b border-slate-700 mb-1 pb-4 font-semibold text-slate-200">
              Corpo Docente Integrador
            </div>
            <span>Física, Química, Biologia, Matemática</span>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="border-b border-slate-700 mb-1 pb-4 font-semibold text-slate-200">
              Equipe Gestora Escolar
            </div>
            <span>EEEFM Antônio dos Santos Neves</span>
          </div>
        </div>
      </div>
    </div>
  );
};

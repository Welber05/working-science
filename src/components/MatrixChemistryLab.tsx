import React, { useState } from 'react';
import { ENERGY_MATRIX_SOURCES } from '../data/projectData';
import { Flame, Droplets, Pill, CheckCircle2, Info } from 'lucide-react';

export const MatrixChemistryLab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'1a' | '2a' | '3a'>('1a');

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md text-xs font-semibold text-amber-300 mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Laboratório de Química & Biologia Interdisciplinar</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Aplicações Químicas e Biológicas dos Projetos Integradores
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Estudo das reações de combustão e emissões de $CO_2$ (1ª Série), condutividade e umidade urbana (2ª Série) e química orgânica de fármacos (3ª Série).
            </p>
          </div>

          {/* Sub-tab Selector */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveSubTab('1a')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === '1a' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              1ª Série (Matrizes & $CO_2$)
            </button>
            <button
              onClick={() => setActiveSubTab('2a')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === '2a' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              2ª Série (Microclima)
            </button>
            <button
              onClick={() => setActiveSubTab('3a')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeSubTab === '3a' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              3ª Série (Fármacos)
            </button>
          </div>
        </div>
      </div>

      {/* Sub-tab Content: 1ª Série */}
      {activeSubTab === '1a' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Reações de Combustão Completa & Estequiometria de Carbono</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                <span className="text-xs font-bold text-amber-400 font-heading block">
                  1. Gás Natural (Metano $CH_4$ - Usina Termelétrica)
                </span>
                <div className="font-mono text-sm text-amber-300 font-bold bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                  $CH_4 + 2 O_2 \rightarrow CO_2 + 2 H_2O + \Delta H$ (-890 kJ/mol)
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A queima de 16g de metano produz 44g de $CO_2$. No Sistema Interligado Nacional, a geração termelétrica a gás lança cerca de <strong>490g de $CO_2$ por cada kWh</strong>.
                </p>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                <span className="text-xs font-bold text-emerald-400 font-heading block">
                  2. Biomassa Vegetal (Bagaço de Cana / Madeira)
                </span>
                <div className="font-mono text-sm text-emerald-300 font-bold bg-slate-900 p-3 rounded-lg border border-slate-800 text-center">
                  $(C_6H_{10}O_5)_n + 6n O_2 \rightarrow 6n CO_2 + 5n H_2O$
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Embora emita $CO_2$ na chaminé, o carbono foi absorvido recentemente da atmosfera via fotossíntese, tornando o ciclo renovável e neutro.
                </p>
              </div>
            </div>
          </div>

          {/* Energy Matrix Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ENERGY_MATRIX_SOURCES.map((source) => (
              <div key={source.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="text-sm font-bold text-white font-heading">{source.name}</h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                    source.type === 'Renovável' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {source.type}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  <div>Participação Brasil: <strong className="text-amber-300">{source.shareBrazilPercentage}%</strong></div>
                  <div>Participação ES: <strong className="text-blue-300">{source.shareESPercentage}%</strong></div>
                  <div>Emissão de GEE: <strong className="text-rose-300">{source.co2GramsPerKwh} g CO2/kWh</strong></div>
                  <div>Custo Médio: <strong className="text-emerald-300">R$ {source.costPerMwh}/MWh</strong></div>
                </div>

                <div className="space-y-1 text-xs pt-2">
                  <span className="font-semibold text-emerald-400 block">Vantagens:</span>
                  <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                    {source.pros.map((p, idx) => <li key={idx}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab Content: 2ª Série */}
      {activeSubTab === '2a' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
            <Droplets className="w-4 h-4 text-rose-400" />
            <span>Físico-Química do Ar Urbano & Condutividade Térmica</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-rose-300 text-sm block font-heading">
                1. Pressão de Saturação de Vapor d'Água
              </span>
              <p className="text-slate-300 leading-relaxed">
                À medida que a temperatura do ar sobe nas superfícies asfaltadas, a capacidade máxima do ar de reter vapor d'água em equilíbrio químico aumenta exponencialmente (Equação de Clausius-Clapeyron).
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-emerald-300 text-sm block font-heading">
                2. Inércia Térmica e Calor Específico ($Q = m \cdot c \cdot \Delta T$)
              </span>
              <p className="text-slate-300 leading-relaxed">
                A água líquida possui calor específico elevado ($c = 1,0 cal/g°C$), enquanto o asfalto possui calor específico de apenas $0,22 cal/g°C$, aquecendo quase 5 vezes mais rápido sob o mesmo fluxo solar.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sub-tab Content: 3ª Série */}
      {activeSubTab === '3a' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
            <Pill className="w-4 h-4 text-cyan-400" />
            <span>Química Orgânica dos Medicamentos & Polaridade</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-cyan-300 text-sm block font-heading">
                1. Grupos Funcionais & Ligação ao Receptor
              </span>
              <p className="text-slate-300 leading-relaxed">
                Princípios ativos utilizam ligações de hidrogênio (grupos -OH, -NH-) e forças de van der Waals para se acoplarem estereoespecificamente às proteínas receptoras das membranas celulares.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="font-bold text-amber-300 text-sm block font-heading">
                2. Coeficiente de Partição Octanol-Água (K_ow)
              </span>
              <p className="text-slate-300 leading-relaxed">
                Mede a lipofilicidade do fármaco: quanto maior o K_ow, mais fácil o remédio atravessa as bicamadas lipídicas das membranas biológicas do intestino e da barreira hematoencefálica.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

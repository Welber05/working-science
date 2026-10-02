import React, { useState } from 'react';
import { DRUG_PROFILES } from '../data/projectData';
import { Pill, Activity, AlertTriangle, ShieldCheck, Clock, RefreshCw } from 'lucide-react';

export const PharmacokineticsSimulator: React.FC = () => {
  const [selectedDrugId, setSelectedDrugId] = useState<string>('paracetamol');
  const [doseMg, setDoseMg] = useState<number>(500);
  const [intervalHours, setIntervalHours] = useState<number>(6);
  const [numberOfDoses, setNumberOfDoses] = useState<number>(3);

  const selectedDrug = DRUG_PROFILES.find(d => d.id === selectedDrugId) || DRUG_PROFILES[0];

  // Elimination constant k = ln(2) / t1/2
  const k = Math.LN2 / selectedDrug.halfLifeHours;

  // Initial peak concentration C0 = Dose(mg) / VolumeDistribution(L)
  // Assuming V_d approx 20L for adult plasma simulation
  const volumeDistribution = 20; 
  const c0 = doseMg / volumeDistribution; // mg/L

  // Generate concentration vs time points for 0 to 36 hours
  const totalSimHours = 36;
  const timePoints = Array.from({ length: 73 }, (_, i) => i * 0.5); // Every 30 min

  const concentrationPoints = timePoints.map((t) => {
    let currentConc = 0;
    // Sum concentrations from all administered doses up to time t
    for (let d = 0; d < numberOfDoses; d++) {
      const doseTime = d * intervalHours;
      if (t >= doseTime) {
        const timeSinceDose = t - doseTime;
        currentConc += c0 * Math.exp(-k * timeSinceDose);
      }
    }
    return { t, conc: Math.round(currentConc * 10) / 10 };
  });

  const maxPeakConc = Math.max(...concentrationPoints.map(p => p.conc));
  const isToxic = maxPeakConc >= selectedDrug.toxicConcentration;
  const isEffective = maxPeakConc >= selectedDrug.therapeuticWindowMin;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md text-xs font-semibold text-blue-300 mb-2">
              <Pill className="w-3.5 h-3.5 text-amber-400" />
              <span>3ª Série · Simulador Farmacocinético</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Farmacocinética & Curva Concentração-Tempo
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Modelagem por função exponencial de decaimento C(t) = C₀ · e⁻ᵏᵗ, meia-vida (t½), dosagem repetida e janela terapêutica.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-right min-w-[220px]">
            <span className="text-xs text-slate-400 uppercase font-semibold block">Pico Plasmático Máximo</span>
            <div className={`text-3xl font-extrabold font-heading ${
              isToxic ? 'text-rose-400' : isEffective ? 'text-emerald-400' : 'text-amber-400'
            }`}>
              {maxPeakConc} mg/L
            </div>
            <span className="text-xs font-medium block mt-0.5">
              {isToxic ? (
                <span className="text-rose-400 font-bold flex items-center justify-end gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> 🛑 Risco Toxicidade!
                </span>
              ) : isEffective ? (
                <span className="text-emerald-400 font-semibold flex items-center justify-end gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> ✅ Janela Terapêutica Ok
                </span>
              ) : (
                <span className="text-amber-400 font-semibold">⚠️ Dose Subterapêutica</span>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Seleção do Princípio Ativo & Posologia</span>
          </h3>

          {/* Drug Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 block">
              Medicamento Principial:
            </label>
            <div className="space-y-2">
              {DRUG_PROFILES.map((drug) => (
                <button
                  key={drug.id}
                  onClick={() => {
                    setSelectedDrugId(drug.id);
                    setDoseMg(drug.standardDoseMg);
                    setIntervalHours(drug.dosingIntervalHours);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between ${
                    selectedDrugId === drug.id
                      ? 'bg-cyan-500/15 border-cyan-500/50 text-white font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <span className="block font-bold text-white">{drug.name}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{drug.commercialNames}</span>
                  </div>
                  <div className="text-right font-mono text-[11px]">
                    <span className="block text-cyan-300">t½ = {drug.halfLifeHours}h</span>
                    <span className="text-slate-500">{drug.primaryOrganExcretion}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dose Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Dose Administrada (mg):</label>
              <span className="font-bold text-cyan-400 font-mono">{doseMg} mg</span>
            </div>
            <input
              type="range"
              min="100"
              max="1500"
              step="50"
              value={doseMg}
              onChange={(e) => setDoseMg(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Dosing Interval Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Intervalo entre Doses (horas):</label>
              <span className="font-bold text-amber-400 font-mono">De {intervalHours} em {intervalHours} horas</span>
            </div>
            <input
              type="range"
              min="2"
              max="24"
              step="2"
              value={intervalHours}
              onChange={(e) => setIntervalHours(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Number of Doses */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Número de Doses Repetidas:</label>
              <span className="font-bold text-purple-400 font-mono">{numberOfDoses} doses</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setNumberOfDoses(num)}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    numberOfDoses === num
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {num} {num === 1 ? 'Dose' : 'Doses'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart & Analysis Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Kinetic Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Meia-Vida (t½)</span>
              <span className="text-xl font-bold text-white font-heading font-mono">{selectedDrug.halfLifeHours} h</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <RefreshCw className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Constante k</span>
              <span className="text-xl font-bold text-white font-heading font-mono">{k.toFixed(3)} h⁻¹</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Janela Terapêutica</span>
              <span className="text-xs font-bold text-emerald-300 font-mono mt-1 block">
                {selectedDrug.therapeuticWindowMin} - {selectedDrug.therapeuticWindowMax} mg/L
              </span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <AlertTriangle className="w-5 h-5 text-rose-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Limite Tóxico</span>
              <span className="text-xl font-bold text-rose-300 font-heading font-mono">&gt;{selectedDrug.toxicConcentration} mg/L</span>
            </div>
          </div>

          {/* Interactive Concentration vs Time SVG Curve */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">
                Curva Exponencial de Concentração Plasmática C(t) (0h a 36h)
              </h4>
              <span className="text-xs text-slate-500 font-mono">Resolução 30min</span>
            </div>

            <div className="h-56 w-full relative pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 180">
                {/* Y Axis Max = Max(Toxic, Peak) + 10 */}
                {(() => {
                  const yMax = Math.max(selectedDrug.toxicConcentration + 10, maxPeakConc + 10);

                  // Coordinate mappers
                  const mapX = (t: number) => 40 + (t / totalSimHours) * 340;
                  const mapY = (c: number) => 160 - (c / yMax) * 140;

                  // Band for Therapeutic Window
                  const yMinTherap = mapY(selectedDrug.therapeuticWindowMin);
                  const yMaxTherap = mapY(selectedDrug.therapeuticWindowMax);
                  const yToxic = mapY(selectedDrug.toxicConcentration);

                  // Curve Path
                  const pathD = concentrationPoints.reduce((acc, p, i) => {
                    const x = mapX(p.t);
                    const y = mapY(p.conc);
                    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
                  }, '');

                  return (
                    <>
                      {/* Therapeutic Window Fill Band */}
                      <rect
                        x="40"
                        y={yMaxTherap}
                        width="340"
                        height={Math.max(0, yMinTherap - yMaxTherap)}
                        fill="#10b981"
                        fillOpacity="0.12"
                      />

                      {/* Toxic Threshold Line */}
                      <line x1="40" y1={yToxic} x2="380" y2={yToxic} stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 4" />
                      <text x="382" y={yToxic + 3} fill="#f43f5e" fontSize="9" fontWeight="bold">Tóxico</text>

                      {/* Minimum Effective Threshold Line */}
                      <line x1="40" y1={yMinTherap} x2="380" y2={yMinTherap} stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Grid Lines */}
                      <line x1="40" y1="160" x2="380" y2="160" stroke="#475569" />

                      {/* Y Axis Labels */}
                      <text x="32" y={yToxic + 3} fill="#f43f5e" fontSize="9" textAnchor="end">{selectedDrug.toxicConcentration}</text>
                      <text x="32" y={yMinTherap + 3} fill="#10b981" fontSize="9" textAnchor="end">{selectedDrug.therapeuticWindowMin}</text>
                      <text x="32" y="164" fill="#94a3b8" fontSize="9" textAnchor="end">0</text>

                      {/* Main Concentration Curve */}
                      <path d={pathD} fill="none" stroke="#06b6d4" strokeWidth="2.5" />

                      {/* Dose Administration Markers */}
                      {Array.from({ length: numberOfDoses }).map((_, d) => {
                        const doseT = d * intervalHours;
                        if (doseT <= totalSimHours) {
                          const x = mapX(doseT);
                          return (
                            <g key={d}>
                              <line x1={x} y1="20" x2={x} y2="160" stroke="#a855f7" strokeDasharray="2 2" opacity="0.7" />
                              <text x={x} y="15" fill="#c084fc" fontSize="9" textAnchor="middle" fontWeight="bold">
                                {d + 1}ª Dose
                              </text>
                            </g>
                          );
                        }
                        return null;
                      })}
                    </>
                  );
                })()}
              </svg>
            </div>

            <div className="flex justify-between text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
              <span>0h (Início)</span>
              <span>12h</span>
              <span>24h</span>
              <span>36h</span>
            </div>
          </div>

          {/* Educational Summary Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              💡 Raciocínio Matemático e Farmacológico
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              A cada meia-vida de <strong>{selectedDrug.halfLifeHours} horas</strong>, o organismo elimina 50% da quantidade do princípio ativo ({selectedDrug.name}) presente na corrente sanguínea.
              Quando a dose é repetida antes do medicamento ser totalmente eliminado, ocorre <strong>acúmulo plasmático</strong> que busca estabilizar o fármaco dentro da Janela Terapêutica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

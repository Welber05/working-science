import React, { useState } from 'react';
import { SURFACE_MATERIALS, MICROCLIMATE_MEASUREMENTS } from '../data/projectData';
import { Flame, Sun, Droplets, Thermometer, ShieldCheck, Info } from 'lucide-react';

export const HeatIslandSimulator: React.FC = () => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('asfalto');
  const [vegetationCoverage, setVegetationCoverage] = useState<number>(10); // 0 to 100%
  const [ambientBaseTemp, setAmbientBaseTemp] = useState<number>(30); // Base solar temp °C
  const [timeOfDay, setTimeOfDay] = useState<string>('14:30');

  const selectedMaterial = SURFACE_MATERIALS.find(m => m.id === selectedMaterialId) || SURFACE_MATERIALS[0];

  // Physics & Environmental Calculations
  // Surface temp = Base + (1 - Albedo) * 22 * (1 - Veg/100 * 0.4)
  const surfaceTemp = Math.round((ambientBaseTemp + (1 - selectedMaterial.albedo) * 18 * (1 - (vegetationCoverage / 100) * 0.5)) * 10) / 10;
  
  // Air temp near ground = Base + (surfaceTemp - Base) * 0.35 - (vegetationCoverage * 0.05)
  const airTemp = Math.round((ambientBaseTemp + (surfaceTemp - ambientBaseTemp) * 0.38 - (vegetationCoverage * 0.06)) * 10) / 10;

  // Relative humidity = Base 65% - (airTemp - 25) * 2.8 + (vegetationCoverage * 0.25)
  const relativeHumidity = Math.max(25, Math.min(90, Math.round(65 - (airTemp - 25) * 2.6 + (vegetationCoverage * 0.22))));

  // Heat Index / Perceived Temp
  const perceivedTemp = Math.round((airTemp + (relativeHumidity > 50 ? (relativeHumidity - 50) * 0.12 : 0) + (selectedMaterial.albedo < 0.2 ? 2.5 : 0)) * 10) / 10;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md text-xs font-semibold text-blue-300 mb-2">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>2ª Série · Simulador Microclimático</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Ilhas de Calor Urbanas & Conforto Térmico
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Simule o impacto do Albedo das superfícies, condutividade e porcentagem de vegetação na temperatura e umidade relativa da EEEFM Antônio dos Santos Neves.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-right min-w-[200px]">
            <span className="text-xs text-slate-400 uppercase font-semibold block">Sensação Térmica</span>
            <div className={`text-3xl font-extrabold font-heading ${
              perceivedTemp > 35 ? 'text-rose-400' : perceivedTemp > 30 ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              {perceivedTemp}°C
            </div>
            <span className="text-xs text-slate-400 font-medium">
              {perceivedTemp > 35 ? '⚠️ Estresse Térmico Elevado' : perceivedTemp > 30 ? '⚡ Calor Desconfortável' : '✅ Conforto Adequado'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Parâmetros de Superfície & Cobertura</span>
          </h3>

          {/* Material Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 block">
              Material Predominante do Solo / Telhado:
            </label>
            <div className="space-y-2">
              {SURFACE_MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterialId(mat.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between ${
                    selectedMaterialId === mat.id
                      ? 'bg-rose-500/15 border-rose-500/50 text-white font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full border border-slate-700 shadow-sm shrink-0"
                      style={{ backgroundColor: mat.color }}
                    />
                    <span>{mat.name}</span>
                  </div>
                  <span className="font-mono text-slate-400">Albedo: {mat.albedo}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vegetation Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Cobertura Vegetal (%):</label>
              <span className="font-bold text-emerald-400 font-mono">{vegetationCoverage}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={vegetationCoverage}
              onChange={(e) => setVegetationCoverage(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>0% (100% Asfalto/Concreto)</span>
              <span>50% (Parcial)</span>
              <span>100% (Parque/Jardim)</span>
            </div>
          </div>

          {/* Base Solar Temp Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Temperatura Solar Base (°C):</label>
              <span className="font-bold text-amber-400 font-mono">{ambientBaseTemp}°C</span>
            </div>
            <input
              type="range"
              min="24"
              max="38"
              step="1"
              value={ambientBaseTemp}
              onChange={(e) => setAmbientBaseTemp(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Results & Visualizer Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Indicators Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <Thermometer className="w-5 h-5 text-rose-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Temp. Superfície</span>
              <span className="text-xl font-bold text-white font-heading font-mono">{surfaceTemp}°C</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <Sun className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Temp. do Ar</span>
              <span className="text-xl font-bold text-white font-heading font-mono">{airTemp}°C</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Umidade Relativa</span>
              <span className="text-xl font-bold text-white font-heading font-mono">{relativeHumidity}%</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Albedo Refletido</span>
              <span className="text-xl font-bold text-white font-heading font-mono">{(selectedMaterial.albedo * 100).toFixed(0)}%</span>
            </div>
          </div>

          {/* Interactive Temperature Chart SVG */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">
                Projeção Térmica em Função da Cobertura Vegetal (0% a 100%)
              </h4>
              <span className="text-xs text-slate-500 font-mono">Curva de Atenuação</span>
            </div>

            <div className="h-48 w-full relative pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150">
                {/* Horizontal Grid lines */}
                <line x1="40" y1="20" x2="380" y2="20" stroke="#334155" strokeDasharray="3 3" />
                <line x1="40" y1="60" x2="380" y2="60" stroke="#334155" strokeDasharray="3 3" />
                <line x1="40" y1="100" x2="380" y2="100" stroke="#334155" strokeDasharray="3 3" />
                <line x1="40" y1="140" x2="380" y2="140" stroke="#475569" />

                {/* Y Axis Labels */}
                <text x="30" y="24" fill="#94a3b8" fontSize="10" textAnchor="end">45°C</text>
                <text x="30" y="64" fill="#94a3b8" fontSize="10" textAnchor="end">35°C</text>
                <text x="30" y="104" fill="#94a3b8" fontSize="10" textAnchor="end">25°C</text>
                <text x="30" y="144" fill="#94a3b8" fontSize="10" textAnchor="end">15°C</text>

                {/* Curve Points calculation */}
                {(() => {
                  const points = Array.from({ length: 11 }, (_, i) => {
                    const vegPct = i * 10;
                    const surfT = ambientBaseTemp + (1 - selectedMaterial.albedo) * 18 * (1 - (vegPct / 100) * 0.5);
                    const x = 40 + (vegPct / 100) * 340;
                    // Map 15°C to y=140 and 45°C to y=20
                    const y = 140 - ((surfT - 15) / 30) * 120;
                    return { x, y, surfT, vegPct };
                  });

                  const dPath = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '');
                  const currentX = 40 + (vegetationCoverage / 100) * 340;
                  const currentY = 140 - ((surfaceTemp - 15) / 30) * 120;

                  return (
                    <>
                      <path d={dPath} fill="none" stroke="#f43f5e" strokeWidth="3" />
                      {/* Active point indicator */}
                      <circle cx={currentX} cy={currentY} r="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" />
                      <line x1={currentX} y1="20" x2={currentX} y2="140" stroke="#f43f5e" strokeDasharray="2 2" opacity="0.6" />
                    </>
                  );
                })()}
              </svg>
            </div>

            <div className="flex justify-between text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
              <span>0% Vegetação</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100% Vegetação</span>
            </div>
          </div>

          {/* Microclimate Real Field Data Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-400" />
              <span>Medições Amostrais Reais Coletadas na EEEFM Antônio dos Santos Neves</span>
            </h4>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                    <th className="py-2 px-2">Setor Escolar</th>
                    <th className="py-2 px-2">Superfície</th>
                    <th className="py-2 px-2">Grama %</th>
                    <th className="py-2 px-2">Temp (°C)</th>
                    <th className="py-2 px-2">Umidade (%)</th>
                    <th className="py-2 px-2">Sensação (°C)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {MICROCLIMATE_MEASUREMENTS.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2 px-2 font-medium text-white">{m.locationName}</td>
                      <td className="py-2 px-2 text-slate-400">{m.surfaceType}</td>
                      <td className="py-2 px-2 font-mono text-emerald-400">{m.vegetationPercentage}%</td>
                      <td className="py-2 px-2 font-mono text-rose-300">{m.temperatureCelsius}°C</td>
                      <td className="py-2 px-2 font-mono text-blue-300">{m.relativeHumidityPercentage}%</td>
                      <td className="py-2 px-2 font-mono text-amber-300 font-bold">{m.perceivedTemperatureCelsius}°C</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

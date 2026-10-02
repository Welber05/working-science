import React, { useState } from 'react';
import { TARIFF_BANDS } from '../data/projectData';
import { Zap, Calculator, HelpCircle, ArrowRight } from 'lucide-react';

export const BillSimulator: React.FC = () => {
  const [consumptionKwh, setConsumptionKwh] = useState<number>(1850); // Typical school kWh/month
  const [selectedBandId, setSelectedBandId] = useState<string>('verde');
  const [cosipFixedFee, setCosipFixedFee] = useState<number>(45.00); // Fixed public lighting tax
  const [baseTariffKwh, setBaseTariffKwh] = useState<number>(0.72); // Base EDP tariff R$/kWh
  const [icmsTaxPercentage, setIcmsTaxPercentage] = useState<number>(17); // ICMS %

  const selectedBand = TARIFF_BANDS.find(b => b.id === selectedBandId) || TARIFF_BANDS[0];

  // Mathematical Model: f(x) = a*x + b
  // Variable rate a = (baseTariff + bandAddition) / (1 - ICMS/100)
  const effectiveTariffKwh = (baseTariffKwh + selectedBand.additionalCostPerKwh) / (1 - icmsTaxPercentage / 100);
  const a = Math.round(effectiveTariffKwh * 10000) / 10000;
  const b = cosipFixedFee;

  // f(x) = a * x + b
  const totalBillCost = a * consumptionKwh + b;

  // Simulate savings at -15% and -25%
  const savings15 = totalBillCost - (a * (consumptionKwh * 0.85) + b);
  const savings25 = totalBillCost - (a * (consumptionKwh * 0.75) + b);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md text-xs font-semibold text-blue-300 mb-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>1ª Série · Modelagem por Função Afim</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Simulador da Fatura & Função $f(x) = ax + b$
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Modelagem matemática do custo de energia elétrica da EEEFM Antônio dos Santos Neves em função do consumo em kWh ($x$), tarifas e impostos.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-right min-w-[200px]">
            <span className="text-xs text-slate-400 uppercase font-semibold block">Valor Total Estimado C(x)</span>
            <div className="text-3xl font-extrabold text-amber-400 font-heading font-mono">
              R$ {totalBillCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Consumo: {consumptionKwh} kWh/mês
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading flex items-center gap-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Parâmetros do Modelo $f(x) = ax + b$</span>
          </h3>

          {/* Consumption Slider (x) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Consumo Mensal da Escola $x$ (kWh):</label>
              <span className="font-bold text-amber-400 font-mono">{consumptionKwh} kWh</span>
            </div>
            <input
              type="range"
              min="200"
              max="5000"
              step="50"
              value={consumptionKwh}
              onChange={(e) => setConsumptionKwh(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Band Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300 block">
              Bandeira Tarifária ANEEL:
            </label>
            <div className="space-y-2">
              {TARIFF_BANDS.map((band) => (
                <button
                  key={band.id}
                  onClick={() => setSelectedBandId(band.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between ${
                    selectedBandId === band.id
                      ? 'bg-amber-500/15 border-amber-500/50 text-white font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: band.colorHex }} />
                    <span>{band.name}</span>
                  </div>
                  <span className="font-mono text-slate-400">
                    +{band.additionalCostPerKwh > 0 ? `R$ ${band.additionalCostPerKwh.toFixed(4)}` : 'R$ 0,00'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Fixed Tax COSIP (b) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <label className="font-medium text-slate-300">Taxa Fixa COSIP $b$ (R$):</label>
              <span className="font-bold text-blue-400 font-mono">R$ {cosipFixedFee.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="150"
              step="5"
              value={cosipFixedFee}
              onChange={(e) => setCosipFixedFee(Number(e.target.value))}
              className="w-full accent-blue-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Graph & Explanation Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Mathematical Formula Display Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">
              Função Afim Gerada para a Escola
            </h4>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-center text-lg sm:text-xl text-amber-300 font-bold">
              $C(x) = {a.toFixed(4)} \cdot x + {b.toFixed(2)}$
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs pt-1">
              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-semibold block">Coeficiente Angular $a$:</span>
                <span className="text-slate-300">R$ {a.toFixed(4)} por kWh (TUSD + TE + Imposto)</span>
              </div>

              <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                <span className="text-blue-400 font-semibold block">Coeficiente Linear $b$:</span>
                <span className="text-slate-300">R$ {b.toFixed(2)} (Taxa Fixa Municipal COSIP)</span>
              </div>
            </div>
          </div>

          {/* SVG Graph of Linear Function C(x) = ax + b */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-heading">
                Gráfico de Custo x Consumo $C(x)$
              </h4>
              <span className="text-xs text-slate-500 font-mono">Domínio: 0 a 5.000 kWh</span>
            </div>

            <div className="h-48 w-full relative pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150">
                <line x1="40" y1="20" x2="380" y2="20" stroke="#334155" strokeDasharray="3 3" />
                <line x1="40" y1="80" x2="380" y2="80" stroke="#334155" strokeDasharray="3 3" />
                <line x1="40" y1="140" x2="380" y2="140" stroke="#475569" />

                <text x="30" y="24" fill="#94a3b8" fontSize="9" textAnchor="end">R$ 4.500</text>
                <text x="30" y="84" fill="#94a3b8" fontSize="9" textAnchor="end">R$ 2.250</text>
                <text x="30" y="144" fill="#94a3b8" fontSize="9" textAnchor="end">R$ 0</text>

                {(() => {
                  const x1 = 40;
                  const y1 = 140 - (b / 4500) * 120;
                  const x2 = 380;
                  const maxC = a * 5000 + b;
                  const y2 = 140 - (maxC / 4500) * 120;

                  const currentX = 40 + (consumptionKwh / 5000) * 340;
                  const currentY = 140 - (totalBillCost / 4500) * 120;

                  return (
                    <>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="2.5" />
                      <circle cx={currentX} cy={currentY} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                    </>
                  );
                })()}
              </svg>
            </div>

            <div className="flex justify-between text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
              <span>0 kWh</span>
              <span>1.250 kWh</span>
              <span>2.500 kWh</span>
              <span>3.750 kWh</span>
              <span>5.000 kWh</span>
            </div>
          </div>

          {/* Potential Savings Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
              <span className="text-xs text-emerald-400 font-semibold block">Economia de 15% (Ações de Custo Zero)</span>
              <span className="text-xl font-bold text-emerald-300 font-mono mt-1 block">
                - R$ {savings15.toFixed(2)}/mês
              </span>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl">
              <span className="text-xs text-amber-400 font-semibold block">Economia de 25% (LED + Inversores)</span>
              <span className="text-xl font-bold text-amber-300 font-mono mt-1 block">
                - R$ {savings25.toFixed(2)}/mês
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

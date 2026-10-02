import React, { useState } from 'react';
import { INITIAL_SCHOOL_EQUIPMENT } from '../data/projectData';
import { SchoolEquipment } from '../types/project';
import { Calculator, Plus, Trash2, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export const AuditCalculator: React.FC = () => {
  const [equipmentList, setEquipmentList] = useState<SchoolEquipment[]>(INITIAL_SCHOOL_EQUIPMENT);
  const [tariffRate, setTariffRate] = useState<number>(0.92); // R$ per kWh
  const [filterLocation, setFilterLocation] = useState<string>('Todos');

  // New Equipment Form State
  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemPower, setNewItemPower] = useState<number>(100);
  const [newItemQty, setNewItemQty] = useState<number>(1);
  const [newItemHours, setNewItemHours] = useState<number>(5);
  const [newItemLocation, setNewItemLocation] = useState<SchoolEquipment['location']>('Sala 3ª V01');

  const filteredList = filterLocation === 'Todos'
    ? equipmentList
    : equipmentList.filter(eq => eq.location === filterLocation);

  // Calculation helpers
  const calculateKwhMonth = (eq: SchoolEquipment) => {
    return (eq.nominalPowerWatts * eq.quantity * eq.dailyHoursUsed * eq.daysPerMonth) / 1000;
  };

  const calculateCostMonth = (eq: SchoolEquipment) => {
    return calculateKwhMonth(eq) * tariffRate;
  };

  const totalKwhMonth = equipmentList.reduce((acc, eq) => acc + calculateKwhMonth(eq), 0);
  const totalCostMonth = totalKwhMonth * tariffRate;

  // Optimized Scenario (Replacing inefficient items)
  const totalOptimizedKwhMonth = equipmentList.reduce((acc, eq) => {
    const powerToUse = (!eq.isEfficient && eq.alternativePowerWatts) ? eq.alternativePowerWatts : eq.nominalPowerWatts;
    return acc + (powerToUse * eq.quantity * eq.dailyHoursUsed * eq.daysPerMonth) / 1000;
  }, 0);

  const totalOptimizedCostMonth = totalOptimizedKwhMonth * tariffRate;
  const potentialMonthlySavingsBRL = totalCostMonth - totalOptimizedCostMonth;

  const handleAddEquipment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName) return;

    const newEq: SchoolEquipment = {
      id: `custom-${Date.now()}`,
      name: newItemName,
      location: newItemLocation,
      category: 'Outros',
      nominalPowerWatts: newItemPower,
      quantity: newItemQty,
      dailyHoursUsed: newItemHours,
      daysPerMonth: 22,
      isEfficient: true
    };

    setEquipmentList([...equipmentList, newEq]);
    setNewItemName('');
  };

  const handleDeleteEquipment = (id: string) => {
    setEquipmentList(equipmentList.filter(eq => eq.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-semibold text-blue-300 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>1ª Série · Levantamento Prático de Equipamentos</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-heading">
              Auditoria do Parque Elétrico Escolar
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
              Cálculo em tempo real do consumo em kWh e custo em R$ dos equipamentos mapeados pelos estudantes nas salas, cantina e laboratórios.
            </p>
          </div>

          <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-right min-w-[220px]">
            <span className="text-xs text-slate-400 uppercase font-semibold block">Consumo Auditado Total</span>
            <div className="text-3xl font-extrabold text-blue-400 font-heading font-mono">
              {totalKwhMonth.toFixed(1)} <span className="text-lg">kWh/mês</span>
            </div>
            <span className="text-xs text-emerald-400 font-medium block mt-0.5">
              R$ {totalCostMonth.toFixed(2)}/mês na tarifa R$ {tariffRate.toFixed(2)}/kWh
            </span>
          </div>
        </div>
      </div>

      {/* Potential Savings Banner */}
      <div className="bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-emerald-300 font-heading">
              Projeção de Economia Potencial com Troca de Lâmpadas & Ar Inverter
            </h4>
            <p className="text-xs text-slate-300">
              Redução estimada de <strong>{(totalKwhMonth - totalOptimizedKwhMonth).toFixed(1)} kWh/mês</strong> no consumo da escola.
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs text-emerald-400 font-semibold block">Economia Financeira:</span>
          <span className="text-xl font-bold text-emerald-300 font-mono">
            - R$ {potentialMonthlySavingsBRL.toFixed(2)} / mês
          </span>
        </div>
      </div>

      {/* Equipment Table & Filter */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
            Tabela de Aparelhos Mapeados
          </h3>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Filtrar por Setor:</span>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="bg-slate-950 text-white border border-slate-800 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500"
            >
              <option value="Todos">Todos os Setores</option>
              <option value="Sala 3ª V01">Sala 3ª V01</option>
              <option value="Demais Salas Vespertino">Demais Salas Vespertino</option>
              <option value="Laboratório de Informática">Laboratório de Informática</option>
              <option value="Cantina / Cozinha">Cantina / Cozinha</option>
              <option value="Áreas Comuns / Pátio">Áreas Comuns / Pátio</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                <th className="py-2.5 px-3">Equipamento</th>
                <th className="py-2.5 px-3">Localização</th>
                <th className="py-2.5 px-3">Potência (W)</th>
                <th className="py-2.5 px-3">Qtd</th>
                <th className="py-2.5 px-3">Horas/Dia</th>
                <th className="py-2.5 px-3">Consumo (kWh/mês)</th>
                <th className="py-2.5 px-3">Custo (R$)</th>
                <th className="py-2.5 px-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredList.map((eq) => {
                const kwh = calculateKwhMonth(eq);
                const cost = calculateCostMonth(eq);
                return (
                  <tr key={eq.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-medium text-white">
                      <div className="flex items-center gap-2">
                        {!eq.isEfficient && (
                          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        )}
                        <span>{eq.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-slate-400">{eq.location}</td>
                    <td className="py-3 px-3 font-mono">{eq.nominalPowerWatts} W</td>
                    <td className="py-3 px-3 font-mono">{eq.quantity}</td>
                    <td className="py-3 px-3 font-mono">{eq.dailyHoursUsed} h</td>
                    <td className="py-3 px-3 font-mono text-blue-300 font-bold">{kwh.toFixed(1)} kWh</td>
                    <td className="py-3 px-3 font-mono text-emerald-300 font-bold">R$ {cost.toFixed(2)}</td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => handleDeleteEquipment(eq.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1"
                        title="Remover Equipamento"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Add Custom Equipment Form */}
        <form onSubmit={handleAddEquipment} className="pt-4 border-t border-slate-800/80 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block font-heading">
            + Adicionar Novo Equipamento Medido na Escola
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs">
            <input
              type="text"
              placeholder="Nome do Equipamento (ex: Micro-ondas)"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="sm:col-span-4 bg-slate-950 border border-slate-800 rounded-lg p-2 text-white focus:outline-none focus:border-amber-500"
              required
            />

            <select
              value={newItemLocation}
              onChange={(e) => setNewItemLocation(e.target.value as SchoolEquipment['location'])}
              className="sm:col-span-3 bg-slate-950 border border-slate-800 rounded-lg p-2 text-white focus:outline-none focus:border-amber-500"
            >
              <option value="Sala 3ª V01">Sala 3ª V01</option>
              <option value="Demais Salas Vespertino">Demais Salas Vespertino</option>
              <option value="Laboratório de Informática">Laboratório de Informática</option>
              <option value="Cantina / Cozinha">Cantina / Cozinha</option>
              <option value="Secretaria / Direção">Secretaria / Direção</option>
              <option value="Áreas Comuns / Pátio">Áreas Comuns / Pátio</option>
            </select>

            <input
              type="number"
              placeholder="Potência (W)"
              value={newItemPower}
              onChange={(e) => setNewItemPower(Number(e.target.value))}
              className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-lg p-2 text-white focus:outline-none focus:border-amber-500"
              min="1"
            />

            <input
              type="number"
              placeholder="Horas/Dia"
              value={newItemHours}
              onChange={(e) => setNewItemHours(Number(e.target.value))}
              className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-lg p-2 text-white focus:outline-none focus:border-amber-500"
              min="1"
              max="24"
            />

            <button
              type="submit"
              className="sm:col-span-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg p-2 transition-colors flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

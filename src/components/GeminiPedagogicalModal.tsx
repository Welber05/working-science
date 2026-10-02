import React, { useState } from 'react';
import { Sparkles, X, Loader2, BookOpen, Send, Copy, Check } from 'lucide-react';

interface GeminiPedagogicalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GeminiPedagogicalModal: React.FC<GeminiPedagogicalModalProps> = ({ isOpen, onClose }) => {
  const [requestType, setRequestType] = useState<'conceptest' | 'inquiry' | 'action-plan'>('conceptest');
  const [topic, setTopic] = useState<string>('Potência Elétrica e Eficiência Energética na Escola');
  const [loading, setLoading] = useState<boolean>(false);
  const [responseResult, setResponseResult] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setLoading(true);
    setResponseResult(null);

    try {
      const res = await fetch('/api/gemini/generate-pedagogical-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: requestType,
          topic,
          targetAudience: 'Ensino Médio Vespertino EEEFM Antônio dos Santos Neves'
        })
      });

      const data = await res.json();
      if (data.result) {
        setResponseResult(data.result);
      } else if (data.error) {
        setResponseResult(`Erro: ${data.error}`);
      }
    } catch (err: any) {
      setResponseResult(`Erro de conexão com o servidor Gemini: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (responseResult) {
      navigator.clipboard.writeText(responseResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl space-y-0 my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Assistente Pedagógico IA (Gemini 3.8 Flash)
              </h3>
              <span className="text-xs text-slate-400">EEEFM "Antônio dos Santos Neves" · Boa Esperança/ES</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block font-heading">
              Selecione o Tipo de Material Desejado:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => setRequestType('conceptest')}
                className={`p-3 rounded-xl border text-xs text-left transition-all ${
                  requestType === 'conceptest'
                    ? 'bg-amber-500/15 border-amber-500/50 text-white font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="block font-bold text-amber-300 font-heading mb-0.5">
                  ❓ Conceptests / Plickers
                </span>
                <span className="text-[11px] text-slate-400 font-normal">
                  Questões conceituais com distratores e dicas de mediação.
                </span>
              </button>

              <button
                onClick={() => setRequestType('inquiry')}
                className={`p-3 rounded-xl border text-xs text-left transition-all ${
                  requestType === 'inquiry'
                    ? 'bg-amber-500/15 border-amber-500/50 text-white font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="block font-bold text-amber-300 font-heading mb-0.5">
                  🧪 Roteiro de Investigação
                </span>
                <span className="text-[11px] text-slate-400 font-normal">
                  Roteiro de laboratório de 15 minutos com pergunta disparadora.
                </span>
              </button>

              <button
                onClick={() => setRequestType('action-plan')}
                className={`p-3 rounded-xl border text-xs text-left transition-all ${
                  requestType === 'action-plan'
                    ? 'bg-amber-500/15 border-amber-500/50 text-white font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="block font-bold text-amber-300 font-heading mb-0.5">
                  📋 Plano de Ação Executivo
                </span>
                <span className="text-[11px] text-slate-400 font-normal">
                  Proposta estruturada com diagnóstico e metas sustentáveis.
                </span>
              </button>
            </div>
          </div>

          {/* Topic Input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block font-heading">
              Tema ou Conteúdo Específico:
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Potência Elétrica, Ilhas de Calor ou Meia-Vida de Fármacos..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !topic}
            className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gerando com Gemini AI...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Gerar Conteúdo Pedagógico</span>
              </>
            )}
          </button>

          {/* Generated Result Output Box */}
          {responseResult && (
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 pt-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-amber-400 font-heading">
                  Resultado Gerado:
                </span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 text-xs rounded-lg transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>
              </div>

              <div className="text-xs text-slate-200 whitespace-pre-wrap font-sans leading-relaxed max-h-72 overflow-y-auto pr-2 border-l-2 border-amber-500/40 pl-3">
                {responseResult}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

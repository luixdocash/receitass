import React from 'react';
import { ShieldCheck, ShoppingBag, Lock, Smartphone } from 'lucide-react';
import { handleBuyClick, buildCheckoutUrl } from '../utils/pixel';

export const GuaranteeSection: React.FC = () => {
  const checkoutUrl = buildCheckoutUrl();

  return (
    <section className="py-16 px-4 bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Shield Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-400/10 border-2 border-amber-400 text-amber-400 mb-6">
          <ShieldCheck size={40} className="animate-pulse" />
        </div>

        {/* Headlines */}
        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2 text-amber-400">
          GARANTIA DE SATISFAÇÃO DE 7 DIAS
        </h3>

        <h4 className="text-base sm:text-lg font-black uppercase mb-4 tracking-wide text-white">
          SEU RISCO É ZERO. TESTE TODAS AS RECEITAS COM TRANQUILIDADE
        </h4>

        {/* Copy */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
          Confiamos na qualidade e praticidade de cada uma das receitas e materiais do pacote. Por isso, você tem 7 dias completos para abrir seus arquivos, testar as combinações e avaliar todo o conteúdo. Se achar que não valeu a pena, basta solicitar o reembolso dentro do prazo para receber 100% do valor pago.
        </p>

        {/* Pillars row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto mb-8 text-xs font-bold text-gray-300">
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800">
            <Lock size={15} className="text-amber-400" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800">
            <Smartphone size={15} className="text-amber-400" />
            <span>Acesso Digital Imediato</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gray-900 border border-gray-800">
            <ShieldCheck size={15} className="text-amber-400" />
            <span>7 Dias Incondicionais</span>
          </div>
        </div>

        {/* CTA Button in Gold Accent */}
        <div className="mt-8 text-center">
          <a
            href={checkoutUrl}
            onClick={(e) => handleBuyClick(e)}
            className="group bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-950 font-black py-4 px-8 sm:px-10 rounded-full shadow-[0_8px_25px_rgba(251,191,36,0.35)] hover:shadow-[0_12px_32px_rgba(251,191,36,0.5)] transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-3 uppercase tracking-wider text-sm sm:text-base cursor-pointer"
          >
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span>QUERO TESTAR SEM RISCO</span>
          </a>
        </div>

      </div>
    </section>
  );
};

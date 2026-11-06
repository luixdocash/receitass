import React from 'react';
import { Check, ShieldCheck, Zap, Lock, Sparkles, Gift } from 'lucide-react';
import { CtaButton } from './CtaButton';

interface MaterialItem {
  name: string;
  type: string;
  isBonus?: boolean;
}

const allMaterials: MaterialItem[] = [
  { name: 'Receitas de Batida na Garrafa', type: 'E-book em PDF', isBonus: false },
  { name: '50 Receitas de Batidas na Garrafa', type: 'E-book em PDF', isBonus: false },
  { name: '150 Receitas de Batidas, Drinks e Bebidas Especiais', type: 'E-book em PDF', isBonus: false },
  { name: 'Bônus 1: 30 Receitas de Batidas Alcoólicas', type: 'E-book em PDF', isBonus: true },
  { name: 'Bônus 2: 40 Receitas Batida na Garrafa FIT', type: 'E-book em PDF', isBonus: true },
  { name: 'Bônus 3: Planilha de Precificação de Bebidas', type: 'Ferramenta Prática', isBonus: true },
  { name: 'Bônus 4: Guia Estratégico de Venda pelo WhatsApp', type: 'E-book em PDF', isBonus: true },
];

export const PricingOffer: React.FC = () => {
  return (
    <section
      id="pricing"
      className="scroll-mt-10 py-12 sm:py-18 px-4 bg-gradient-to-b from-white via-orange-50/50 to-orange-100/60 border-t border-b border-orange-200"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-orange-100 text-[#EA580C] mb-3">
            <Sparkles size={14} /> Oferta Especial Exclusiva
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            PACOTE COMPLETO COM <span className="bg-gradient-to-r from-[#EA580C] to-[#E11D48] bg-clip-text text-transparent">7 MATERIAIS DIGITAIS</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl mx-auto font-normal">
            Aproveite a condição única de lançamento para garantir todos os 3 materiais principais e os 4 bônus em um único pagamento promocional.
          </p>
          <div className="h-1 w-20 bg-[#EA580C] mx-auto mt-4 rounded-full" />
        </div>

        {/* The Single Main Offer Card */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-orange-400 max-w-2xl mx-auto transition-transform duration-300">
          
          {/* Top Floating Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#BE123C] text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
            ★ OFERTA COMPLETA DISPONÍVEL HOJE ★
          </div>

          {/* Card Header */}
          <div className="text-center pt-2 mb-6 border-b border-gray-100 pb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-2 bg-orange-100 text-[#EA580C]">
              ACESSO DIGITAL IMEDIATO
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase">
              PACOTE COMPLETO DE RECEITAS DE BATIDAS NA GARRAFA, DRINKS E BEBIDAS ESPECIAIS
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1.5">
              3 Materiais Principais + 4 Bônus Exclusivos de Apoio
            </p>

            {/* Price Box */}
            <div className="mt-5 flex flex-col items-center justify-center">
              <span className="text-[#DC2626] text-base sm:text-lg font-black line-through decoration-[#DC2626] decoration-2">
                De R$ 197,00
              </span>
              <span className="text-xs text-gray-500 font-extrabold uppercase tracking-wider mt-0.5">
                POR APENAS
              </span>
              <div className="flex items-baseline justify-center gap-1 mt-1">
                <span className="text-4xl sm:text-6xl md:text-7xl font-black text-[#16A34A] tracking-tight">
                  R$ 27,00
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600 font-semibold">
                <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200">
                  ✓ Pagamento Único
                </span>
                <span className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md border border-blue-200">
                  ✓ Sem Mensalidades
                </span>
                <span className="bg-amber-50 text-amber-800 px-2.5 py-1 rounded-md border border-amber-200">
                  ✓ Acesso Imediato
                </span>
              </div>
            </div>
          </div>

          {/* Materials List */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-black uppercase tracking-wider text-gray-400">
              Todos os 7 Materiais Inclusos no Acesso:
            </h4>
            {allMaterials.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between gap-3 p-2.5 rounded-xl bg-orange-50/40 border border-orange-100/60">
                <div className="flex items-start gap-2.5">
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      item.isBonus
                        ? 'bg-rose-100 text-[#E11D48]'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    <Check size={13} strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug block">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
                    item.isBonus
                      ? 'bg-rose-100 text-[#E11D48]'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}
                >
                  {item.isBonus ? 'BÔNUS GRÁTIS' : 'PRINCIPAL'}
                </span>
              </div>
            ))}
          </div>

          {/* Direct CTA Button to Checkout */}
          <div className="text-center">
            <CtaButton fullWidth subText="Ambiente 100% seguro e criptografado · Liberação imediata após a compra">
              QUERO ACESSAR TODOS OS MATERIAIS
            </CtaButton>
          </div>

          {/* Trust Footnotes */}
          <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs text-gray-500 font-bold">
            <div className="flex flex-col items-center gap-1">
              <Zap size={16} className="text-[#EA580C]" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Lock size={16} className="text-[#EA580C]" />
              <span>Checkout Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck size={16} className="text-[#EA580C]" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

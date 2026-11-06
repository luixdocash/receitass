import React from 'react';
import { CtaButton } from './CtaButton';
import { handleBuyClick } from '../utils/pixel';
import { Wine, HeartPulse, Calculator, MessageCircle, Gift, Sparkles } from 'lucide-react';

interface BonusItem {
  id: number;
  title: string;
  badge: string;
  format: string;
  desc: string;
  benefits: string[];
  icon: React.ReactNode;
  tagColor: string;
}

const bonuses: BonusItem[] = [
  {
    id: 1,
    title: '30 Receitas de Batidas Alcoólicas',
    badge: 'BÔNUS EXCLUSIVO 1',
    format: 'E-book em PDF',
    desc: 'Seleção especial com 30 receitas de batidas com toques alcoólicos (como cachaça, vodka, rum, gin e licores). Perfeitas para confraternizações, churrascos com amigos ou para diversificar seu cardápio de eventos.',
    benefits: [
      '30 combinações alcoólicas consagradas',
      'Proporções exatas para equilíbrio de sabor',
      'Excelente aceitação em festas e comemorações',
    ],
    icon: <Wine className="text-purple-600" size={24} />,
    tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    id: 2,
    title: '40 Receitas de Batidas na Garrafa FIT',
    badge: 'BÔNUS EXCLUSIVO 2',
    format: 'E-book em PDF',
    desc: 'Receitas pensadas para quem busca opções saudáveis, leves e funcionais. Elaboradas com frutas frescas, fibras e bases naturais sem açúcares refinados, aliando praticidade e bem-estar.',
    benefits: [
      '40 opções nutritivas e funcionais',
      'Ingredientes naturais e saudáveis',
      'Perfeitas para o dia a dia e rotina leve',
    ],
    icon: <HeartPulse className="text-emerald-600" size={24} />,
    tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  },
  {
    id: 3,
    title: 'Planilha de Precificação',
    badge: 'BÔNUS EXCLUSIVO 3',
    format: 'Ferramenta Digital Prática',
    desc: 'Material estratégico para quem deseja comercializar suas bebidas. Ajuda a calcular com precisão o custo de cada garrafa (ingredientes, embalagem, tampa e rótulo) para definir o preço de venda com a margem correta.',
    benefits: [
      'Cálculo simplificado de custo por garrafa',
      'Controle de margem de lucro e desperdício',
      'Facilidade para montar sua tabela de preços',
    ],
    icon: <Calculator className="text-blue-600" size={24} />,
    tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    id: 4,
    title: 'Guia de Venda pelo WhatsApp',
    badge: 'BÔNUS EXCLUSIVO 4',
    format: 'Guia Estratégico em PDF',
    desc: 'Técnicas comerciais práticas para divulgar suas batidas e drinks, montar mensagens profissionais, organizar seu cardápio e conduzir o atendimento ao cliente para fechar pedidos com agilidade.',
    benefits: [
      'Como divulgar suas bebidas nos status e contatos',
      'Modelos de mensagens e atendimento rápido',
      'Organização de pedidos e fidelização',
    ],
    icon: <MessageCircle className="text-green-600" size={24} />,
    tagColor: 'bg-green-100 text-green-700 border-green-200',
  },
];

export const BonusGrid: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50/50 via-amber-50/40 to-white px-4 py-12 sm:py-18 border-y border-orange-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-rose-100 text-[#E11D48] mb-3">
            <Gift size={14} /> 4 Materiais Especiais Gratuitos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            VOCÊ AINDA RECEBE <span className="bg-gradient-to-r from-[#EA580C] to-[#E11D48] bg-clip-text text-transparent">4 BÔNUS EXCLUSIVOS</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-normal">
            Garantindo seu acesso hoje, você leva todos esses quatro materiais adicionais sem pagar nenhum centavo a mais por eles.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#E11D48]" />
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              onClick={() => handleBuyClick()}
              className="group relative flex flex-col justify-between rounded-3xl border-2 border-orange-100 bg-white p-6 text-left shadow-[0_8px_24px_rgba(234,88,12,0.06)] hover:border-orange-300 hover:shadow-[0_16px_36px_rgba(234,88,12,0.12)] transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Header tag & format */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${bonus.tagColor}`}>
                    {bonus.badge}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400">
                    {bonus.format}
                  </span>
                </div>

                {/* Title with Icon */}
                <div className="flex items-start gap-3 mt-1">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 group-hover:scale-105 transition">
                    {bonus.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-gray-900 group-hover:text-[#EA580C] transition duration-200 leading-snug">
                      {bonus.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {bonus.desc}
                </p>

                {/* Benefits Bullet list */}
                <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
                  {bonus.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <Sparkles size={12} className="text-[#EA580C] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Free Callout */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-semibold line-through">
                  Valor avulso: R$ 47,00
                </span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-800">
                  HOJE: 100% GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <CtaButton>
            QUERO ACESSAR TODOS OS MATERIAIS
          </CtaButton>
        </div>

      </div>
    </section>
  );
};

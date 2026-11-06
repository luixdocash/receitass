import React from 'react';
import { DollarSign, Layers, Calculator, MessageSquare, TrendingUp, ShieldCheck } from 'lucide-react';
import { CtaButton } from './CtaButton';

const salePillars = [
  {
    icon: <Layers size={24} className="text-[#EA580C]" />,
    title: 'Conhecer Diferentes Opções de Bebidas',
    desc: 'Um catálogo amplo com batidas tradicionais, opções alcoólicas, versões FIT e drinks sofisticados para você ter variedade de escolha.',
  },
  {
    icon: <TrendingUp size={24} className="text-[#E11D48]" />,
    title: 'Organizar Suas Receitas com Padrão',
    desc: 'Instruções diretas para manter o padrão de sabor, consistência certa e métodos corretos de conservação para envasar na garrafa.',
  },
  {
    icon: <Calculator size={24} className="text-blue-600" />,
    title: 'Calcular Preços com a Planilha de Apoio',
    desc: 'Saiba exatamente quanto custa cada garrafa (frutas, bases, embalagens e rótulos) para precificar seu produto com margem justa e consciente.',
  },
  {
    icon: <MessageSquare size={24} className="text-emerald-600" />,
    title: 'Aprender Divulgação e Atendimento no WhatsApp',
    desc: 'Orientações práticas para apresentar seu cardápio, postar fotos atrativas e conduzir conversas de atendimento para fechar pedidos de forma profissional.',
  },
];

export const CommercialIncomeSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-12 sm:py-18 border-b border-orange-100">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Tag */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <DollarSign size={14} /> Para Casa ou Para Empreender
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight tracking-tight uppercase max-w-4xl mx-auto">
            ALÉM DE APRENDER NOVAS RECEITAS, VOCÊ TAMBÉM PODE{' '}
            <span className="bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#BE123C] bg-clip-text text-transparent">
              TRANSFORMAR SUAS BEBIDAS EM UMA OPORTUNIDADE DE RENDA EXTRA.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Esteja você querendo surpreender seus convidados em casa ou começar a comercializar garrafas de batidas na sua região, o pacote oferece as ferramentas certas.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#EA580C]" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {salePillars.map((pillar, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-3xl border border-orange-100 bg-orange-50/40 p-5 sm:p-6 shadow-xs hover:border-orange-200 hover:bg-orange-50/70 transition duration-300"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white border border-orange-100 shadow-2xs">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Notice Callout */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50/90 p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl mx-auto text-left mb-8">
          <ShieldCheck size={20} className="text-gray-500 shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong className="text-gray-800">Nota de Transparência:</strong> Não prometemos ganhos financeiros fixos ou garantidos. O material digital fornece suporte técnico, receitas testadas e ferramentas de gestão (planilha de custos e dicas de divulgação) para apoiar seu aprendizado e iniciativa pessoal.
          </p>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <CtaButton>
            QUERO MEU PACOTE COMPLETO
          </CtaButton>
        </div>

      </div>
    </section>
  );
};

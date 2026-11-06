import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { CtaButton } from './CtaButton';

interface Deliverable {
  number: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  image: string;
  accentColor: string;
}

const deliverables: Deliverable[] = [
  {
    number: '01',
    title: 'Receitas de Batida na Garrafa',
    badge: 'ENTREGÁVEL PRINCIPAL 1',
    description:
      'O guia prático fundamental com as técnicas clássicas para preparar batidas com a textura perfeita para envasar na garrafa. Aprenda a harmonizar ingredientes, garantir sabor encorpado e boa durabilidade.',
    highlights: [
      'Preparo ideal e técnicas de envase na garrafa',
      'Harmonização de sabores e consistência perfeita',
      'Ingredientes simples e fáceis de encontrar',
      'Arquivo em PDF para consultar no celular ou tablet',
    ],
    image: '/assets/aistudio/image_8bac7ae4.png',
    accentColor: 'from-orange-500 to-amber-600',
  },
  {
    number: '02',
    title: '50 Receitas de Batidas na Garrafa',
    badge: 'ENTREGÁVEL PRINCIPAL 2',
    description:
      'Uma seleção completa com 50 receitas desenvolvidas especificamente para o formato na garrafa. Combinações variadas de frutas, bases cremosas e opções populares que todo mundo adora experimentar.',
    highlights: [
      '50 receitas exclusivas para garrafas',
      'Variedade de frutas tropicais e sabores consagrados',
      'Instruções claras de preparo em poucos minutos',
      'Ideal para consumo próprio ou para comercializar',
    ],
    image: '/assets/aistudio/image_68c5427c.png',
    accentColor: 'from-rose-500 to-orange-500',
  },
  {
    number: '03',
    title: '150 Receitas de Batidas, Drinks e Bebidas Especiais',
    badge: 'ENTREGÁVEL PRINCIPAL 3',
    description:
      'O maior acervo do pacote: 150 opções diversificadas que vão de batidas especiais e autorais até coquetéis refrescantes e drinks para animar reuniões, comemorações e eventos.',
    highlights: [
      '150 receitas de drinks, batidas e bebidas especiais',
      'Coquetéis refrescantes, frutados e marcantes',
      'Apresentações que valorizam o visual da bebida',
      'Formato digital prático com índice facilitado',
    ],
    image: '/assets/aistudio/image_8c0de811.png',
    accentColor: 'from-amber-500 to-rose-600',
  },
];

export const MainDeliverables: React.FC = () => {
  return (
    <section className="border-t border-orange-100 bg-gradient-to-b from-white via-orange-50/30 to-white px-4 py-12 sm:py-18">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-orange-100 text-[#EA580C] mb-3">
            <Sparkles size={14} /> Conteúdo Oficial dos Arquivos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">
            O QUE VOCÊ VAI RECEBER NO <span className="bg-gradient-to-r from-[#EA580C] to-[#E11D48] bg-clip-text text-transparent">PACOTE PRINCIPAL</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Três materiais digitais completos em PDF, com centenas de receitas testadas, linguagem direta e preparo simplificado.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#EA580C]" />
        </div>

        {/* 3 Main Deliverables Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {deliverables.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between rounded-3xl border-2 border-orange-100 bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(234,88,12,0.07)] hover:border-orange-300 hover:shadow-[0_16px_40px_rgba(234,88,12,0.14)] transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail / Mockup Container */}
                <div className="relative mb-5 overflow-hidden rounded-2xl bg-gray-100 aspect-video sm:aspect-4/3 border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1 shadow-xs">
                    <FileText size={11} className="text-amber-400" />
                    <span>PDF Digital</span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-gradient-to-r from-[#EA580C] to-[#E11D48] text-white text-[11px] font-black px-2.5 py-0.5 rounded-md shadow-xs">
                    Material {item.number}
                  </div>
                </div>

                {/* Badge & Title */}
                <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-orange-100 text-[#EA580C] mb-2">
                  {item.badge}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-snug group-hover:text-[#EA580C] transition duration-200">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Pill */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-semibold">
                <span className="flex items-center gap-1">
                  <BookOpen size={14} className="text-[#EA580C]" /> Acesso Imediato
                </span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  Incluso no Pacote
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <CtaButton>
            QUERO MEU PACOTE COMPLETO
          </CtaButton>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CtaButton } from './CtaButton';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: 'O que vou receber após a compra?',
    a: 'Você recebe o acesso completo aos 7 materiais digitais descritos na oferta: 1) Receitas de Batida na Garrafa, 2) 50 Receitas de Batidas na Garrafa, 3) 150 Receitas de Batidas, Drinks e Bebidas Especiais, 4) Bônus 30 Receitas de Batidas Alcoólicas, 5) Bônus 40 Receitas Batida na Garrafa FIT, 6) Bônus Planilha de Precificação, e 7) Bônus Guia de Venda pelo WhatsApp.',
  },
  {
    q: 'Como recebo os materiais?',
    a: 'A entrega é 100% digital e automática. Assim que a sua compra for confirmada pela plataforma de pagamento, os links para acessar e baixar todos os PDFs e a planilha são enviados imediatamente para o seu e-mail e também pelo WhatsApp cadastrado no momento da compra.',
  },
  {
    q: 'Os arquivos são digitais?',
    a: 'Sim, todos os materiais são arquivos digitais (PDFs e ferramenta de precificação). Isso significa que você não precisa esperar frete nem pagar entrega física: o acesso é liberado na hora.',
  },
  {
    q: 'Posso consultar pelo celular?',
    a: 'Com certeza! Os arquivos foram formatados para uma leitura confortável e nítida tanto no smartphone quanto em tablets, notebooks ou computadores. Você pode baixar e salvar no seu aparelho para consultar sempre que quiser.',
  },
  {
    q: 'O pacote serve para quem deseja vender bebidas?',
    a: 'Sim! Além de ser perfeito para quem quer preparar bebidas deliciosas em casa para a família e amigos, o pacote é muito procurado por quem deseja ter uma renda extra produzindo batidas na garrafa e drinks. Você conta inclusive com materiais específicos de apoio como a Planilha de Precificação (para calcular custos e margens) e o Guia de Vendas pelo WhatsApp.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'O pagamento é único no valor promocional de R$ 27,00 (sem nenhuma mensalidade ou cobrança recorrente futura). O processamento é realizado em ambiente totalmente blindado e criptografado com suporte a PIX e cartão de crédito.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-18 px-4 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-orange-100 text-[#EA580C] mb-3">
            <HelpCircle size={14} /> Dúvidas Comuns
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            PERGUNTAS FREQUENTES (FAQ)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Tire suas principais dúvidas sobre o acesso e entrega do pacote completo.
          </p>
          <div className="h-1 w-20 bg-[#EA580C] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-orange-50/40 border border-orange-100 hover:border-orange-300 rounded-2xl shadow-2xs transition duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left font-black text-gray-900 flex items-center justify-between text-sm sm:text-base p-4 sm:p-5 select-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#EA580C] text-lg">🍹</span>
                    <span className="leading-snug pr-4">{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#EA580C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-orange-100 bg-white/70">
                    <p className="pt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <CtaButton>
            QUERO MEU PACOTE COMPLETO
          </CtaButton>
        </div>

      </div>
    </section>
  );
};

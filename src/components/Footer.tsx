import React from 'react';
import { CtaButton } from './CtaButton';
import { Sliders } from 'lucide-react';

interface FooterProps {
  onOpenPixelModal: () => void;
  pixelActive: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPixelModal, pixelActive }) => {
  return (
    <div>
      {/* Pre-footer Call to Action */}
      <section className="py-12 px-4 bg-gradient-to-b from-orange-50 to-white border-t border-orange-100 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 font-bold mb-4">
            Aproveite a oportunidade e garanta todos os 7 materiais pelo valor promocional de R$ 27,00:
          </p>
          <CtaButton>
            QUERO ACESSAR TODOS OS MATERIAIS
          </CtaButton>
        </div>
      </section>

      {/* Official Footer */}
      <footer className="bg-gray-950 text-white border-t border-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="font-black text-[#EA580C] text-lg sm:text-xl uppercase tracking-widest">
            PACOTE COMPLETO DE RECEITAS DE BATIDAS NA GARRAFA, DRINKS E BEBIDAS ESPECIAIS
          </p>
          
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            Este produto é composto exclusivamente por arquivos digitais educacionais em PDF e ferramentas de apoio. O consumo de bebidas alcoólicas é destinado apenas a maiores de 18 anos. Beba com moderação.
          </p>

          <div className="h-px bg-gray-800 w-full my-6 max-w-lg mx-auto" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
            <span>© 2026 Todos os direitos reservados.</span>
            <span className="hidden sm:inline">|</span>
            <button
              type="button"
              onClick={onOpenPixelModal}
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition underline decoration-dotted cursor-pointer"
            >
              <Sliders size={13} />
              Configurar Pixel da Meta ({pixelActive ? 'Ativo' : 'Pendente'})
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

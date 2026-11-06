import React from 'react';
import { Zap, ShieldCheck, Lock, BookOpen, Sparkles, FileText, Smartphone } from 'lucide-react';
import { CtaButton } from './CtaButton';

export const HeroSection: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-[#FFF7ED] via-[#FFFFFF] to-[#FFFFFF] pt-16 sm:pt-20 pb-8 sm:pb-14 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center w-full flex flex-col items-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200 mb-3 shadow-xs">
          <Sparkles size={14} className="text-orange-600 animate-spin-slow" />
          <span>PACOTE COMPLETO COM 7 MATERIAIS DIGITAIS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[23px] sm:text-3xl md:text-4xl lg:text-[44px] font-black leading-[1.18] sm:leading-tight tracking-tight uppercase mb-3 max-w-3xl mx-auto text-gray-900">
          APRENDA A PREPARAR BATIDAS, DRINKS E BEBIDAS{' '}
          <span className="bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#BE123C] bg-clip-text text-transparent">
            QUE DÃO VONTADE DE EXPERIMENTAR!
          </span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-base sm:text-xl md:text-[22px] font-bold text-gray-700 max-w-3xl mx-auto leading-snug mb-5 sm:mb-6">
          Tenha acesso a centenas de receitas práticas, sabores variados e materiais exclusivos para preparar suas bebidas em casa ou começar a vender.
        </h2>

        {/* Hero Visual Showcase */}
        <div className="relative mb-6 w-full max-w-3xl mx-auto">
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 via-rose-500/20 to-orange-400/20 rounded-3xl filter blur-3xl opacity-70 -z-10" />
          
          <div className="relative overflow-hidden rounded-3xl border-2 border-orange-100 bg-white/80 p-2 sm:p-3 shadow-[0_20px_50px_rgba(234,88,12,0.15)] backdrop-blur-xs">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/assets/aistudio/image_8bac7ae4.png"
                alt="Batidas na Garrafa Artesanais"
                className="w-full h-auto object-cover max-h-[380px] sm:max-h-[440px] transform hover:scale-[1.01] transition duration-500"
                fetchPriority="high"
                decoding="async"
              />
              {/* Overlay Badges */}
              <div className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <FileText size={13} className="text-amber-400" />
                <span>Formato PDF Digital · Consulta Imediata</span>
              </div>

              <div className="absolute bottom-3 right-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <span>7 Materiais Inclusos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights Pill Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-3xl mb-6">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-orange-50 border border-orange-100/80 px-3 py-2 text-xs font-bold text-gray-800 shadow-2xs">
            <BookOpen size={16} className="text-[#EA580C] shrink-0" />
            <span>7 Materiais Digitais</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl bg-rose-50 border border-rose-100/80 px-3 py-2 text-xs font-bold text-gray-800 shadow-2xs">
            <Sparkles size={16} className="text-[#E11D48] shrink-0" />
            <span>Centenas de Receitas</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl bg-amber-50 border border-amber-100/80 px-3 py-2 text-xs font-bold text-gray-800 shadow-2xs">
            <Smartphone size={16} className="text-[#D97706] shrink-0" />
            <span>Acesso no Celular</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100/80 px-3 py-2 text-xs font-bold text-gray-800 shadow-2xs">
            <Zap size={16} className="text-emerald-600 shrink-0" />
            <span>Envio Imediato</span>
          </div>
        </div>

        {/* Pricing Anchor */}
        <div className="mb-4 sm:mb-6 flex flex-col items-center justify-center text-center">
          <span className="text-[#DC2626] text-sm sm:text-lg font-black line-through decoration-[#DC2626] decoration-2">
            De R$ 197,00
          </span>
          <span className="text-gray-500 text-xs sm:text-sm font-extrabold uppercase tracking-wider mt-0.5">
            por apenas
          </span>
          <span className="text-[#16A34A] text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mt-0.5">
            R$ 27,00
          </span>
          <span className="text-xs sm:text-sm text-gray-500 font-semibold mt-1">
            Pagamento único · Sem mensalidades · Acesso vitalício aos 7 materiais
          </span>
        </div>

        {/* Main CTA */}
        <div className="mb-4 sm:mb-6 w-full max-w-md">
          <CtaButton fullWidth>
            QUERO MEU PACOTE COMPLETO
          </CtaButton>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-1 text-[11px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <Zap size={15} className="text-[#EA580C]" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock size={15} className="text-[#EA580C]" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#EA580C]" />
            <span>7 Dias de Garantia</span>
          </div>
        </div>

      </div>
    </header>
  );
};

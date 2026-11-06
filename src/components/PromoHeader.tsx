import React from 'react';

export const PromoHeader: React.FC = () => {
  const todayFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#BE123C] text-white text-center py-2 px-4 text-xs sm:text-sm font-black shadow-md flex items-center justify-center tracking-wide">
      <span>
        🍹 OFERTA ESPECIAL DISPONÍVEL HOJE — <span className="underline decoration-white/70">{todayFormatted}</span> · 7 MATERIAIS POR APENAS R$ 27,00
      </span>
    </div>
  );
};

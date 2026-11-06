import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { handleBuyClick, buildCheckoutUrl } from '../utils/pixel';

interface CtaButtonProps {
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  subText?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children = 'QUERO MEU PACOTE COMPLETO',
  className = '',
  fullWidth = false,
  subText,
  icon,
  onClick,
}) => {
  const checkoutUrl = buildCheckoutUrl();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    handleBuyClick(e);
  };

  return (
    <div className={`inline-flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a
        href={checkoutUrl}
        onClick={handleClick}
        className={`group bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#BE123C] hover:from-[#C2410C] hover:via-[#BE123C] hover:to-[#9F1239] text-white font-black py-4 px-6 sm:px-10 rounded-full shadow-[0_8px_25px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_32px_rgba(225,29,72,0.55)] transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-3 uppercase tracking-wider text-sm sm:text-base md:text-lg animate-pulse-cta cursor-pointer ${
          fullWidth ? 'w-full' : ''
        } ${className}`}
      >
        {icon || <ShoppingBag size={20} className="sm:w-[22px] sm:h-[22px] shrink-0" strokeWidth={2.5} />}
        <span>{children}</span>
      </a>
      {subText && (
        <span className="text-[11px] sm:text-xs text-gray-500 mt-2 font-medium flex items-center gap-1.5">
          🔒 {subText}
        </span>
      )}
    </div>
  );
};

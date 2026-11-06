/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PromoHeader } from './components/PromoHeader';
import { HeroSection } from './components/HeroSection';
import { MainDeliverables } from './components/MainDeliverables';
import { BonusGrid } from './components/BonusGrid';
import { CommercialIncomeSection } from './components/CommercialIncomeSection';
import { PricingOffer } from './components/PricingOffer';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PixelModal } from './components/PixelModal';
import { PurchaseConfirmation } from './components/PurchaseConfirmation';
import { getMetaPixelId } from './utils/pixel';
import { ShieldCheck } from 'lucide-react';

export default function App() {
  const [isPixelModalOpen, setIsPixelModalOpen] = useState(false);
  const [pixelActive, setPixelActive] = useState(false);
  const [isThankYouPage, setIsThankYouPage] = useState(false);

  useEffect(() => {
    // Check if user reached thank-you / purchase trigger
    const params = new URLSearchParams(window.location.search);
    if (params.get('purchase') === 'true' || params.get('obrigado') === 'true') {
      setIsThankYouPage(true);
    }

    // Check pixel status
    const pixelId = getMetaPixelId();
    setPixelActive(Boolean(pixelId));
  }, []);

  const refreshPixelStatus = () => {
    const pixelId = getMetaPixelId();
    setPixelActive(Boolean(pixelId));
  };

  if (isThankYouPage) {
    return (
      <PurchaseConfirmation
        onBackToSalesPage={() => {
          setIsThankYouPage(false);
          const url = new URL(window.location.href);
          url.searchParams.delete('purchase');
          url.searchParams.delete('obrigado');
          window.history.replaceState({}, '', url.toString());
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-[#EA580C] selection:text-white">
      {/* Top Banner */}
      <PromoHeader />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 1. Primeira Dobra — Alta Conversão */}
        <HeroSection />

        {/* 2. Apresentação dos 3 Entregáveis Principais */}
        <MainDeliverables />

        {/* 3. Seção de 4 Bônus Exclusivos */}
        <BonusGrid />

        {/* 4. Seção para quem Deseja Vender / Renda Extra */}
        <CommercialIncomeSection />

        {/* 5. Seção de Oferta (R$ 27,00) */}
        <PricingOffer />

        {/* 6. Garantia de 7 Dias e Segurança */}
        <GuaranteeSection />

        {/* 7. Perguntas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer & Meta Pixel trigger */}
      <Footer
        onOpenPixelModal={() => setIsPixelModalOpen(true)}
        pixelActive={pixelActive}
      />

      {/* Floating Meta Pixel Quick Status Pill (Discrete for store owner) */}
      <aside aria-label="Status do Pixel" className="fixed bottom-4 left-4 z-40 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsPixelModalOpen(true)}
          className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-gray-700 shadow-md border border-gray-200 hover:border-[#EA580C] hover:text-[#EA580C] backdrop-blur-sm transition cursor-pointer"
        >
          <span
            className={`h-2 w-2 rounded-full ${
              pixelActive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'
            }`}
          />
          <ShieldCheck size={14} className="text-[#EA580C]" />
          <span>Meta Pixel: {pixelActive ? 'Conectado' : 'Configurar'}</span>
        </button>
      </aside>

      {/* Meta Pixel Configuration & Test Modal */}
      <PixelModal
        isOpen={isPixelModalOpen}
        onClose={() => setIsPixelModalOpen(false)}
        onPixelUpdated={refreshPixelStatus}
      />
    </div>
  );
}

import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Play, ExternalLink, ShieldCheck, Copy, Check } from 'lucide-react';
import {
  getMetaPixelId,
  setMetaPixelId,
  trackPurchase,
  trackInitiateCheckout,
  DEFAULT_CHECKOUT_URL,
  PRODUCT_NAME,
  PRODUCT_PRICE,
} from '../utils/pixel';

interface PixelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPixelUpdated: () => void;
}

export const PixelModal: React.FC<PixelModalProps> = ({
  isOpen,
  onClose,
  onPixelUpdated,
}) => {
  const [pixelIdInput, setPixelIdInput] = useState<string>(() => getMetaPixelId());
  const [copied, setCopied] = useState<boolean>(false);
  const [lastEventFired, setLastEventFired] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMetaPixelId(pixelIdInput);
    onPixelUpdated();
    setLastEventFired(`Pixel ID "${pixelIdInput.trim()}" salvo com sucesso!`);
  };

  const handleTestPurchase = () => {
    trackPurchase({
      name: PRODUCT_NAME,
      price: PRODUCT_PRICE,
      transactionId: `TEST-${Date.now()}`,
    });
    setLastEventFired(
      `Evento "Purchase" disparado! (Valor: R$ ${PRODUCT_PRICE.toFixed(2)}, Moeda: BRL)`
    );
  };

  const handleTestInitiateCheckout = () => {
    trackInitiateCheckout();
    setLastEventFired(
      `Evento "InitiateCheckout" disparado! (Valor: R$ ${PRODUCT_PRICE.toFixed(2)}, Moeda: BRL)`
    );
  };

  const handleCopyCheckout = () => {
    navigator.clipboard.writeText(DEFAULT_CHECKOUT_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeId = getMetaPixelId();

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl text-left border border-gray-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#2563EB]">
            <ShieldCheck size={26} />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900">
              Gerenciador de Pixel da Meta
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              Integração oficial limpa · Checkout Wiapy + Meta Pixel
            </p>
          </div>
        </div>

        {/* Pixel Status */}
        <div className="mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Status do Pixel
            </span>
            {activeId ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
                <CheckCircle2 size={14} /> Ativo: {activeId}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800">
                <AlertCircle size={14} /> Aguardando seu ID
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Nenhum pixel de terceiros está na página. O script original foi completamente removido e substituído por uma conexão direta pronta para receber o seu ID.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSave} className="mb-6 space-y-3">
          <label className="block text-xs font-black uppercase tracking-wider text-gray-700">
            Seu ID do Pixel da Meta (Facebook Pixel)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ex: 123456789012345"
              value={pixelIdInput}
              onChange={(e) => setPixelIdInput(e.target.value)}
              className="flex-1 rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-800 focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20"
            />
            <button
              type="submit"
              className="rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition cursor-pointer shadow-sm"
            >
              Salvar
            </button>
          </div>
          <p className="text-[11px] text-gray-400">
            Dica: Você também pode passar o pixel via link: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 font-mono">?pixel=SEU_ID</code> ou na variável <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700 font-mono">VITE_META_PIXEL_ID</code>.
          </p>
        </form>

        {/* Event Testing Buttons */}
        <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
          <span className="block text-xs font-black uppercase tracking-wider text-blue-900 mb-2">
            Testar Eventos do Pixel (Meta Events Manager)
          </span>
          <p className="text-xs text-blue-800 mb-3">
            Clique para enviar eventos de teste e verificar em tempo real no Gerenciador de Eventos da Meta:
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleTestPurchase}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#16A34A] px-3.5 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-green-700 transition cursor-pointer"
            >
              <Play size={13} /> Testar Evento Purchase (R$ 27,00)
            </button>
            <button
              type="button"
              onClick={handleTestInitiateCheckout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#2563EB] px-3.5 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-blue-700 transition cursor-pointer"
            >
              <Play size={13} /> Testar InitiateCheckout
            </button>
          </div>

          {lastEventFired && (
            <div className="mt-3 rounded-lg bg-white p-2.5 text-xs font-medium text-emerald-800 border border-emerald-200 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>{lastEventFired}</span>
            </div>
          )}
        </div>

        {/* Checkout Link Verification */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <span className="block text-xs font-black uppercase tracking-wider text-gray-600 mb-1.5">
            Link de Checkout Configurado (Wiapy)
          </span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={DEFAULT_CHECKOUT_URL}
              className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-mono text-gray-600 select-all"
            />
            <button
              type="button"
              onClick={handleCopyCheckout}
              title="Copiar link"
              className="rounded-lg border border-gray-200 bg-white p-2 text-gray-600 hover:text-gray-900 transition cursor-pointer"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            </button>
            <a
              href={DEFAULT_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-pink-500 p-2 text-white hover:bg-pink-600 transition cursor-pointer"
              title="Abrir checkout"
            >
              <ExternalLink size={14} />
            </a>
          </div>
          <p className="mt-2 text-[11px] text-gray-500">
            Todos os botões da página direcionam diretamente para este checkout, preservando suas UTMs e disparando o evento <code className="font-semibold text-gray-700">InitiateCheckout</code>.
          </p>
        </div>

        {/* Close Button Footer */}
        <div className="mt-6 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gray-200 px-5 py-2 text-xs font-bold text-gray-700 hover:bg-gray-300 transition cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

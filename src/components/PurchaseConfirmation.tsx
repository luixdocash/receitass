import React, { useEffect } from 'react';
import { CheckCircle2, Download, Mail, MessageSquare, ArrowLeft, BookOpen } from 'lucide-react';
import { trackPurchase, PRODUCT_NAME, PRODUCT_PRICE } from '../utils/pixel';

interface PurchaseConfirmationProps {
  onBackToSalesPage: () => void;
}

export const PurchaseConfirmation: React.FC<PurchaseConfirmationProps> = ({
  onBackToSalesPage,
}) => {
  useEffect(() => {
    // Automatically trigger Meta Pixel Purchase event on thank-you confirmation!
    trackPurchase({
      name: PRODUCT_NAME,
      price: PRODUCT_PRICE,
      transactionId: `WIAPY-${Date.now()}`,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-orange-100">
        
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle2 size={44} />
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-emerald-100 text-emerald-800 mb-3">
          ✓ Pagamento Aprovado com Sucesso
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
          Parabéns pela sua compra!
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Seu acesso ao <strong className="text-[#EA580C]">Pacote Completo de Receitas de Batidas na Garrafa, Drinks e Bebidas Especiais</strong> com todos os <strong>7 Materiais Digitais</strong> foi liberado.
        </p>

        {/* Steps box */}
        <div className="text-left bg-orange-50/50 rounded-2xl p-6 border border-orange-100 space-y-4 mb-8">
          <h2 className="text-xs font-black uppercase tracking-wider text-gray-500">
            Como acessar seus 7 materiais agora:
          </h2>

          <div className="flex items-start gap-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Mail size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">1. Verifique seu E-mail</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enviamos os links diretos para download dos 3 guias principais e dos 4 bônus no e-mail cadastrado no checkout. (Confira também a caixa de spam ou promoções).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <MessageSquare size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">2. Mensagem no WhatsApp</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Você também recebe a notificação com os arquivos digitais no número de WhatsApp informado na compra.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Download size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">3. Salve no Celular ou Computador</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Todos os PDFs e a planilha podem ser baixados e consultados a qualquer momento offline. O seu acesso é vitalício.
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onBackToSalesPage}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#EA580C] hover:text-[#C2410C] transition cursor-pointer"
        >
          <ArrowLeft size={16} /> Voltar à página principal
        </button>

      </div>
    </div>
  );
};

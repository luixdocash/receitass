/**
 * Meta Pixel & Checkout Tracking Utility
 *
 * Configured specifically for:
 * Checkout URL: https://pay.wiapy.com/KXUUnQ7hR0ux
 * Meta Pixel Event: Purchase & InitiateCheckout
 */

export const DEFAULT_CHECKOUT_URL = 'https://pay.wiapy.com/KXUUnQ7hR0ux';
export const PRODUCT_NAME = 'PACOTE COMPLETO DE RECEITAS DE BATIDAS NA GARRAFA, DRINKS E BEBIDAS ESPECIAIS';
export const PRODUCT_PRICE = 27.00;
export const PRODUCT_CURRENCY = 'BRL';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
    META_PIXEL_ID?: string;
    _metaPixelActive?: boolean;
  }
}

export const DEFAULT_META_PIXEL_ID = '4661170777531691';

/**
 * Returns current configured Meta Pixel ID from storage, window or env
 */
export function getMetaPixelId(): string {
  if (typeof window === 'undefined') return DEFAULT_META_PIXEL_ID;
  
  // 1. URL search params (?pixel=... or ?pixelId=...)
  try {
    const params = new URLSearchParams(window.location.search);
    const queryPixel = params.get('pixel') || params.get('pixelId') || params.get('meta_pixel');
    if (queryPixel) {
      localStorage.setItem('meta_pixel_id', queryPixel.trim());
      return queryPixel.trim();
    }
  } catch (e) {
    // ignore storage restrictions
  }

  // 2. Global window override
  if (window.META_PIXEL_ID && window.META_PIXEL_ID.trim()) {
    return window.META_PIXEL_ID.trim();
  }

  // 3. LocalStorage
  try {
    const saved = localStorage.getItem('meta_pixel_id');
    if (saved && saved.trim()) return saved.trim();
  } catch (e) {
    // ignore
  }

  // 4. Vite Environment variable
  try {
    const envPixel = import.meta.env.VITE_META_PIXEL_ID;
    if (envPixel && typeof envPixel === 'string' && envPixel.trim()) {
      return envPixel.trim();
    }
  } catch (e) {
    // ignore
  }

  return DEFAULT_META_PIXEL_ID;
}

/**
 * Updates or configures the Meta Pixel ID dynamically
 */
export function setMetaPixelId(pixelId: string): void {
  if (typeof window === 'undefined') return;
  const cleanId = pixelId.trim();
  try {
    if (cleanId) {
      localStorage.setItem('meta_pixel_id', cleanId);
    } else {
      localStorage.removeItem('meta_pixel_id');
    }
  } catch (e) {
    // ignore
  }

  window.META_PIXEL_ID = cleanId;

  if (cleanId && typeof window.fbq === 'function') {
    window.fbq('init', cleanId);
    window.fbq('track', 'PageView');
    window._metaPixelActive = true;
  }
}

/**
 * Build destination checkout URL preserving UTM and tracking parameters
 */
export function buildCheckoutUrl(customBaseUrl?: string): string {
  const base = customBaseUrl || DEFAULT_CHECKOUT_URL;
  if (typeof window === 'undefined') return base;

  try {
    const targetUrl = new URL(base);
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.forEach((val, key) => {
      // Don't overwrite parameters if already set in targetUrl
      if (!targetUrl.searchParams.has(key)) {
        targetUrl.searchParams.set(key, val);
      }
    });

    return targetUrl.toString();
  } catch (e) {
    return base;
  }
}

/**
 * Track InitiateCheckout event on Meta Pixel
 */
export function trackInitiateCheckout(details?: { name?: string; price?: number }): void {
  const name = details?.name || PRODUCT_NAME;
  const price = details?.price ?? PRODUCT_PRICE;

  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'InitiateCheckout', {
        content_name: name,
        content_category: 'E-books / Receitas de Batidas, Drinks e Bebidas',
        value: price,
        currency: PRODUCT_CURRENCY,
        num_items: 1,
      });
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking InitiateCheckout:', err);
    }
  }
}

/**
 * Track Purchase event on Meta Pixel
 */
export function trackPurchase(details?: {
  name?: string;
  price?: number;
  transactionId?: string;
  currency?: string;
}): void {
  const name = details?.name || PRODUCT_NAME;
  const price = details?.price ?? PRODUCT_PRICE;
  const currency = details?.currency || PRODUCT_CURRENCY;
  const transactionId = details?.transactionId || `SP-${Date.now()}`;

  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Purchase', {
        content_name: name,
        content_type: 'product',
        value: price,
        currency: currency,
        num_items: 1,
        transaction_id: transactionId,
      });
      console.log(`[Meta Pixel] Purchase event tracked: R$ ${price.toFixed(2)} (${transactionId})`);
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking Purchase:', err);
    }
  }
}

/**
 * Direct all purchase clicks directly to checkout
 */
export function handleBuyClick(e?: React.MouseEvent): void {
  if (e) {
    e.preventDefault();
  }

  // 1. Fire InitiateCheckout on Meta Pixel
  trackInitiateCheckout();

  // 2. Build full URL with UTMs and redirect
  const destination = buildCheckoutUrl();
  window.location.href = destination;
}

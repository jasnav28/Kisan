export const GAZETTE = '16th February, 2026 S.O. 876(E).';

export const PRODUCTS = [
  { 
    brand: 'KISAN - HUMATE', 
    specification: 'Potassium Humate 49% (Powder)', 
    category: 'Humic Acid and Fulvic Acid  and their Derivatives',
    crops: ['Paddy', 'Tomato'], 
    dosage: ['Paddy:One Soil application at  1 kg/ha.', 'Tomato:One Soil application at 1 kg/ha.'], 
    gazette: '16th February, 2026 S.O. 876(E).', 
    composition: [
      '(i)  Potassium humate (Source: Leonardite) per cent. by weight, minimum 49', 
      '(ii) Silwet power (adjuvant) per cent. by weight, maximum 0.5',
      '(iii) Carboxymethyl cellulose per cent. by weight, maximum 1.0',
      '(iv) Maltodextrin powder per cent. by weight QS',
      '(v) Total (per cent.) 100'
    ] 
  }
];

export const SLUG_TO_BRAND = {
  'KISAN - HUMATE': 'KISAN - HUMATE',
  'KISAN-HUMATE': 'KISAN - HUMATE',
  'KISAN%20-%20HUMATE': 'KISAN - HUMATE',
};

export function findProductBySlug(slug) {
  if (!slug) return PRODUCTS[0];
  
  const decoded = decodeURIComponent(slug).toUpperCase();
  const normalized = decoded.replace(/-/g, ' ').replace(/\+/g, ' ').trim();
  
  // Try direct match in SLUG_TO_BRAND
  if (SLUG_TO_BRAND[normalized]) return findProductByBrand(SLUG_TO_BRAND[normalized]);
  if (SLUG_TO_BRAND[decoded]) return findProductByBrand(SLUG_TO_BRAND[decoded]);

  // Try matching against brand names directly
  const found = PRODUCTS.find(p => 
    p.brand.toUpperCase() === normalized || 
    p.brand.toUpperCase().replace(/\s+/g, '') === normalized.replace(/\s+/g, '')
  );
  
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase()) || PRODUCTS[0];
}

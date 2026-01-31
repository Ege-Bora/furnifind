// Centralized brand configuration for FurniFind
// All affiliate partner brands are defined here for easy maintenance

export interface Brand {
  name: string;
  network: 'AWIN' | 'CJ';
  commission: number;
  productCount: string;
  available: boolean;
  countries: string[];
  category: 'major' | 'specialty';
}

// AWIN Network Partners
export const AWIN_BRANDS: Brand[] = [
  {
    name: 'Maisons du Monde',
    network: 'AWIN',
    commission: 8,
    productCount: '11K+',
    available: true,
    countries: ['FR', 'DE', 'NL', 'BE', 'ES', 'IT'],
    category: 'major',
  },
  {
    name: 'La Redoute',
    network: 'AWIN',
    commission: 7,
    productCount: '40K+',
    available: true,
    countries: ['FR', 'BE', 'CH'],
    category: 'major',
  },
  {
    name: 'Etsy',
    network: 'AWIN',
    commission: 13,
    productCount: '1M+',
    available: true,
    countries: ['UK', 'US', 'EU'],
    category: 'major',
  },
  {
    name: 'Hoffmann Germany',
    network: 'AWIN',
    commission: 12,
    productCount: '5K+',
    available: true,
    countries: ['DE', 'AT'],
    category: 'specialty',
  },
  {
    name: 'Meinewand',
    network: 'AWIN',
    commission: 14,
    productCount: '3K+',
    available: true,
    countries: ['DE'],
    category: 'specialty',
  },
  {
    name: 'Seltmann Weiden',
    network: 'AWIN',
    commission: 12,
    productCount: '2K+',
    available: true,
    countries: ['DE', 'AT', 'CH'],
    category: 'specialty',
  },
  {
    name: 'OTTO Office',
    network: 'AWIN',
    commission: 8,
    productCount: '10K+',
    available: true,
    countries: ['DE'],
    category: 'specialty',
  },
  {
    name: 'Oxfam Online Shop',
    network: 'AWIN',
    commission: 10,
    productCount: '5K+',
    available: true,
    countries: ['UK'],
    category: 'specialty',
  },
  {
    name: 'Busy B',
    network: 'AWIN',
    commission: 11,
    productCount: '1K+',
    available: true,
    countries: ['UK', 'EU'],
    category: 'specialty',
  },
  {
    name: 'Happy Lamps',
    network: 'AWIN',
    commission: 6,
    productCount: '2K+',
    available: true,
    countries: ['DE', 'AT'],
    category: 'specialty',
  },
];

// CJ Affiliate Network Partners
export const CJ_BRANDS: Brand[] = [
  {
    name: 'Wayfair',
    network: 'CJ',
    commission: 7,
    productCount: '14M+',
    available: true,
    countries: ['US', 'UK', 'DE', 'CA'],
    category: 'major',
  },
  {
    name: 'Joss & Main',
    network: 'CJ',
    commission: 7,
    productCount: '2M+',
    available: true,
    countries: ['US'],
    category: 'major',
  },
  {
    name: 'AllModern',
    network: 'CJ',
    commission: 7,
    productCount: '1M+',
    available: true,
    countries: ['US'],
    category: 'major',
  },
  {
    name: 'Birch Lane',
    network: 'CJ',
    commission: 7,
    productCount: '1M+',
    available: true,
    countries: ['US'],
    category: 'major',
  },
];

// Combined list of all brands
export const ALL_BRANDS: Brand[] = [...AWIN_BRANDS, ...CJ_BRANDS];

// Get only major retailers for prominent display
export const MAJOR_BRANDS: Brand[] = ALL_BRANDS.filter(b => b.category === 'major');

// Get specialty brands
export const SPECIALTY_BRANDS: Brand[] = ALL_BRANDS.filter(b => b.category === 'specialty');

// Store names array for type definitions and filters
export const STORE_NAMES = ALL_BRANDS.map(b => b.name) as const;

// Type for Store (derived from brand names)
export type StoreName = typeof STORE_NAMES[number];

// Helper function to get brand by name
export function getBrandByName(name: string): Brand | undefined {
  return ALL_BRANDS.find(b => b.name === name);
}

// Helper function to get brands by network
export function getBrandsByNetwork(network: 'AWIN' | 'CJ'): Brand[] {
  return ALL_BRANDS.filter(b => b.network === network);
}

// Marketing text helpers
export const BRAND_DISPLAY_TEXT = {
  heroCount: '14 Partner Retailers',
  majorBrands: 'Wayfair, Maisons du Monde, La Redoute',
  tagline: 'Search furniture from Wayfair, Maisons du Monde, La Redoute, and 50+ European retailers',
  affiliateDisclosure: 'We partner with leading retailers across AWIN and CJ Affiliate networks, including Wayfair, Maisons du Monde, La Redoute, Etsy, and specialty furniture brands across Europe.',
};

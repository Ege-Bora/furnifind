export type ProductCategory = 'Sofa' | 'Chair' | 'Table' | 'Desk' | 'Bed';
export type ProductStyle = 'Modern' | 'Scandinavian' | 'Industrial' | 'Rustic' | 'Mid-Century';
export type ProductColor = 'Gray' | 'White' | 'Black' | 'Brown' | 'Blue' | 'Beige';
export type ProductMaterial = 'Wood' | 'Metal' | 'Fabric' | 'Leather' | 'Velvet';

// Store type - All affiliate partner brands (AWIN + CJ networks)
// Major retailers
export type Store =
  // CJ Affiliate Network - Major
  | 'Wayfair'
  | 'Joss & Main'
  | 'AllModern'
  | 'Birch Lane'
  // AWIN Network - Major
  | 'Maisons du Monde'
  | 'La Redoute'
  | 'Etsy'
  // AWIN Network - Specialty
  | 'Hoffmann Germany'
  | 'Meinewand'
  | 'Seltmann Weiden'
  | 'OTTO Office'
  | 'Oxfam Online Shop'
  | 'Busy B'
  | 'Happy Lamps';

export interface Product {
  id: string;
  name: string;
  price: number;
  store: Store;
  category: ProductCategory;
  style: ProductStyle;
  color: ProductColor;
  material: ProductMaterial;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  productUrl: string;
  tags: string[];
  matchPercentage?: number;
}

export interface FilterOptions {
  category: ProductCategory | 'All';
  priceRange: [number, number];
  stores: Store[];
}

export interface AIAnalysis {
  detected: string;
  category: ProductCategory;
  style: ProductStyle;
  color: ProductColor;
  confidence: number;
}

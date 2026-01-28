export type ProductCategory = 'Sofa' | 'Chair' | 'Table' | 'Desk' | 'Bed';
export type ProductStyle = 'Modern' | 'Scandinavian' | 'Industrial' | 'Rustic' | 'Mid-Century';
export type ProductColor = 'Gray' | 'White' | 'Black' | 'Brown' | 'Blue' | 'Beige';
export type ProductMaterial = 'Wood' | 'Metal' | 'Fabric' | 'Leather' | 'Velvet';
export type Store = 'Wayfair' | 'IKEA' | 'Article' | 'West Elm' | 'Pottery Barn';

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

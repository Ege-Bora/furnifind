'use client';

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageUpload from '@/components/ImageUpload';
import FilterBar from '@/components/FilterBar';
import MobileFilterDrawer from '@/components/MobileFilterDrawer';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/lib/products';
import { FilterOptions, AIAnalysis, Product } from '@/lib/types';

// Disable SSR for FeaturedProducts to avoid hydration mismatch
const FeaturedProducts = dynamic(
  () => import('@/components/FeaturedProducts'),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center">
        <p className="text-gray-500">Loading featured products...</p>
      </div>
    )
  }
);

export default function Home() {
  const [showUpload, setShowUpload] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All',
    priceRange: [0, 3000],
    stores: [],
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isFilterLoading, setIsFilterLoading] = useState(false);

  const uploadSectionRef = useRef<HTMLDivElement>(null);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    setShowUpload(true);
    setTimeout(() => {
      uploadSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAnalysisComplete = (analysis: AIAnalysis, imageUrl: string) => {
    setAiAnalysis(analysis);
    setUploadedImage(imageUrl);

    // Auto-filter by detected category
    setFilters(prev => ({
      ...prev,
      category: analysis.category,
    }));
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    console.log('🔄 Filter Change:', {
      previous: filters,
      new: newFilters,
      changed: {
        category: filters.category !== newFilters.category,
        priceRange: filters.priceRange[0] !== newFilters.priceRange[0] || filters.priceRange[1] !== newFilters.priceRange[1],
        stores: filters.stores.length !== newFilters.stores.length,
      }
    });

    setFilters(newFilters);

    // Brief loading state for visual feedback (since price changes are now debounced)
    setIsFilterLoading(true);
    setTimeout(() => setIsFilterLoading(false), 100);
  };

  const getFilteredProducts = (): Product[] => {
    console.log('🔍 Starting filter with:', {
      category: filters.category,
      priceRange: filters.priceRange,
      stores: filters.stores,
      totalProducts: products.length,
    });

    let filtered = [...products];

    // Apply AI matching if analysis is available
    if (aiAnalysis) {
      filtered = filtered.map(product => {
        let matchScore = 0;

        // Match by category (highest weight)
        if (product.category === aiAnalysis.category) matchScore += 40;

        // Match by style
        if (product.style === aiAnalysis.style) matchScore += 30;

        // Match by color
        if (product.color === aiAnalysis.color) matchScore += 20;

        // Random variation
        matchScore += Math.floor(Math.random() * 10);

        return {
          ...product,
          matchPercentage: Math.min(matchScore, 99),
        };
      });

      // Sort by match percentage
      filtered.sort((a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0));
    }

    const beforeCategoryFilter = filtered.length;

    // Apply category filter
    if (filters.category !== 'All') {
      filtered = filtered.filter(p => p.category === filters.category);
      console.log(`📁 Category filter (${filters.category}): ${beforeCategoryFilter} → ${filtered.length} products`);
    }

    const beforePriceFilter = filtered.length;

    // Apply price range filter
    filtered = filtered.filter(
      p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    console.log(`💰 Price filter ($${filters.priceRange[0]}-$${filters.priceRange[1]}): ${beforePriceFilter} → ${filtered.length} products`);

    const beforeStoreFilter = filtered.length;

    // Apply store filter
    if (filters.stores.length > 0) {
      filtered = filtered.filter(p => filters.stores.includes(p.store));
      console.log(`🏪 Store filter (${filters.stores.join(', ')}): ${beforeStoreFilter} → ${filtered.length} products`);
    }

    console.log(`✅ Final result: ${filtered.length} products`);
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  // Debug: Log EXACTLY what we're passing to ProductGrid
  console.log('🎯 RENDER CHECK:', {
    filteredProductsLength: filteredProducts.length,
    filteredProductsIsArray: Array.isArray(filteredProducts),
    filteredProductsType: typeof filteredProducts,
    firstProduct: filteredProducts[0]?.name,
    isLoading: isFilterLoading,
    showUpload,
    aiAnalysis: !!aiAnalysis,
    willRenderProductsSection: showUpload || !!aiAnalysis,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <Hero onGetStarted={handleGetStarted} />

        {showUpload && (
          <section ref={uploadSectionRef} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Upload Your Furniture Image
                </h2>
                <p className="text-base sm:text-lg text-gray-700">
                  Let our AI find similar products from top stores
                </p>
              </div>

              <ImageUpload onAnalysisComplete={handleAnalysisComplete} />

              {aiAnalysis && (
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        AI Analysis Complete
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Detected: <span className="font-semibold">{aiAnalysis.detected}</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-800 border border-gray-200">
                          Category: {aiAnalysis.category}
                        </span>
                        <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-800 border border-gray-200">
                          Style: {aiAnalysis.style}
                        </span>
                        <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-800 border border-gray-200">
                          Color: {aiAnalysis.color}
                        </span>
                        <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                          {Math.round(aiAnalysis.confidence * 100)}% Confidence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {(showUpload || aiAnalysis) && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-6">
                <Button
                  onClick={() => setIsMobileFilterOpen(true)}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-all py-6 rounded-xl font-semibold"
                >
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Filters Sidebar - Hidden on mobile, visible on large screens */}
                <div className="hidden lg:block lg:col-span-1">
                  <div className="sticky top-24">
                    <FilterBar
                      filters={filters}
                      onFiltersChange={handleFiltersChange}
                    />
                  </div>
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  <ProductGrid
                    products={filteredProducts}
                    isLoading={isFilterLoading}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Filter Drawer */}
            <MobileFilterDrawer
              isOpen={isMobileFilterOpen}
              onClose={() => setIsMobileFilterOpen(false)}
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
          </section>
        )}

        {/* Featured Products Carousel */}
        {!showUpload && !aiAnalysis && <FeaturedProducts />}
      </main>

      <Footer />
    </div>
  );
}

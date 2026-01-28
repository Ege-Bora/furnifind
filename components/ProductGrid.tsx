'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export default function ProductGrid({ products, isLoading = false }: ProductGridProps) {
  useEffect(() => {
    console.log('📦 ProductGrid received:', {
      productsCount: products.length,
      isLoading,
      firstThree: products.slice(0, 3).map(p => ({ id: p.id, name: p.name, price: p.price }))
    });
  }, [products, isLoading]);

  console.log('🎨 ProductGrid RENDER:', {
    productsLength: products.length,
    isLoading,
    willShowLoading: isLoading,
    willShowEmpty: !isLoading && products.length === 0,
    willShowProducts: !isLoading && products.length > 0,
  });

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </motion.div>
        ) : products.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or upload a different image
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{products.length}</span> products
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              {products.map((product, index) => {
                if (index === 0) {
                  console.log('🔨 Mapping products, first product:', product.name);
                }
                return (
                  <div
                    key={product.id}
                    style={{ opacity: 1, transform: 'none', visibility: 'visible' }}
                  >
                    <ProductCard product={product} />
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

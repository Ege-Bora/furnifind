'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  // Randomize products on component mount
  const [featuredProducts] = useState<Product[]>(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12);
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600">
            Discover popular furniture from top retailers
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow Button */}
          <motion.button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg transition-all duration-300 ${
              prevBtnEnabled
                ? 'opacity-100 hover:shadow-xl cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </motion.button>

          {/* Right Arrow Button */}
          <motion.button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg transition-all duration-300 ${
              nextBtnEnabled
                ? 'opacity-100 hover:shadow-xl cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </motion.button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile scroll indicators */}
          <div className="md:hidden mt-6 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(featuredProducts.length / 1) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === 0 ? 'bg-purple-600 w-6' : 'bg-gray-300'
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

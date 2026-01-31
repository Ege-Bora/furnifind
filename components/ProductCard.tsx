'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, TrendingUp, Store } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < fullStars
                ? 'text-yellow-400 fill-yellow-400'
                : index === fullStars && hasHalfStar
                ? 'text-yellow-400 fill-yellow-400/50'
                : 'text-gray-300 fill-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      style={{ opacity: 1, visibility: 'visible', transform: 'none' }}
      className="hover:-translate-y-2 transition-transform duration-300"
    >
      <Card className="group overflow-hidden border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square bg-gray-100">
          {/* Match Badge */}
          {product.matchPercentage && (
            <div
              className="absolute top-3 left-3 z-20"
              style={{ opacity: 1, visibility: 'visible', transform: 'none' }}
            >
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-3 py-1.5 shadow-lg">
                <TrendingUp className="w-3 h-3 mr-1" />
                {product.matchPercentage}% Match
              </Badge>
            </div>
          )}

          {/* Store Badge */}
          <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm border-0 shadow-md">
              <Store className="w-3 h-3 mr-1" />
              {product.store}
            </Badge>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              style={{ opacity: 1, visibility: 'visible', transform: 'none' }}
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&auto=format';
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Quick View Button */}
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ y: 20 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-white text-purple-600 hover:bg-white/90 shadow-lg rounded-full px-6"
                onClick={() => window.open(product.productUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Quick View
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4">
          {/* Product Name */}
          <motion.h3
            className="font-semibold text-lg text-gray-900 line-clamp-2 min-h-[3.5rem] group-hover:text-purple-600 transition-colors leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            {product.name}
          </motion.h3>

          {/* Rating and Reviews */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {renderStars(product.rating)}
              <span className="text-sm font-medium text-gray-700">
                {product.rating}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {product.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {product.tags.slice(0, 3).map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full border border-purple-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Price Section */}
          <div className="pt-4 border-t-2 border-gray-100">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Price</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 mb-1">Available at</p>
                <p className="text-sm font-semibold text-gray-800">{product.store}</p>
              </div>
            </div>

            {/* View Product Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-6 font-semibold"
                onClick={() => window.open(product.productUrl, '_blank')}
              >
                View Product
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

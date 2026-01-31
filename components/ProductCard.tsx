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
    <div className="hover:-translate-y-2 transition-transform duration-300 h-full">
      <Card className="group overflow-hidden border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white h-full flex flex-col">
        {/* Image Container - Fixed height */}
        <div className="relative overflow-hidden h-48 flex-shrink-0 bg-gray-100">
          {/* Match Badge */}
          {product.matchPercentage && (
            <div className="absolute top-3 left-3 z-20">
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
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop&auto=format';
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

          {/* Quick View Button */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="sm"
              className="bg-white text-purple-600 hover:bg-white/90 shadow-lg rounded-full px-6"
              onClick={() => window.open(product.productUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Content - Flex grow to fill space */}
        <CardContent className="p-4 flex flex-col flex-1">
          {/* Product Name - Fixed height with line clamp */}
          <h3 className="font-semibold text-base text-gray-900 line-clamp-2 h-12 group-hover:text-purple-600 transition-colors leading-tight mb-2">
            {product.name}
          </h3>

          {/* Rating and Reviews */}
          <div className="flex items-center justify-between mb-2">
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

          {/* Tags - Fixed height */}
          <div className="flex flex-wrap gap-1.5 h-7 overflow-hidden mb-3">
            {product.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium bg-purple-50 text-purple-700 rounded-full border border-purple-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Spacer to push price/button to bottom */}
          <div className="flex-1" />

          {/* Price Section - Always at bottom */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Price</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 mb-0.5">Available at</p>
                <p className="text-sm font-semibold text-gray-800 truncate max-w-[100px]">{product.store}</p>
              </div>
            </div>

            {/* View Product Button */}
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl py-5 font-semibold"
              onClick={() => window.open(product.productUrl, '_blank')}
            >
              View Product
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

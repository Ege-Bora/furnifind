'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden border-2 border-gray-200 shadow-lg bg-white">
      {/* Image Skeleton */}
      <div className="relative aspect-square bg-gray-200 animate-pulse" />

      <CardContent className="p-6 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2" />
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
        </div>

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-7 bg-gray-200 rounded-full animate-pulse"
              style={{ width: `${60 + i * 10}px` }}
            />
          ))}
        </div>

        {/* Price Section Skeleton */}
        <div className="pt-4 border-t-2 border-gray-100">
          <div className="flex items-end justify-between mb-4">
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-12" />
              <div className="h-8 bg-gray-200 rounded animate-pulse w-24" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse w-16" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-20" />
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="h-14 bg-gray-200 rounded-xl animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

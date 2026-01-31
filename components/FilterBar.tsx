'use client';

import { useRef, useCallback } from 'react';
import { FilterOptions, ProductCategory, Store } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterBarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const categories: (ProductCategory | 'All')[] = ['All', 'Sofa', 'Chair', 'Table', 'Desk', 'Bed'];

// Grouped stores for better UX
const majorRetailers: Store[] = [
  'Wayfair',
  'Maisons du Monde',
  'La Redoute',
  'Etsy',
  'Joss & Main',
  'AllModern',
  'Birch Lane',
];

const specialtyBrands: Store[] = [
  'Hoffmann Germany',
  'Meinewand',
  'Seltmann Weiden',
  'OTTO Office',
  'Oxfam Online Shop',
  'Busy B',
  'Happy Lamps',
];

// Combined stores array for backward compatibility
const stores: Store[] = [...majorRetailers, ...specialtyBrands];

export default function FilterBar({ filters, onFiltersChange }: FilterBarProps) {
  const priceDebounceTimer = useRef<NodeJS.Timeout | null>(null);
  const filtersRef = useRef(filters);

  // Keep filters ref up to date
  filtersRef.current = filters;

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: category as ProductCategory | 'All',
    });
  };

  // Debounced price range change - only fires after user stops dragging for 300ms
  const handlePriceRangeChange = useCallback((values: number[]) => {
    // Clear any existing timeout
    if (priceDebounceTimer.current) {
      clearTimeout(priceDebounceTimer.current);
    }

    // Set new timeout to update filters after 300ms of no changes
    priceDebounceTimer.current = setTimeout(() => {
      onFiltersChange({
        ...filtersRef.current,
        priceRange: [values[0], values[1]],
      });
    }, 300);
  }, [onFiltersChange]);

  const handleStoreToggle = (store: Store) => {
    const newStores = filters.stores.includes(store)
      ? filters.stores.filter(s => s !== store)
      : [...filters.stores, store];

    onFiltersChange({
      ...filters,
      stores: newStores,
    });
  };

  const handleClearFilters = () => {
    onFiltersChange({
      category: 'All',
      priceRange: [0, 3000],
      stores: [],
    });
  };

  const hasActiveFilters =
    filters.category !== 'All' ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 3000 ||
    filters.stores.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="text-purple-600 hover:text-purple-700"
          >
            Clear all
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Category
          </label>
          <Select value={filters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Price Range
          </label>
          <div className="px-2">
            <Slider
              min={0}
              max={3000}
              step={100}
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              className="mb-4"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Store Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Retailers
          </label>
          <div className="max-h-80 overflow-y-auto pr-2 space-y-4">
            {/* Major Retailers */}
            <div>
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">
                Major Retailers
              </p>
              <div className="space-y-2">
                {majorRetailers.map((store) => (
                  <label
                    key={store}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.stores.includes(store)}
                      onChange={() => handleStoreToggle(store)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {store}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Specialty Brands */}
            <div>
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                Specialty Brands
              </p>
              <div className="space-y-2">
                {specialtyBrands.map((store) => (
                  <label
                    key={store}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.stores.includes(store)}
                      onChange={() => handleStoreToggle(store)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {store}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

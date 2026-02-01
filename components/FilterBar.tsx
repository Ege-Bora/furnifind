'use client';

import { useState, useRef, useCallback } from 'react';
import { FilterOptions, ProductCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterBarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

const categories: (ProductCategory | 'All')[] = ['All', 'Sofa', 'Chair', 'Table', 'Desk', 'Bed'];

// Generate 19 placeholder retail partners
const placeholderPartners = Array.from({ length: 19 }, (_, i) => ({
  id: `partner-${i + 1}`,
  name: `New Partner ${i + 1}`,
}));

const INITIAL_DISPLAY_COUNT = 6;

export default function FilterBar({ filters, onFiltersChange }: FilterBarProps) {
  const [showAllPartners, setShowAllPartners] = useState(false);
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
    filters.priceRange[1] !== 3000;

  const displayedPartners = showAllPartners
    ? placeholderPartners
    : placeholderPartners.slice(0, INITIAL_DISPLAY_COUNT);

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

      <div className="space-y-6">
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

        {/* Retailers Filter - Placeholder Partners */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Retailers
          </label>

          <div
            className={`space-y-1 pr-1 ${
              showAllPartners ? 'max-h-[300px] overflow-y-auto' : ''
            }`}
          >
            {displayedPartners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center gap-3 py-2 px-2 rounded-md cursor-not-allowed"
              >
                <input
                  type="checkbox"
                  disabled
                  className="w-[18px] h-[18px] min-w-[18px] min-h-[18px] border-gray-300 rounded opacity-40 cursor-not-allowed"
                />
                <span className="text-sm text-gray-400 flex-1">
                  {partner.name} <span className="text-gray-300">- Launching Soon</span>
                </span>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllPartners(!showAllPartners)}
            className="w-full mt-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
          >
            {showAllPartners ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Show all {placeholderPartners.length} partners...
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

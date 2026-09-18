import React from 'react';
import { RegionType } from '../types/trip.types';

export interface RegionFilterChipsProps {
  selectedRegion?: RegionType;
  onSelectRegion?: (region: RegionType) => void;
}

// Chips: Northern, Central, Southern, Eastern, Western, Northeastern, All
export const RegionFilterChips: React.FC<RegionFilterChipsProps> = () => {
  return null;
};

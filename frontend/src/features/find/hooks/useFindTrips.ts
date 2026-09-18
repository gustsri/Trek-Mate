import { useState } from 'react';
import { RegionType, TripItem } from '../types/trip.types';

export function useFindTrips() {
  const [selectedRegion, setSelectedRegion] = useState<RegionType>('All');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [trips, setTrips] = useState<TripItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    selectedRegion,
    setSelectedRegion,
    searchKeyword,
    setSearchKeyword,
    trips,
    isLoading
  };
}

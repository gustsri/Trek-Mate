import React from 'react';
import { TripItem } from '../types/trip.types';

export interface TripListProps {
  trips?: TripItem[];
  isLoading?: boolean;
}

export const TripList: React.FC<TripListProps> = () => {
  return null;
};

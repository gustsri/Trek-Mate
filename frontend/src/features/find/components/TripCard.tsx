import React from 'react';
import { TripItem } from '../types/trip.types';

export interface TripCardProps {
  trip?: TripItem;
  onClick?: () => void;
}

export const TripCard: React.FC<TripCardProps> = () => {
  return null;
};

import React from 'react';
import { MapLocationPin } from '../types/explore.types';

export interface MapPinMarkerProps {
  pin?: MapLocationPin;
  isActive?: boolean;
  onClick?: () => void;
}

export const MapPinMarker: React.FC<MapPinMarkerProps> = () => {
  return null;
};

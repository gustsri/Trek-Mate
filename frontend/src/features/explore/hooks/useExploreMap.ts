import { useState } from 'react';
import { MapLocationPin, MapViewportState } from '../types/explore.types';

export function useExploreMap() {
  const [pins, setPins] = useState<MapLocationPin[]>([]);
  const [selectedPin, setSelectedPin] = useState<MapLocationPin | null>(null);
  const [viewport, setViewport] = useState<MapViewportState>({
    zoomLevel: 1,
    centerLatitude: 13.7563,
    centerLongitude: 100.5018
  });

  return {
    pins,
    selectedPin,
    setSelectedPin,
    viewport,
    setViewport
  };
}

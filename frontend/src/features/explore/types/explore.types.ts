export interface MapLocationPin {
  id: string;
  name: string;
  region: string;
  latitude: number;
  longitude: number;
  thumbnailUrl?: string;
}

export interface MapViewportState {
  zoomLevel: number;
  centerLatitude: number;
  centerLongitude: number;
}

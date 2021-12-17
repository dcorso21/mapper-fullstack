export interface MapType {
  name: string;
  id: number;
}

export interface MapMarker {
  id: number;
  name: string;
}

export interface SearchCandidate {
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  place_id: string;
  reference: string;
  types: string[];
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Location {
  lat: number;
  lng: number;
}

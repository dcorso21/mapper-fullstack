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
  name: string;
}

interface Geometry {
  location: Location;
  viewport: {
    northeast: Location;
    southwest: Location;
  };
}

interface Location {
  lat: number;
  lng: number;
}

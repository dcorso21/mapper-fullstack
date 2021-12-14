import React from 'react';
import GoogleMapReact from 'google-map-react';

interface MarkerType {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent = ({ text }: MarkerType) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 37.24823536219344,
      lng: -78.1169912045482,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

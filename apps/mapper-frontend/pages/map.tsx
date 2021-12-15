import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

interface MarkerType {
  lat: number;
  lng: number;
  children?: JSX.Element | JSX.Element[];
}

const AnyReactComponent = ({ children }: MarkerType) => <div>{children}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 37.24823536219344,
      lng: -78.1169912045482,
    },
    zoom: 5,
  };

  useEffect(() => {
    axios
      .post('/api/places', { body: { searchTerm: 'Paris' } })
      .then((response) => console.log(response.data));
  }, []);

  function handleApiLoaded(map, maps) {
    console.log({map, maps})
    map.mapId = "629468ee39d0039f"
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        >
          <div
            style={{
              backgroundColor: 'blue',
              // borderRadius: 20,
              transform: 'rotateZ(45deg)',
              width: '5px',
              height: '5px',
              border: '2px solid black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </AnyReactComponent>
      </GoogleMapReact>
    </div>
  );
}

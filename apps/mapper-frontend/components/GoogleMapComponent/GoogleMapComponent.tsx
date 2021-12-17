import GoogleMapReact from 'google-map-react';

interface Props {
  center: {
    lat: number;
    lng: number;
  },
  zoom: number;
}

export default function GoogleMapComponent(props: Props) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
        }}
        // defaultCenter={props.center}
        center={props.center}
        zoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals

        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
      </GoogleMapReact>
    </div>
  );
}

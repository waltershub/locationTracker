import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = (props) => {
  console.log('herekjjijijijij');
  return (
    <GoogleMap defaultZoom={16} center={{ lat: 40.751094, lng: -73.987597 }} defaultCenter={{ lat: 40.751094, lng: -73.987597 }} />
  );
};
export default withGoogleMap(Map);

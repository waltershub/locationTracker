import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyASIGvujxniBb3bX8ZwMHjHbM13Ah6q9X';
const Map = props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 40.751094, lng: -73.987597 }}
  >
    {props.displayed.map(marker =>
      (<Marker
        key={marker._id}
        postion={{ lat: marker.latitude, lng: marker.longitude }}
        label={marker.deviceName}
      />)) }

  </GoogleMap>

);
export default withGoogleMap(Map);

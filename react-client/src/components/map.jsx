import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyASIGvujxniBb3bX8ZwMHjHbM13Ah6q9X';
const Map = props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 40.6219853, lng: -73.94007739999999 }}
  >
    {
      props.displayed.map(device => device.locations.map((location, i) => (
        <Marker
          key={i}
          position={{ lat: location.latitude, lng: location.longitude }}
          label={device.deviceNam}
        />
      )))
    }
  </GoogleMap>

);
export default withGoogleMap(Map);

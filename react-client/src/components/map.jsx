import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


// const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyASIGvujxniBb3bX8ZwMHjHbM13Ah6q9X';
const Map = props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.centre}
  >
    {
      props.displayed.map(device => device.locations.map((location, i) => (
        <Marker
          key={i}
          position={{ lat: location.latitude, lng: location.longitude }}
          label={device.deviceName}
          value={{ lat: location.latitude, lng: location.longitude }}
          onClick={() => { props.markerCentre({ lat: location.longitude, lng: location.longitude }); }}
        />
      )))
    }
  </GoogleMap>

);
export default withGoogleMap(Map);

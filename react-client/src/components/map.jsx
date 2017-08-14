import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


// const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyASIGvujxniBb3bX8ZwMHjHbM13Ah6q9X';
const Map = props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.centre}
  >
    {
      props.displayed.map((device, i) => (
        <Marker
          key={i}
          position={{ lat: device.locations[0].latitude, lng: device.locations[0].longitude }}
          label={device.deviceName}

          onClick={() => { props.markerCentre({ lat: device.locations[0].latitude, lng: device.locations[0].longitude }); }}
        />
      ))
    }
  </GoogleMap>

);
export default withGoogleMap(Map);

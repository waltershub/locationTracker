import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component {
  render() {
    console.log('here');
    const markers = this.props.markers || [];
    return (
      <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.751094, lng: -73.987597 }} >
        {markers.map(marker =>
          <Marker{...marker} />) }
      </GoogleMap>

    );
  }
}
export default withGoogleMap(Map);

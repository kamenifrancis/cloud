import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 37.7749,
         lng: -122.4194
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_API_KEY_GOES_HERE'
})(MapContainer);


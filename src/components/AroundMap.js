import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { AroundMarker } from './AroundMarker';

class NormalAroundMap extends React.Component {
  state = {
    isOpen: false,
  }

  onToggleOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }))
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <AroundMarker position={{ lat: -34.397, lng: 150.644 }} />
        <AroundMarker position={{ lat: -34.288, lng: 150.733 }} />
        <AroundMarker position={{ lat: -34.509, lng: 150.555 }} />
      </GoogleMap>
    );
  }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));

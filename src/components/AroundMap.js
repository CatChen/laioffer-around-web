import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { AroundMarker } from './AroundMarker';
import {
  POSITION_KEY,
} from '../constants';

class NormalAroundMap extends React.Component {
  state = {
    isOpen: false,
  }

  onToggleOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }))
  }

  reloadMarkers = () => {
    const center = this.map.getCenter();
    const position = { latitude: center.lat(), longitude: center.lng() };

    const bounds = this.map.getBounds();
    const northEast = bounds.getNorthEast();
    const east = new window.google.maps.LatLng(center.lat(), northEast.lng());
    const range =
      window.google.maps.geometry.spherical.computeDistanceBetween(center, east)
      / 1000;

    this.props.onChange(position, range);
  }

  saveMapRef = (mapInstance) => {
    this.map = mapInstance;
    window.map = mapInstance;
  }

  render() {
    const position = JSON.parse(localStorage.getItem(POSITION_KEY));

    return (
      <GoogleMap
        ref={this.saveMapRef}
        defaultZoom={11}
        defaultCenter={{ lat: position.latitude, lng: position.longitude }}
        onDragEnd={this.reloadMarkers}
        onZoomChanged={this.reloadMarkers}
      >
        {this.props.posts.map((post) => (
          <AroundMarker
            post={post}
            key={post.url}
          />
        ))}
      </GoogleMap>
    );
  }
}

export const AroundMap = withScriptjs(withGoogleMap(NormalAroundMap));

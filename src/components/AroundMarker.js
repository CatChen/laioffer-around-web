import React from 'react';
import {
  Marker,
  InfoWindow
} from "react-google-maps";
import {
  POST_TYPE_IMAGE,
  POST_TYPE_VIDEO,
} from '../constants';
import '../styles/AroundMarker.css';
import blueMarker from '../assets/blue-marker.svg';

export class AroundMarker extends React.Component {
  state = {
    isOpen: false,
  }

  onToggleOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }))
  }

  render() {
    const { location, user, message, url, type } = this.props.post;

    if (type === POST_TYPE_IMAGE) {
      return (
        <Marker
          position={{ lat: location.lat, lng: location.lon }}
          onMouseOver={this.onToggleOpen}
          onMouseOut={this.onToggleOpen}
        >
          {(
            this.state.isOpen ?
              (
                <InfoWindow onCloseClick={this.onToggleOpen}>
                  <div>
                    <img src={url} alt={message} class="around-marker-image" />
                    <div>{`${user}: ${message}`}</div>
                  </div>
                </InfoWindow>
              ) :
              null
          )}
        </Marker>
      );
    } else if (type === POST_TYPE_VIDEO) {
      return (
        <Marker
          position={{ lat: location.lat, lng: location.lon }}
          onClick={this.onToggleOpen}
          icon={{
            url: blueMarker,
            scaledSize: new window.google.maps.Size(26, 41),
          }}
        >
          {(
            this.state.isOpen ?
              (
                <InfoWindow onCloseClick={this.onToggleOpen}>
                  <div>
                    <video src={url} controls className="around-marker-video" />
                    <div>{`${user}: ${message}`}</div>
                  </div>
                </InfoWindow>
              ) :
              null
          )}
        </Marker>
      );
    }
  }
}

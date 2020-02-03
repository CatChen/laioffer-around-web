import React from 'react';
import {
  Marker,
  InfoWindow
} from "react-google-maps";
import '../styles/AroundMarker.css';

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
    const { location, user, message, url } = this.props.post;

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
  }
}

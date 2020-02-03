import React from 'react';
import {
  Marker,
  InfoWindow
} from "react-google-maps";

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
    const { location } = this.props.post;

    return (
      <Marker
        position={{ lat: location.lat, lng: location.lon }}
        onClick={this.onToggleOpen}
      >
        {(
          this.state.isOpen ?
            (
              <InfoWindow onCloseClick={this.onToggleOpen}>
                <div>InfoWindow</div>
              </InfoWindow>
            ) :
            null
        )}
      </Marker>
    );
  }
}

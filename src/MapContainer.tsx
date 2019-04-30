import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const styles = {
  width: 800,
  height: 500,
  display: "flex"
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };
  render() {
    const { google, initialCenter } = this.props;
    return (
      <div style={styles}>
        <Map
          google={google}
          zoom={14}
          style={styles}
          initialCenter={initialCenter}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5rWBM-TbBfeDO9jOQGdoU-jJyy1xQqbw"
})(MapContainer);

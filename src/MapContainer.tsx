import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const styles = {
  width: 800,
  height: 500,
  display: "flex"
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: true, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: { name: "Random House" } //Shows the infoWindow to the selected place upon a marker
  };
  constructor(props) {
    super(props);
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  //<Marker onClick={this.onMarkerClick} name={"Current location"} />
  render() {
    const { google, initialCenter, drivers, currentSelectedOrder } = this.props;
    return (
      <div style={styles}>
        <Map
          google={google}
          zoom={12}
          style={styles}
          initialCenter={initialCenter}
          onClick={this.onMapClicked}
        >
          {currentSelectedOrder ? (
            <Marker
              onClick={this.onMarkerClick}
              name={"CURRENT ORDER"}
              position={currentSelectedOrder.PickupAddress.coordinates}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                anchor: new google.maps.Point(32, 32),
                scaledSize: new google.maps.Size(64, 64)
              }}
            />
          ) : null}
          {drivers.map((item, index) => {
            return item.proximity === false ? (
              <Marker
                onClick={this.onMarkerClick}
                name={item.id}
                position={item.coordinates}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  anchor: new google.maps.Point(32, 32),
                  scaledSize: new google.maps.Size(64, 64)
                }}
                key={index}
              />
            ) : (
              <Marker
                onClick={this.onMarkerClick}
                name={item.id}
                position={item.coordinates}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  anchor: new google.maps.Point(32, 32),
                  scaledSize: new google.maps.Size(64, 64)
                }}
                key={index}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5rWBM-TbBfeDO9jOQGdoU-jJyy1xQqbw"
})(MapContainer);

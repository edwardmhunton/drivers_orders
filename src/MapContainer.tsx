import React from "react";
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  google
} from "google-maps-react";

const styles = {
  width: 800,
  height: 500,
  display: "flex"
};

export interface GoogleApiWrapperProps {
  google: google;
}

interface Driver {
  id: string;
  coordinates: object;
  proximity: boolean;
  distance: number;
}

interface Props {
  initialCenter: Array<object>;
  drivers: Array<Driver>;
  currentSelectedOrder?: {
    PackageSize: {
      coordinates: object;
    };
    PickupTime: string;
    id: number;
    PickupAddress: {
      coordinates: object;
    };
  };
}

export class MapContainer extends React.Component<Props> {
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

  // anchor: new google.maps.Point(32, 32),
  // scaledSize: new google.maps.Size(64, 64)

  getMarker(name, location, icon_url, index?) {
    return (
      <Marker
        onClick={this.onMarkerClick}
        name={name}
        position={location}
        icon={{
          url: icon_url
        }}
        key={!index ? undefined : index}
      />
    );
  }
  render() {
    const { initialCenter, drivers, currentSelectedOrder } = this.props;
    type ITEM = { id: number; proximity: number; coordinates: object };

    return (
      <div style={styles}>
        <Map
          google={google}
          zoom={12}
          style={styles}
          initialCenter={initialCenter}
          onClick={this.onMapClicked}
        >
          {currentSelectedOrder
            ? this.getMarker(
                "CURRENT ORDER",
                currentSelectedOrder.PickupAddress.coordinates,
                "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
              )
            : null}
          {drivers.map((driver: Driver, index: number) => {
            return driver.proximity === false
              ? this.getMarker(
                  driver.id,
                  driver.coordinates,
                  "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                  index
                )
              : this.getMarker(
                  driver.id,
                  driver.coordinates,
                  "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  index
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

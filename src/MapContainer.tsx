import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const styles = {
  width: 800,
  height: 500
};

export class MapContainer extends React.Component {
  render() {
    const { google, initialCenter } = this.props;
    return (
      <Map
        google={google}
        zoom={14}
        style={styles}
        initialCenter={initialCenter}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB5rWBM-TbBfeDO9jOQGdoU-jJyy1xQqbw"
})(MapContainer);

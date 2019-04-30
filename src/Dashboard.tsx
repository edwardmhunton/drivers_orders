import React from "react";
import * as R from "ramda";

import Map from "./MapContainer.tsx";
import { OrderCardList } from "./OrderCardList.tsx";
import { DriversList } from "./DriversList.tsx";

import ordersData from "../data/orderdata.json";
import driversData from "../data/driverdata.json";

const styles = {
  display: "flex",
  width: 1000,
  height: 500,
  fontFamily: "Arial, Helvetica, sans-serif"
};

const mapFlex = {
  display: "flex"
};

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const initialCenter = R.path(
      ["PickupAddress", "coordinates"],
      ordersData.orders[0]
    );
    return (
      <div style={styles} className="dashboard">
        <OrderCardList orders={ordersData.orders} />
        <div style={mapFlex}>
          <Map initialCenter={initialCenter} />
        </div>
        <DriversList drivers={driversData.drivers} />
      </div>
    );
  }
}

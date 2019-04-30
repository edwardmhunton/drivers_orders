import React from "react";
import * as R from "ramda";

import Map from "./MapContainer.tsx";
import { OrderCardList } from "./OrderCardList.tsx";

import ordersData from "../data/orderdata.json";
import driversData from "../data/driverdata.json";

const styles = {
  display: "flex",
  width: 1000,
  height: 500,
  fontFamily: "Arial, Helvetica, sans-serif"
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
        <Map initialCenter={initialCenter} drivers={driversData.drivers} />
      </div>
    );
  }
}

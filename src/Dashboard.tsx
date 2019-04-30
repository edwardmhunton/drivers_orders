import React from "react";

import { MapView } from "./MapView.tsx";
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
    return (
      <div style={styles} className="dashboard">
        <OrderCardList orders={ordersData.orders} />
        <MapView drivers={driversData.drivers} />
      </div>
    );
  }
}

import React from "react";

import { MapView } from "./MapView.tsx";
import { OrderCardList } from "./OrderCardList.tsx";

import orders from "../data/orderdata.json";
import drivers from "../data/driverdata.json";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard">
        <OrderCardList orders={orders} />
        <MapView drivers={drivers} />
      </div>
    );
  }
}

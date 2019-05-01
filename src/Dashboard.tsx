import React from "react";
import * as R from "ramda";

import Map from "./MapContainer.tsx";
import { OrderCardList } from "./OrderCardList.tsx";
import { DriversList } from "./DriversList.tsx";

import { getClosestDrivers } from "./utils/index.ts";

import ordersData from "../data/orderdata.json";
import driversData from "../data/driverdata.json";

import { stringCoordinatesToObject } from "./utils/index.ts";

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
  state = {
    currentSelectedOrder: undefined,
    driversData: driversData.drivers,
    ordersData: ordersData.orders,
    initialCenter: R.path(
      ["PickupAddress", "coordinates"],
      ordersData.orders[0]
    )
  };
  constructor(props) {
    super(props);
    this.selectAnOrder = this.selectAnOrder.bind(this);
    this.targetDrivers = this.targetDrivers.bind(this);
    this.changeOrderLocation = this.changeOrderLocation.bind(this);
  }
  targetDrivers() {
    this.setState({
      driversData: getClosestDrivers(
        this.state.driversData,
        this.state.currentSelectedOrder
      )
    });
  }

  selectAnOrder(order) {
    this.setState({ currentSelectedOrder: order }, this.targetDrivers);
  }

  getNewOrders(originalOrders, id, coordinates) {
    return originalOrders.map(item => {
      if (item.id === id) {
        item.PickupAddress.coordinates = stringCoordinatesToObject(coordinates);
      }
      return item;
    });
  }

  changeOrderLocation(id, coordinates) {
    this.setState({
      ordersData: getNewOrders(this.state.ordersData, id, coordinates)
    });
  }

  render() {
    return (
      <div style={styles} className="dashboard">
        <OrderCardList
          orders={this.state.ordersData}
          onPress={this.selectAnOrder}
          changeOrderLocation={this.changeOrderLocation}
        />
        <div style={mapFlex}>
          <Map
            currentSelectedOrder={this.state.currentSelectedOrder}
            initialCenter={this.state.initialCenter}
            drivers={this.state.driversData}
          />
        </div>
        <DriversList drivers={this.state.driversData} />
      </div>
    );
  }
}

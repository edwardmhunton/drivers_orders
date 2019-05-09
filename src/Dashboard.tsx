import React from "react";
import * as R from "ramda";

import Map from "./MapContainer.tsx";
import { OrderCardList } from "./OrderCardList.tsx";
import { DriversList } from "./DriversList.tsx";

import { getClosestDrivers } from "./utils/index.ts";

import ordersData from "../data/orderdata.json";
import driversData from "../data/driverdata.json";

import Grid from "@material-ui/core/Grid";

import { stringCoordinatesToObject } from "./utils/index.ts";

const mapFlex = {
  display: "flex"
};

interface Driver {
  id: string;
  coordinates: { lat: string; lng: string };
  proximity: boolean;
  distance: number;
}
interface Order {
  PackageSize: {
    width: string;
    height: string;
    length: string;
  };
  PickupTime: string;
  id: string;
  PickupAddress: {
    street_address: object;
    coordinates: { lat: string; lng: string };
  };
}

interface Props {}

interface State {
  driversData: Array<Driver>;
  ordersData: Array<Order>;
  currentSelectedOrder?: Order;
  initialCenter: object;
}

export class Dashboard extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.selectAnOrder = this.selectAnOrder.bind(this);
    this.targetDrivers = this.targetDrivers.bind(this);
    this.changeOrderLocation = this.changeOrderLocation.bind(this);
    this.state = {
      currentSelectedOrder: undefined,
      driversData: driversData.drivers,
      ordersData: ordersData.orders,
      initialCenter: R.path(
        ["PickupAddress", "coordinates"],
        ordersData.orders[0]
      )
    };
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
      ordersData: this.getNewOrders(this.state.ordersData, id, coordinates)
    });
  }

  render() {
    return (
      <Grid
        spacing={40}
        className="dashboard"
        item
        xs
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <OrderCardList
          orders={this.state.ordersData}
          onPress={this.selectAnOrder}
          currentSelectedOrder={this.state.currentSelectedOrder}
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
      </Grid>
    );
  }
}

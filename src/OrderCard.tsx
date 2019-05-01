import React from "react";

import { getHumanreadableDate } from "./utils/index.ts";

import { AddressField } from "./AddressField.tsx";
import { Dimensions } from "./Dimensions.tsx";

const styles = {
  flexDirection: "column",
  width: 200,
  height: 100,
  fontSize: 9,
  display: "flex"
};

export class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { order, onPress } = this.props;
    onPress(order);
  }

  render() {
    const { order, onPress, changeOrderLocation } = this.props;
    return (
      <div style={styles} onClick={this.handleClick}>
        <div>{`Pickup Time: ${getHumanreadableDate(order.PickupTime)}`}</div>
        <div>Pickup Address (Enter)</div>
        <AddressField order={order} changeOrderLocation={changeOrderLocation} />
        <div>
          <Dimensions {...order.PackageSize} />
        </div>
      </div>
    );
  }
}

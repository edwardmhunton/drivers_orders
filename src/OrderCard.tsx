import React from "react";

import { getHumanreadableDate } from "./utils/index.ts";

import { AddressField } from "./AddressField.tsx";
import { Dimensions } from "./Dimensions.tsx";

const styles = {
  display: "flex",
  flexDirection: "column",
  width: 200,
  height: 100,
  fontSize: 9
};

export class OrderCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { order } = this.props;
    return (
      <div style={styles}>
        <div>{`Pickup Time: ${getHumanreadableDate(order.PickupTime)}`}</div>
        <div>
          Pickup Address (Enter)
          <AddressField />
        </div>
        <div>
          <Dimensions {...order.PackageSize} />
        </div>
      </div>
    );
  }
}

import React from "react";

import { getHumanreadableDate } from "./utils/index.ts";

import { AddressField } from "./AddressField.tsx";
import { Dimensions } from "./Dimensions.tsx";

const styles = {
  flexDirection: "column",
  width: 200,
  height: 200,
  fontSize: 9,
  display: "flex",
  color: "grey",
  backgroundColor: "white"
};

const selectedStyles = {
  backgroundColor: "green",
  color: "white"
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
    const { order, onPress, changeOrderLocation, selected } = this.props;
    console.log("selected" + selected);
    return (
      <div
        style={selected ? Object.assign({}, styles, selectedStyles) : styles}
        className={"card"}
        onClick={this.handleClick}
      >
        <div className={"card-body"}>
          <h5 className={"card-title"}>{`Order ${order.id}`} </h5>
          <p>{`Pickup Time: ${getHumanreadableDate(order.PickupTime)}`}</p>
          <AddressField
            order={order}
            changeOrderLocation={changeOrderLocation}
          />
          <div>
            <Dimensions {...order.PackageSize} />
          </div>
        </div>
      </div>
    );
  }
}

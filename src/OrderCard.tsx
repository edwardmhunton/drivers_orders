import React from "react";

import { getHumanreadableDate } from "./utils/index.ts";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

import { AddressField } from "./AddressField.tsx";
import { Dimensions } from "./Dimensions.tsx";

const styles = {
  flexDirection: "column",
  width: 200,
  fontSize: 9,
  display: "flex",
  color: "grey",
  backgroundColor: "white"
};

const selectedStyles = {
  backgroundColor: "#03E64D",
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
    return (
      <Card
        style={selected ? Object.assign({}, styles, selectedStyles) : styles}
        className={"card"}
        onClick={this.handleClick}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {`Order ${order.id}`}{" "}
            </Typography>
            <Typography variant="subtitle2">Pickup Time:</Typography>
            <Typography variant="body1">
              {getHumanreadableDate(order.PickupTime)}
            </Typography>
            <Typography variant="subtitle2">
              <AddressField
                order={order}
                changeOrderLocation={changeOrderLocation}
              />
            </Typography>
            <Typography variant="subtitle2">
              <Dimensions {...order.PackageSize} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

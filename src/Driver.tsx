import React from "react";

import { Typography, Card } from "@material-ui/core";

const styles = {
  width: 300,
  height: 50,
  fontSize: 20,
  display: "flex",
  flexDirection: "column",
  margin: 10,
  textAlign: "left"
};

const liveDriver = {
  color: "#6991FD"
};
const nonLiveDriver = {
  color: "#FD7467"
};

interface Driver {
  id: string;
  coordinates: { lat: string; lng: string };
  proximity: boolean;
  distance: number;
}

export const Driver = (driver: Driver, key: number) => {
  const mergedStyles = driver.proximity
    ? Object.assign({}, styles, liveDriver)
    : Object.assign({}, styles, nonLiveDriver);
  return (
    <Card key={key} className={"badge badge-secondary"}>
      <Typography style={mergedStyles}>{`Driver ID: ${driver.id}`}</Typography>
    </Card>
  );
};

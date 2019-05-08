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

export const Driver = driver => {
  const mergedStyles = driver.proximity
    ? Object.assign({}, styles, liveDriver)
    : Object.assign({}, styles, nonLiveDriver);
  return (
    <Card className={"badge badge-secondary"}>
      <Typography style={mergedStyles}>{`Driver ID: ${driver.id}`}</Typography>
    </Card>
  );
};

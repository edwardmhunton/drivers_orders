import React from "react";

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
  color: "blue"
};
const nonLiveDriver = {
  color: "red"
};

export const Driver = driver => {
  const mergedStyles = driver.proximity
    ? Object.assign({}, styles, liveDriver)
    : Object.assign({}, styles, nonLiveDriver);
  return (
    <div
      style={mergedStyles}
      className={"badge badge-secondary"}
    >{`Driver ID: ${driver.id}`}</div>
  );
};

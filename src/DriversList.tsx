import React from "react";

import { Driver } from "./Driver.tsx";
import { ListItem } from "@material-ui/core";

const styles = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 50
};

export const DriversList = ({ drivers }) => {
  return (
    <div style={styles} className="driverlist">
      {drivers.map((item, index) => {
        return (
          <ListItem key={index}>
            <Driver key={index} {...item} />
          </ListItem>
        );
      })}
    </div>
  );
};

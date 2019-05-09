import React from "react";

import { Driver } from "./Driver.tsx";
import { ListItem } from "@material-ui/core";

const styles = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 50
} as React.CSSProperties;

interface Driver {
  id: string;
  coordinates: { lat: string; lng: string };
  proximity: boolean;
  distance: number;
}

interface Props {
  drivers: Array<Driver>;
}

export const DriversList = ({ drivers }: Props) => {
  return (
    <div style={styles} className="driverlist">
      {drivers.map((driver: Driver, index: number) => {
        return (
          <div>
            <ListItem key={index}>
              <Driver key={index} {...driver} />
            </ListItem>
          </div>
        );
      })}
    </div>
  );
};

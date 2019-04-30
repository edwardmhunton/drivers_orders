import React from "react";

import { Driver } from "./Driver.tsx";

const styles = {
  display: "flex",
  flexDirection: "column"
};

export class DriversList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { drivers } = this.props;
    return (
      <div style={styles} className="driverlist">
        {drivers.map((item, index) => {
          return <Driver key={index} driver={item} />;
        })}
      </div>
    );
  }
}

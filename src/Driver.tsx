import React from "react";

const styles = {
  width: 300,
  height: 50,
  fontSize: 20,
  display: "flex",
  flexDirection: "column"
};

export class Driver extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { driver } = this.props;
    return <div style={styles}>{`Driver ID: ${driver.id}`}</div>;
  }
}

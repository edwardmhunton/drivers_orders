import React from "react";

export class OrderCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { order } = this.props;
    return <div>{`This is order: ${order.id}`}</div>;
  }
}

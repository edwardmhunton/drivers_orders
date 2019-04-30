import React from "react";

import { OrderCard } from "./OrderCard.tsx";

const styles = {
  display: "flex",
  flexDirection: "column",
  width: 200,
  height: 500
};

export class OrderCardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { orders } = this.props;
    return (
      <div style={styles} className="ordercardlist">
        {orders.map((item, index) => {
          return <OrderCard key={index} order={item} />;
        })}
      </div>
    );
  }
}

import React from "react";

import { OrderCard } from "./OrderCard.tsx";

export class OrderCardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { orders } = this.props;
    return (
      <div className="ordercardlist">
        {orders.orders.map((item, index) => {
          return <OrderCard key={index} order={item} />;
        })}
      </div>
    );
  }
}

import React from "react";

import { OrderCard } from "./OrderCard.tsx";

const styles = {
  display: "flex",
  flexDirection: "column"
};

export class OrderCardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { orders, onPress, changeOrderLocation } = this.props;
    return (
      <div style={styles} className="ordercardlist">
        {orders.map((item, index) => {
          return (
            <OrderCard
              key={index}
              order={item}
              onPress={onPress}
              changeOrderLocation={changeOrderLocation}
            />
          );
        })}
      </div>
    );
  }
}

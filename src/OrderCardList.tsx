import React from "react";

import { OrderCard } from "./OrderCard.tsx";

const styles = {
  display: "flex",
  flexDirection: "column"
};

export const OrderCardList = ({ orders, onPress, changeOrderLocation }) => {
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
};

import React from "react";

import { OrderCard } from "./OrderCard.tsx";

const styles = {
  display: "flex",
  flexDirection: "column"
};

export const OrderCardList = ({
  orders,
  onPress,
  changeOrderLocation,
  currentSelectedOrder
}) => {
  return (
    <div style={styles} className="ordercardlist">
      {orders.map((item, index) => {
        return (
          <OrderCard
            key={index}
            order={item}
            onPress={onPress}
            selected={
              !currentSelectedOrder || currentSelectedOrder.id !== item.id
                ? false
                : true
            }
            changeOrderLocation={changeOrderLocation}
          />
        );
      })}
    </div>
  );
};

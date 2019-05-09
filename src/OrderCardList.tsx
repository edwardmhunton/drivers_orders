import React from "react";

import { OrderCard } from "./OrderCard.tsx";
import { List, ListItem } from "@material-ui/core";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
};

export const OrderCardList = ({
  orders,
  onPress,
  changeOrderLocation,
  currentSelectedOrder
}) => {
  return (
    <List style={styles} className="ordercardlist">
      {orders.map((item, index) => {
        return (
          <ListItem key={index}>
            <OrderCard
              k={index}
              order={item}
              onPress={onPress}
              selected={
                !currentSelectedOrder || currentSelectedOrder.id !== item.id
                  ? false
                  : true
              }
              changeOrderLocation={changeOrderLocation}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

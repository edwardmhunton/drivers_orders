/** @type {{root: React.CSSProperties}} */
import React from "react";

import { OrderCard } from "./OrderCard.tsx";
import { List, ListItem, WithStyles, createStyles } from "@material-ui/core";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
} as React.CSSProperties;
//extends WithStyles<typeof styles>

interface Props {
  orders: Array<object>;
  changeOrderLocation: () => {};
  currentSelectedOrder?: { id: string };

  onPress: () => {};
}

interface State {}

export const OrderCardList = ({
  orders,
  onPress,
  changeOrderLocation,
  currentSelectedOrder
}: Props) => {
  return (
    <List style={styles} className="ordercardlist">
      {orders.map((item: { id: string }, index) => {
        const selected =
          !currentSelectedOrder || currentSelectedOrder.id !== item.id
            ? false
            : true;
        return (
          <div>
            <ListItem key={index}>
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
            </ListItem>
          </div>
        );
      })}
    </List>
  );
};

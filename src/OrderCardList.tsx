/** @type {{root: React.CSSProperties}} */
import React from "react";

import { OrderCard } from "./OrderCard.tsx";
import { List, ListItem, WithStyles, createStyles } from "@material-ui/core";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start"
} as React.CSSProperties;

interface Order {
  PackageSize: {
    width: string;
    height: string;
    length: string;
  };
  PickupTime: string;
  id: string;
  PickupAddress: {
    street_address: object;
    coordinates: { lat: string; lng: string };
  };
}

interface Props {
  orders: Array<Order>;
  changeOrderLocation: any;
  currentSelectedOrder?: { id: string };

  onPress: any;
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
      {orders.map((order: Order, index: number) => {
        const selected =
          !currentSelectedOrder || currentSelectedOrder.id !== order.id
            ? false
            : true;
        return (
          <div>
            <ListItem key={index}>
              <OrderCard
                key={index}
                order={order}
                onPress={onPress}
                selected={
                  !currentSelectedOrder || currentSelectedOrder.id !== order.id
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

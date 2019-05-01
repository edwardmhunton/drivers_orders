import React from "react";

import renderer from "react-test-renderer";

import { OrderCardList } from "../OrderCardList";

const ordersData = {
  orders: [
    {
      id: "12345",
      PickupTime: "1556548991000",
      PickupAddress: {
        coordinates: { lat: "51.5325764", lng: "-0.0578597" },
        street_address: {
          post_code: "EX203LZ",
          address_line_1: "76 Kenworthy Road",
          city: "London"
        }
      },

      PackageSize: {
        length: "1000",
        width: "1000",
        height: "1000"
      }
    },
    {
      id: "678910",
      PickupTime: "1556548991000",
      PickupAddress: {
        coordinates: { lat: "51.55423", lng: "-0.03238" },
        street_address: {
          post_code: "EX203LZ",
          address_line_1: "76 Kenworthy Road",
          city: "London"
        }
      },
      PackageSize: {
        length: "1000",
        width: "1000",
        height: "1000"
      }
    }
  ]
};

describe("the fist test", () => {
  it("Renders Correctly", () => {
    const OrderCardListComponent = renderer
      .create(<OrderCardList orders={ordersData.orders} />)
      .toJSON();
    expect(OrderCardListComponent).toMatchSnapshot();
  });
});

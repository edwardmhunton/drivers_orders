import React from "react";

import renderer from "react-test-renderer";

import { OrderCard } from "../OrderCard";

describe("the fist test", () => {
  const order = {
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
  };
  it("Renders Correctly", () => {
    const OrderCardComponent = renderer
      .create(<OrderCard order={order} />)
      .toJSON();
    expect(OrderCardComponent).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";

import { AddressField } from "../AddressField";

describe("the fist test", () => {
  it("Renders Correctly", () => {
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
    const AddressFieldComponent = renderer
      .create(<AddressField order={order} />)
      .toJSON();
    expect(AddressFieldComponent).toMatchSnapshot();
  });
});

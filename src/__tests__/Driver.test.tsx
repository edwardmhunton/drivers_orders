import React from "react";

import renderer from "react-test-renderer";

import { Driver } from "../Driver";

describe("the fist test", () => {
  const driver = {
    id: "8376587365",
    coordinates: { lat: "51.57131", lng: "-0.1048" },
    proximity: false,
    distance: 6500
  };
  it("Renders Correctly", () => {
    const DriverComponent = renderer
      .create(<Driver driver={driver} />)
      .toJSON();
    expect(DriverComponent).toMatchSnapshot();
  });
});

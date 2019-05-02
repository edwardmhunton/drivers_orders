import React from "react";

import renderer from "react-test-renderer";

import { DriversList } from "../DriversList";

const driversData = {
  drivers: [
    {
      id: "9823983445",
      coordinates: { lat: "51.54473", lng: " -0.1357" },
      proximity: false,
      distance: 0
    },
    {
      id: "8376587365",
      coordinates: { lat: "51.57131", lng: "-0.1048" },
      proximity: false,
      distance: 0
    },
    {
      id: "456457568",
      coordinates: { lat: "51.57269", lng: "-0.03923" },
      proximity: false,
      distance: 0
    }
  ]
};

describe("DriverList test", () => {
  it("Renders Correctly", () => {
    const DriverListComponent = renderer
      .create(<DriversList drivers={driversData.drivers} />)
      .toJSON();
    expect(DriverListComponent).toMatchSnapshot();
  });
});

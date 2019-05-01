import React from "react";

import { getHumanreadableDate, sortDrivers } from "../utils";

const unsortedDrivers = [
  {
    id: "9823983445",
    coordinates: { lat: "51.54473", lng: " -0.1357" },
    proximity: false,
    distance: 3000
  },
  {
    id: "8376587365",
    coordinates: { lat: "51.57131", lng: "-0.1048" },
    proximity: false,
    distance: 6000
  }
];

const sortedDrivers = [
  {
    id: "8376587365",
    coordinates: { lat: "51.57131", lng: "-0.1048" },
    proximity: false,
    distance: 6000
  },
  {
    id: "9823983445",
    coordinates: { lat: "51.54473", lng: " -0.1357" },
    proximity: false,
    distance: 3000
  }
];

describe("the fist test", () => {
  it("Should return humand readable date", () => {
    expect(getHumanreadableDate("1556548991000")).toBe("Mon Apr 29 2019");
  });
});

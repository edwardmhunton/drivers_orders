import React from "react";

import {
  getHumanreadableDate,
  sortDrivers,
  stringCoordinatesToObject,
  getClosestDrivers
} from "../utils";

const unsortedDrivers = [
  {
    coordinates: { lat: "51.52834", lng: "-0.00998" },
    distance: 0,
    id: "89234234",
    proximity: false
  },
  {
    coordinates: { lat: "51.50105", lng: "-0.06894" },
    distance: 0,
    id: "678867678687",
    proximity: false
  },
  {
    coordinates: { lat: "51.50981", lng: "-0.02843" },
    distance: 0,
    id: "2354235235345",
    proximity: false
  },
  {
    coordinates: { lat: "51.54809", lng: "-0.01049" },
    distance: 0,
    id: "234235457587",
    proximity: false
  }
];

const closestDrivers = [
  {
    coordinates: { lat: "51.50981", lng: "-0.02843" },
    distance: 3254,
    id: "2354235235345",
    proximity: true
  },
  {
    coordinates: { lat: "51.52834", lng: "-0.00998" },
    distance: 3356,
    id: "89234234",
    proximity: true
  },
  {
    coordinates: { lat: "51.50105", lng: "-0.06894" },
    distance: 3591,
    id: "678867678687",
    proximity: true
  },
  {
    coordinates: { lat: "51.54809", lng: "-0.01049" },
    distance: 3712,
    id: "234235457587",
    proximity: false
  }
];

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
    length: "100",
    width: "2000",
    height: "500"
  }
};

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
  it("Should return coords passed as a string as an object", () => {
    expect(stringCoordinatesToObject("51.0000, -27.00000")).toEqual({
      lat: "51.0000",
      lng: "-27.00000"
    });
  });
  it("Should return coords passed as a string as an object", () => {
    expect(stringCoordinatesToObject("51.0000, -27.00000")).toEqual({
      lat: "51.0000",
      lng: "-27.00000"
    });
  });
  it("Should except and array of drivers and an order and return the drivers with the value of proximity set to 'true'", () => {
    expect(getClosestDrivers(unsortedDrivers, order)).toEqual(closestDrivers);
  });
});

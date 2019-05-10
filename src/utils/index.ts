var geolib = require("geolib");

export const getHumanreadableDate = timestamp => {
  return new Date(parseInt(timestamp)).toDateString();
};

export const validCoords = coordsString => {
  return !isNaN(parseFloat(coordsString)) && coordsString.split(".").length < 3;
};

export const stringCoordinatesToObject = coordinates => {
  const coords = coordinates.split(",").map(item => {
    return item.trim();
  });
  let newCords = {};
  if (coords.length === 2 && validCoords(coords[0]) && validCoords(coords[1])) {
    newCords = {
      lat: coords[0],
      lng: coords[1]
    };
  } else {
    newCords = {
      lat: "0",
      lng: "0"
    };
  }

  return newCords;
};

const betweenDriverAndOrder = (driver, order) => {
  return geolib.getDistance(driver, order);
};

export const sortDrivers = drivers => {
  return drivers.sort((a, b) => a.distance - b.distance);
};

export const getClosestDrivers = (drivers, currentSelectedOrder) => {
  drivers.map((driver, index) => {
    drivers[index].distance = betweenDriverAndOrder(
      driver.coordinates,
      currentSelectedOrder.PickupAddress.coordinates
    );
  });

  const sortedDrivers = sortDrivers(drivers);

  sortedDrivers.map((item, index) => {
    index < 3
      ? (sortedDrivers[index].proximity = true)
      : (sortedDrivers[index].proximity = false);
  });

  return sortedDrivers;
};

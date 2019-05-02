var geolib = require("geolib");

export const getHumanreadableDate = timestamp => {
  return new Date(parseInt(timestamp)).toDateString();
};

export const stringCoordinatesToObject = coordinates => {
  var coords = coordinates.split(","); // TODO: test format and content of coords is valid
  const newCords = {
    lat: coords[0].trim(),
    lng: coords[1].trim()
  };

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

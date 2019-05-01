var geolib = require("geolib");

export const getHumanreadableDate = timestamp => {
  return new Date(parseInt(timestamp)).toDateString();
};

export const stringCoordinatesToObject = coordinates => {
  var coords = coordinates.split(","); // TODO: test format and content of coords is valid
  const newCords = {
    lat: coords[0],
    lng: coords[1]
  };

  return newCords;
};

const betweenDriverAndOrder = (driver, order) => {
  return geolib.getDistance(driver, order);
};

const convertForLib = coordinates => {
  coordinates.latitude = coordinates.lat;
  coordinates.longitude = coordinates.lng;
  return coordinates;
};

export const getClosestDrivers = (drivers, currentSelectedOrder) => {
  drivers.map((driver, index) => {
    drivers[index].distance = betweenDriverAndOrder(
      convertForLib(driver.coordinates),
      convertForLib(currentSelectedOrder.PickupAddress.coordinates)
    );
  });

  const sortedDrivers = drivers.sort((a, b) => a.distance - b.distance);

  sortedDrivers.map((item, index) => {
    index < 3
      ? (sortedDrivers[index].proximity = true)
      : (sortedDrivers[index].proximity = false);
  });

  return sortedDrivers;
};

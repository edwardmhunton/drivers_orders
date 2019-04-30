export const getHumanreadableDate = timestamp => {
  return new Date(parseInt(timestamp)).toDateString();
};

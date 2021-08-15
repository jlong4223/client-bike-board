export const setLocation = (location) => {
  console.log("location: ", location);
  return {
    type: "SET_LOCATION",
    payload: location,
  };
};

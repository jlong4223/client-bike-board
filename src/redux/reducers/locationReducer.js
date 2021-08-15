const initialState = {
  location: null,
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

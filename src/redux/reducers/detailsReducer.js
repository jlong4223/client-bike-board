import { GET_DETAILS, UPDATE_DETAILS } from "../actions/types";

const initialState = {
  dataFetched: false,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        dataFetched: true,
        ...action.payload,
      };

    case UPDATE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

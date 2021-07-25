import { UPDATE_DETAILS } from "../actions/types";

const initialState = {
  dataUpdated: false,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

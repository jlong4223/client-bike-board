import { REGISTER, LOGIN, LOGOUT, UPDATE_USER_DETAILS } from "../actions/types";

const initialState = {
  user: {},
  details: {},
  isSignedIn: false,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state };
    case LOGIN:
      return { ...state, isSignedIn: true, user: action.payload };
    case UPDATE_USER_DETAILS:
      return { ...state, details: action.payload };
    case LOGOUT:
      return { ...state, isSignedIn: false, user: {}, details: {} };
    default:
      return state;
  }
}

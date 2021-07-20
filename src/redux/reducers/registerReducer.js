import { REGISTER, LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  user: {},
  isSignedIn: false,
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state };
    case LOGIN:
      return { ...state, isSignedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, isSignedIn: false, user: {} };
    default:
      return state;
  }
}

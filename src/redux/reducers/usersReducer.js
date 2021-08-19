import {
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE_USER_DETAILS,
  UPDATE_PIC,
  UPDATE_PROFILE_PIC,
} from "../actions/types";

const initialState = {
  user: {},
  details: {},
  isSignedIn: false,
  pics: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return { ...state };
    case LOGIN:
      return { ...state, isSignedIn: true, user: action.payload };
    case UPDATE_USER_DETAILS:
      return { ...state, details: action.payload };
    case UPDATE_PIC:
      return { ...state, pics: action.payload };
    case UPDATE_PROFILE_PIC:
      // TODO figure out what I want to do with profile pic and how I want to update state
      return { ...state };
    case LOGOUT:
      return { ...state, isSignedIn: false, user: {}, details: {}, pics: {} };
    default:
      return state;
  }
}

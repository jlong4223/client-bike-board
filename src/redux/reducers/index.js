import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./usersReducer";
import locationReducer from "./locationReducer";

export default combineReducers({
  firstState: () => 1,
  form: formReducer,
  userInfo: usersReducer,
  location: locationReducer,
});

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./usersReducer";

export default combineReducers({
  firstState: () => 1,
  form: formReducer,
  userInfo: usersReducer,
});

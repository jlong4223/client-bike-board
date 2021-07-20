import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import registerReducer from "./registerReducer";

export default combineReducers({
  firstState: () => 1,
  form: formReducer,
  userInfo: registerReducer,
});

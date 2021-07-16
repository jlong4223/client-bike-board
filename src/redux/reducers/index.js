import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  firstState: () => 1,
  form: formReducer,
});

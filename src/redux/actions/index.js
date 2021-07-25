import history from "../../utils/history";
import railsApi from "../../services/rails-url";
import { REGISTER, LOGIN, LOGOUT, UPDATE_DETAILS } from "./types";
import { addUser, loginUser } from "../../services/auth-rails-api";
import { getDetails } from "../../services/user-details-rails";
import {
  setToken,
  removeToken,
  getEntireUserFromToken,
} from "../../services/token-service";

// TODO move auth related actions to separate file
export const registerUser = (formValues) => {
  return async (dispatch) => {
    const newUser = {
      name: formValues.Name,
      email: formValues.Email,
      password: formValues.Password,
    };

    const response = await addUser({ ...newUser });

    if (response.status === 201) {
      dispatch({
        type: REGISTER,
        payload: response.data,
      });

      history.push("/");
    }
  };
};

export const getUserFromDB = (formValues) => {
  return async (dispatch) => {
    const attemptingUser = {
      email: formValues.Email,
      password: formValues.Password,
    };

    const response = await loginUser({ ...attemptingUser });
    response.data.auth_token && setToken(response.data.auth_token);

    const userDetails = await getDetails(getEntireUserFromToken().user_id);

    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: {
          auth_token: response.data.auth_token,
          ...getEntireUserFromToken(),
          ...userDetails.data.details[0],
        },
      });

      history.push("/");
    }
  };
};

export const logout = () => {
  removeToken();
  return {
    type: LOGOUT,
  };
};

export const editUserDetails = (detailId, formValues) => {
  return async (dispatch) => {
    // I dont think I can patch the details from the users route, somehow need to get the details id accosiated with the user
    console.log("formValues in patch", formValues);
    const response = await railsApi.patch(`/details/${detailId}`, formValues);
    console.log("patch res: ", response);
    if (response.status === 200) {
      dispatch({
        type: UPDATE_DETAILS,
        payload: response.data,
      });
    }
  };
};

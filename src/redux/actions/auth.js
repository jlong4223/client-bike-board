import history from "../../utils/history";
import { REGISTER, LOGIN, LOGOUT } from "./types";
import { addUser, loginUser } from "../../services/auth-rails-api";
import {
  setToken,
  removeToken,
  getEntireUserFromToken,
} from "../../services/token-service";

export const registerUser = (formValues) => {
  return async (dispatch) => {
    const response = await addUser({ ...formValues });

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
    const response = await loginUser({ ...formValues });
    // TODO get the response from the server and check if the user is valid so I can throw an error if not
    response.data.auth_token && setToken(response.data.auth_token);

    if (response.status === 200) {
      dispatch({
        type: LOGIN,
        payload: {
          auth_token: response.data.auth_token,
          ...getEntireUserFromToken(),
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

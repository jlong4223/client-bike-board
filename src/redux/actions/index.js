import history from "../../utils/history";
import { REGISTER, LOGIN, LOGOUT } from "./types";
import { addUser, loginUser } from "../../services/auth-rails-api";
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

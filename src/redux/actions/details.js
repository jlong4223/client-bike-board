import railsApi from "../../services/rails-url";
import { UPDATE_USER_DETAILS } from "./types";
import { getDetailsById } from "../../services/user-details";

export const getDetails = (detailsId) => {
  return async (dispatch) => {
    const response = await getDetailsById(detailsId);

    console.log("get details res: ", response);
    if (response.status === 200) {
      dispatch({
        type: UPDATE_USER_DETAILS,
        payload: response.data,
      });
    }
  };
};

// TODO move the patch func to services and import
export const editUserDetails = (detailId, formValues) => {
  return async (dispatch) => {
    // I dont think I can patch the details from the users route, somehow need to get the details id accosiated with the user
    console.log("formValues in patch", formValues);
    const response = await railsApi.patch(`/details/${detailId}`, formValues);
    console.log("patch res: ", response);
    if (response.status === 200) {
      dispatch({
        type: UPDATE_USER_DETAILS,
        payload: response.data,
      });
    }
  };
};

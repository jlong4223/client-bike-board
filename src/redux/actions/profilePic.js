import { getUserPic, postNewPic } from "../../services/user-details";
import { UPDATE_PIC, UPDATE_PROFILE_PIC } from "./types";

export const updatePic = (pic) => {
  console.log("update pic", pic);

  return async (dispatch) => {
    const response = await postNewPic(pic);
    console.log("response in update pic", response);

    const getUserFromNode = await getUserPic(response.data.user[0].userID);
    console.log("getUserFromNode", getUserFromNode);

    dispatch({
      type: UPDATE_PIC,
      payload: response.data.user[0].picture,
    });
  };
};

export const getUsersPics = (userID) => {
  return async (dispatch) => {
    const response = await getUserPic(userID);
    console.log("response in get pics", response.data[0].picture);

    dispatch({
      type: UPDATE_PIC,
      payload: response.data[0].picture,
    });
  };
};

export const setProfilePic = (pic) => {
  console.log("set profile pic", pic);
  return {
    type: UPDATE_PROFILE_PIC,
    payload: pic,
  };
};

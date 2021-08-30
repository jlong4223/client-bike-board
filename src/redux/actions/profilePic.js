import {
  getUserPic,
  postNewPic,
  patchUserPic,
} from "../../services/user-details";
import { UPDATE_PIC, UPDATE_PROFILE_PIC } from "./types";

export const updatePic = (pic) => {
  console.log("update pic", pic);

  return async (dispatch) => {
    const response = await postNewPic(pic);
    dispatch({
      type: UPDATE_PIC,
      payload: response.data.user[0].picture,
    });
  };
};

export const getUsersPics = (userID) => {
  return async (dispatch) => {
    const response = await getUserPic(userID);

    const getReversedPics = () => {
      return response.data[0].picture.map((pic) => pic).reverse();
    };

    dispatch({
      type: UPDATE_PIC,
      payload: getReversedPics(),
    });
  };
};

export const setProfilePic = (userId, pic, bool) => {
  return async (dispatch) => {
    const response = await patchUserPic(userId, pic, bool);
    console.log("response in set profile pic", response);
    dispatch({
      type: UPDATE_PROFILE_PIC,
    });
  };
};

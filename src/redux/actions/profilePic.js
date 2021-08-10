import cloudinaryAPI from "../../services/node-cloud-url";
import { UPDATE_PIC } from "./types";

export const updatePic = (pic) => {
  console.log("update pic", pic);

  return async (dispatch) => {
    const response = await cloudinaryAPI.post("/allapps", pic);
    console.log("response in update pic", response);

    const getUserFromNode = await cloudinaryAPI.get(
      `/allapps/client-bikeboard/${response.data.user[0].userID}`
    );
    console.log("getUserFromNode", getUserFromNode);

    // The response is faster than cloudinary uploads images so need to figure out how to wait for the image to upload before updating the user- maybe this is a backend thing

    dispatch({
      type: UPDATE_PIC,
      payload: response.data.user[0].picture,
    });
  };
};

export const getUsersPics = (userID) => {
  return async (dispatch) => {
    const response = await cloudinaryAPI.get(
      `/allapps/client-bikeboard/${userID}`
    );
    console.log("response in get pics", response.data[0].picture);
    dispatch({
      type: UPDATE_PIC,
      payload: response.data[0].picture,
    });
  };
};

import railsApi from "./rails-url";
import cloudinaryApi from "./node-cloud-url";

export const getDetailsByUser = async (userId) => {
  return await railsApi.get(`/users/${userId}`);
};

export const getDetailsById = async (detailsId) => {
  return await railsApi.get(`/details/${detailsId}`);
};

// TODO to post details, just post to /details, include the formdata and the userId - untested & not used yet
export const postDetails = async (userId, formValues) => {
  return await railsApi.post("/details");
};

export const getUserPic = async (userId) => {
  return await cloudinaryApi.get(`/allapps/client-bikeboard/${userId}`);
};

export const postNewPic = async (pic) => {
  return await cloudinaryApi.post("/allapps/", pic);
};

export const patchUserPic = async (userId, pic, bool) => {
  console.log("bool", bool);
  return await cloudinaryApi.patch(
    `/allapps/client-bikeboard/${userId}/${pic}`,
    bool
  );
};

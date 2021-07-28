import railsApi from "./rails-url";

export const getDetailsByUser = async (userId) => {
  return await railsApi.get(`/users/${userId}`);
};

export const getDetailsById = async (detailsId) => {
  return await railsApi.get(`/details/${detailsId}`);
};

// TODO to post details, just post to /details, include the formdata and the userId - untested
export const postDetails = async (userId, formValues) => {
  return await railsApi.post("/details");
};

import railsApi from "./rails-url";

export const getDetails = async (userId) => {
  return await railsApi.get(`/users/${userId}`);
};

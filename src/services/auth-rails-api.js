import axios from "axios";

const baseURL = "http://localhost:3000";

export function addUser(user) {
  return axios.post(baseURL + "/users", { user });
}

export function loginUser(user) {
  return axios.post(baseURL + "/users/login", user);
}

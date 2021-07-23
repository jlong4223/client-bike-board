import railsApi from "./rails-url";

export function addUser(user) {
  return railsApi.post("/users", { user });
}

export function loginUser(user) {
  return railsApi.post("/users/login", user);
}

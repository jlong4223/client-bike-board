function setToken(token) {
  token
    ? localStorage.setItem("rails_token", token)
    : localStorage.removeItem("rails_token");
}

function removeToken() {
  localStorage.removeItem("rails_token");
}

function getToken(res) {
  let token = localStorage.getItem("rails_token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem("rails_token");
      token = null;
    }
  }
  return token;
}

function getEntireUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])) : null;
}

export { setToken, getToken, removeToken, getEntireUserFromToken };

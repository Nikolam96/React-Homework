export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const setUserStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", user);
};

export const removeUserStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
};

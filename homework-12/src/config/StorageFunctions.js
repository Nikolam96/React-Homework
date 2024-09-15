export const getToken = () => {
  return localStorage.getItem("token"); //! proverka dali ima token
}

export const setUserStorage = () => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", user); //! posle login zapis vo localStorage
}

export const removeUserStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
}
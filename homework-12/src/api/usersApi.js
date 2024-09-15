import {api} from "./../config/properties";

export const getUsers = async () => {
  try {
    const res = await fetch(`${api.root}/users`);
    const json = await res.json();
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
}
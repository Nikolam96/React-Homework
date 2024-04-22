import { api } from "./../config/properties";
import axios from "axios";

export const getUsers = async () => {
  try {
    const result = await fetch(`${api.root}/users`);
    const json = await result.json();
    return await Promise.resolve(json);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${api.root}/users/${id}`);
    return await Promise.resolve(id);
  } catch (err) {
    return await Promise.reject(err);
  }
};

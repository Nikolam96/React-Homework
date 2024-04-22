import { api } from "../config/properties";
import axios from "axios";

export const getPhotos = async () => {
  try {
    const result = await axios.get(`${api.root}/photos`);
    return await Promise.resolve(result.data);
  } catch (error) {
    return await Promise.reject(error);
  }
};

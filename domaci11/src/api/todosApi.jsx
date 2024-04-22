import { api } from "../config/properties";
import axios from "axios";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${api.root}/todos`);
    return await Promise.resolve(response.data);
  } catch (error) {
    return await Promise.reject(error);
  }
};

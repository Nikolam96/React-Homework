import { fetchTodos } from "../../../api/todosApi";
import {
  fetchTodosFail,
  fetchTodosRequest,
  fetchTodosSuccess,
} from "./actions";

export const getTodos = (reqParams) => {
  return (dispatch) => {
    dispatch(fetchTodosRequest(reqParams));
    return fetchTodos(reqParams)
      .then((res) => {
        dispatch(fetchTodosSuccess(res));
        return res;
      })
      .catch((err) => {
        dispatch(fetchTodosFail(err));
        return err;
      });
  };
};

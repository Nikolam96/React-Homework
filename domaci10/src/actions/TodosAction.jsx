import axios from "axios";
import {
  TODOS_REJECT,
  TODOS_RESOLVE,
  TODOS_CHECKED,
  TODOS_CHANGE,
} from "../constants/todosConstant";

export const todosResolve = (data) => {
  return {
    type: TODOS_RESOLVE,
    payload: data,
  };
};
export const todosReject = (error) => {
  return {
    type: TODOS_REJECT,
    payload: error,
  };
};
export const fetchTodos = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => dispatch(todosResolve(res.data)))
      .catch((error) => dispatch(todosReject(error.message)));
  };
};

export const todosChecked = (id) => {
  return {
    type: TODOS_CHECKED,
    payload: id,
  };
};

export const todosChangeValue = (id, val) => {
  return {
    type: TODOS_CHANGE,
    payload: val,
    id: id,
  };
};

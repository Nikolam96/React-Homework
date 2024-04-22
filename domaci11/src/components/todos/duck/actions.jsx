import {
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from "./constants";

export const fetchTodosRequest = (reqParams) => {
  return {
    type: FETCH_TODOS_REQUEST,
    payload: reqParams,
  };
};

export const fetchTodosSuccess = (data) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: data,
  };
};

export const fetchTodosFail = (error) => {
  return {
    type: FETCH_TODOS_FAIL,
    payload: error,
  };
};

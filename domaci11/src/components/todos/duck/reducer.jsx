import {
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
} from "./constants";

const initialState = {
  todos: [],
  error: null,
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
}

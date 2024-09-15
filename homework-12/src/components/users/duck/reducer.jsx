import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  DELETE_USERS,
} from "./constants";

const initialState = {
  users: [],
  err: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        err: action.payload,
      };
    case DELETE_USERS:
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
}

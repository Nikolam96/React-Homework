import {
  fetchUsersFail,
  fetchUsersSuccess,
  fetchUsersRequest,
} from "./actions";

import { getUsers } from "./../../../api/usersApi";

export const fetchUsers = (requestParams) => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest(requestParams));
    try {
      const res = await getUsers(requestParams);
      dispatch(fetchUsersSuccess(res));
      return res;
    } catch (err) {
      dispatch(fetchUsersFail(err));
      return err;
    }
  };
};

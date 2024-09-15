import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { UsersReducer } from "./components/users/duck";

const reducer = {
  UsersReducer: UsersReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(logger),
});

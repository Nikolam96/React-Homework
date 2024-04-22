import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { usersReducer } from "./components/users/duck";
import { authReducer } from "./components/auth/duck";
import { photosReducer } from "./components/photos/duck";
import { todosReducer } from "./components/todos/duck";

const reducer = {
  usersReducer: usersReducer,
  authReducer: authReducer,
  photosReducer: photosReducer,
  todosReducer: todosReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

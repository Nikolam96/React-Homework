import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import TestReducer from "./reducer/TestReducer";

const reducer = {
  TestReducer: TestReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

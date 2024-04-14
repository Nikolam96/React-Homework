import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./reducer/CakeReducer";
import CommentsReducer from "./reducer/CommentsReducer";
import TodosReducer from "./reducer/TodosReducer";

const reducer = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
  TodosReducer: TodosReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (middle) => middle().concat(logger),
});

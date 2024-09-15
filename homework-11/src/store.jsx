import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CakeReducer from "./reducers/CakeReducer";
import CommentsReducer from "./reducers/CommentsReducer";
import PostsReducer from "./reducers/PostsReducer";

const reducer = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
  PostsReducer: PostsReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

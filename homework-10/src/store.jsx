import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import SayHelloReducer from "./reducers/SayHelloReducer";
import CalculatorReducer from "./reducers/CalculatorReaducer";

const reducer = {
  SayHelloReducer: SayHelloReducer,
  CalculatorReducer: CalculatorReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

import {
  BUY_CAKE,
  RESTOCK_CAKE,
  SET_MESSAGE,
} from "../constants/CakeConstants";

export const buyCake = (buyQuantity) => {
  return {
    type: BUY_CAKE,
    payload: buyQuantity,
  };
};

export const restockCakes = (restockQuantity) => {
  return {
    type: RESTOCK_CAKE,
    payload: restockQuantity,
  };
};

export const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

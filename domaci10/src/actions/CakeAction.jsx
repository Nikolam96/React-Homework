import { BUYCAKE, RESTORECAKES } from "../constants/CakeConstant";

export const buyCake = (input) => {
  return {
    type: BUYCAKE,
    payload: +input,
  };
};

export const restoreCakes = (input) => {
  return {
    type: RESTORECAKES,
    payload: +input,
  };
};

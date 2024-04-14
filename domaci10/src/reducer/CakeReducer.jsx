import { BUYCAKE, RESTORECAKES } from "../constants/CakeConstant";

const InitalState = {
  cakes: 10,
  message: undefined,
};

const CakeReducer = (state = InitalState, action) => {
  switch (action.type) {
    case BUYCAKE:
      return {
        ...state,
        cakes: state.cakes - action.payload,
      };
    case RESTORECAKES:
      return {
        ...state,
        cakes: state.cakes + action.payload,
      };
    default:
      return state;
  }
};
export default CakeReducer;

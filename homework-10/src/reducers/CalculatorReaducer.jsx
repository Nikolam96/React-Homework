const initialState = {
  a: "",
  b: "",
  operation: "+",
  result: "",
};

const CalculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NUMBER":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_OPERATION":
      return {
        ...state,
        operation: action.payload,
      };
    case "CALCULATE_RESULT":
      let result;

      switch (state.operation) {
        case "+":
          result = Number(state.a) + Number(state.b);
          break;
        case "-":
          result = Number(state.a) - Number(state.b);
          break;
        case "*":
          result = Number(state.a) * Number(state.b);
          break;
        case "/":
          if (state.b !== "0") {
            result = Number(state.a) / Number(state.b);
          } else {
            result = "Division by zero is not allowed";
          }
          break;
        default:
          result = "Invalid Operation";
      }

      return {
        ...state,
        result,
      };
    default:
      return state;
  }
};

export default CalculatorReducer;

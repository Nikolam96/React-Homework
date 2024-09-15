export const setNumber = (name, value) => {
  return {
    type: "SET_NUMBER",
    payload: { name, value },
  };
};

export const setOperation = (operation) => {
  return {
    type: "SET_OPERATION",
    payload: operation,
  };
};

export const calculateResult = () => {
  return {
    type: "CALCULATE_RESULT",
  };
};

const initalState = {
  test: "Hi,this is my HomeWork!",
};

const TestReducer = (state = initalState, action) => {
  switch (action.type) {
    case "test":
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};
export default TestReducer;

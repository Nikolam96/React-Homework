const TestAction = () => {
  return {
    type: "test",
    payload: "Testing out Redux and it is easer than yesterday!",
  };
};

const NewAction = () => {
  return {
    type: "test",
    payload: "Now im Pro in Redux,jk just a new Action hehe!",
  };
};
export { TestAction, NewAction };

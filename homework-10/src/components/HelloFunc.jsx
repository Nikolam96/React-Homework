import { useEffect } from "react";
import { sayGoodbye, sayHello } from "../actions/SayHelloActions";
import { useSelector, useDispatch } from "react-redux";

export const HelloFunc = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.SayHelloReducer.greeting);
  const farewell = useSelector((state) => state.SayHelloReducer.farewell);

  useEffect(() => {
    dispatch(sayHello());
    dispatch(sayGoodbye());
  }, [dispatch]);

  return (
    <div id="hello-func">
      <h3>{greeting}</h3>
      <h3>{farewell}</h3>
    </div>
  );
};

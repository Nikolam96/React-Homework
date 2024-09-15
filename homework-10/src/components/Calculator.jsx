import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setNumber,
  setOperation,
  calculateResult,
} from "../actions/CalculatorActions";

export const Calculator = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.CalculatorReducer.a);
  const b = useSelector((state) => state.CalculatorReducer.b);
  const operation = useSelector((state) => state.CalculatorReducer.operation);
  const result = useSelector((state) => state.CalculatorReducer.result);

  useEffect(() => {
    dispatch(calculateResult());
  }, [a, b, operation, dispatch]);

  return (
    <div id="calculator">
      <h3>Calculator</h3>
      <label>
        Broj 1
        <input
          type="number"
          value={a}
          onChange={(e) => dispatch(setNumber("a", e.target.value))}
        />
      </label>
      <select
        value={operation}
        onChange={(e) => dispatch(setOperation(e.target.value))}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <label>
        Broj 2
        <input
          type="number"
          value={b}
          onChange={(e) => dispatch(setNumber("b", e.target.value))}
        />
      </label>
      <p>Result: {result}</p>
    </div>
  );
};

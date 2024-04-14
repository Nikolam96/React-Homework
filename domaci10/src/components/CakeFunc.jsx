import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restoreCakes } from "../actions/CakeAction";

const CakeFunc = () => {
  const [num, setNumber] = useState("");
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);

  return (
    <div>
      <h1>{cakes}</h1>
      <div>
        <label htmlFor="cakes">Order How Many Cakes you Want?</label>
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter a number of Cakes"
          onChange={(e) => setNumber(e.target.value)}
          id="cakes"
          value={num < 0 ? 0 : num}
          required={true}
        />
      </div>
      <br />

      <button
        onClick={() => {
          dispatch(buyCake(num));
          setNumber("");
        }}
        disabled={cakes - num < 0 || num == "" ? true : false}
      >
        Order Cakes
      </button>
      <button
        onClick={() => {
          dispatch(restoreCakes(num));
          setNumber("");
        }}
        disabled={cakes + +num > 50 || num == "" ? true : false}
      >
        Restore Cakes
      </button>
    </div>
  );
};
export default CakeFunc;

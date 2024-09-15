import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes, setMessage } from "../actions/CakeActions";
import { useState } from "react";

export const Cake = () => {
  const dispatch = useDispatch();
  const { cakes, message } = useSelector((state) => state.CakeReducer);
  const [quantity, setQuantity] = useState(0);
  const [actionType, setActionType] = useState("buy");

  const handleActionClick = () => {
    if (quantity <= 0) {
      dispatch(setMessage("Invalid quantity. Please enter a valid quantity."));
    } else if (actionType === "buy" && quantity > cakes) {
      dispatch(
        setMessage(
          `Not Enough cakes. Only ${cakes} Cake${cakes !== 1 ? "s" : ""} left`
        )
      );
    } else {
      if (actionType === "buy") {
        dispatch(buyCake(quantity));
        dispatch(
          setMessage(`Bought ${quantity} Cake${quantity !== 1 ? "s" : ""}`)
        );
      } else {
        dispatch(restockCakes(quantity));
        dispatch(
          setMessage(`Restocked ${quantity} Cake${quantity !== 1 ? "s" : ""}`)
        );
      }
      setQuantity(0);
    }
  };

  return (
    <div id="cake">
      <h2>Cakes: {cakes}</h2>
      {message && <p>{message}</p>}
      <input
        type="number"
        value={quantity === 0 ? "" : quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleActionClick}>
        {actionType === "buy" ? "Buy" : "Restock"} {quantity} Cake
        {quantity !== 1 ? "s" : ""}
      </button>
      <button
        onClick={() => setActionType(actionType === "buy" ? "restock" : "buy")}
      >
        Switch to {actionType === "buy" ? "Restock" : "Buy"}
      </button>
    </div>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment Value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span role="contentInfo">{count}</span>
      <button
        aria-label="Decrement Value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default ReduxCounter;

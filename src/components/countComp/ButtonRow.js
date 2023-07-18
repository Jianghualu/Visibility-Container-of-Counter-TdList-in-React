import React from "react";
import "./ButtonRow.css";

const ButtonRow = ({
  onIncrement,
  onDecrement,
  onIncrementIfOdd,
  onAsyncIncrement
}) => {
  return (
    <div className="button_container">
      <div className="button_row">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
      <div className="button_row">
        <button onClick={onIncrementIfOdd}>Increment-If-Odd</button>
        <button onClick={onAsyncIncrement}>Async-Inc</button>
      </div>
    </div>
  );
};

export default ButtonRow;

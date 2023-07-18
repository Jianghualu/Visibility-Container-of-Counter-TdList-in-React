import { useState, useEffect } from "react";
import Count from "./countComp/Count";
import ButtonRow from "./countComp/ButtonRow";
import Timer from "./countComp/Timer";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleIncrementIfOdd = () =>
    count % 2 !== 0 && setCount((prev) => prev + 1);
  const handleAsyncIncrement = () =>
    setTimeout(() => setCount((prev) => prev + 1), 1000);

  const handleTimerButtonClick = () =>
    setTimerActive((prevState) => !prevState);

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerActive]);

  return (
    <div style={counterStyle}>
      <h2>Counter</h2>
      <Count count={count} />
      <ButtonRow
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onIncrementIfOdd={handleIncrementIfOdd}
        onAsyncIncrement={handleAsyncIncrement}
      />
      <Timer
        timerActive={timerActive}
        onStartTimerClick={handleTimerButtonClick}
        onStopTimerClick={handleTimerButtonClick}
      />
    </div>
  );
};

const counterStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px"
};

export default Counter;

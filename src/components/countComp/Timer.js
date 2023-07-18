const Timer = ({ timerActive, onStartTimerClick, onStopTimerClick }) => {
  return (
    <button
      style={timerStyle}
      onClick={timerActive ? onStopTimerClick : onStartTimerClick}
    >
      {timerActive ? "Stop" : "Start"}
    </button>
  );
};
const timerStyle = {
  padding: "5px",
  margin: "10px",
  width: "25%"
};

export default Timer;

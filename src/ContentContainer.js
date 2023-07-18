import { useState } from "react";
import HOC from "./HOC";
import Counter from "./components/Counter";
import TdList from "./components/TdList";

const ContentContainer = () => {
  const [counterVisible, setCounterVisible] = useState(true);
  const [todoListVisible, setTodoListVisible] = useState(true);

  return (
    <>
      <div style={choiceStyle}>
        <input
          type="checkbox"
          checked={counterVisible}
          onChange={() => setCounterVisible((prevState) => !prevState)}
        />
        <label>Show Counter</label>
      </div>

      <div style={choiceStyle}>
        <input
          type="checkbox"
          checked={todoListVisible}
          onChange={() => setTodoListVisible((prevState) => !prevState)}
        />
        <label>Show To-Do List</label>
      </div>
      {HOC(Counter)({ visible: counterVisible })}
      {HOC(TdList)({ visible: todoListVisible })}
    </>
  );
};

const choiceStyle = {
  margin: "10px"
};

export default ContentContainer;

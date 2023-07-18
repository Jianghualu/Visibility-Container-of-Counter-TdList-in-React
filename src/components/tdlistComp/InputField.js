import React, { useState } from "react";

const InputField = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleAddItemClick = () => {
    if (inputValue.trim() !== "") {
      onAddItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button style={addBtnStyle} onClick={handleAddItemClick}>
        Add
      </button>
    </div>
  );
};

const addBtnStyle = {
  margin: "10px",
  width: "15%"
};

export default InputField;

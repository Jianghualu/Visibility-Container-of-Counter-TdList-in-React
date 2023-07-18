import React, { useState } from "react";
import InputField from "./tdlistComp/InputField";
import ItemList from "./tdlistComp/ItemList";

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("A-Z");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    sortItems(event.target.value);
  };

  const sortItems = (order) => {
    const sortedItems = [...items];
    sortedItems.sort((a, z) => {
      if (order === "A-Z") {
        return a.localeCompare(z);
      } else {
        return z.localeCompare(a);
      }
    });
    setItems(sortedItems);
  };

  return (
    <div style={todoListStyle}>
      <h2>To-Do List</h2>
      <div>
        <InputField onAddItem={handleAddItem} />
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <ItemList items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
};

const todoListStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px"
};

export default ToDoList;

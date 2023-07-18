import "./Item.css";

const Item = ({ text, onDeleteClick }) => {
  return (
    <div className="text-container">
      <span>{text}</span>
      <button onClick={onDeleteClick}>Delete</button>
    </div>
  );
};

export default Item;

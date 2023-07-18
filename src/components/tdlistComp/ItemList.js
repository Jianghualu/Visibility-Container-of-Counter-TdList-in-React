import Item from "./Item";

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index}
          text={item}
          onDeleteClick={() => onDeleteItem(index)}
        />
      ))}
    </div>
  );
};

export default ItemList;

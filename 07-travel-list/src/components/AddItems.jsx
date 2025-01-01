/* eslint-disable react/prop-types */
const AddItems = ({ item, onRemoveItem, onHandlePacked }) => {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onHandlePacked(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onRemoveItem(item.id)}>✖️</button>
      </li>
    </div>
  );
};

export default AddItems;

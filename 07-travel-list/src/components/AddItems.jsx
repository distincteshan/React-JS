/* eslint-disable react/prop-types */
const AddItems = ({ item }) => {
  return (
    <div>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>✖️</button>
      </li>
    </div>
  );
};

export default AddItems;

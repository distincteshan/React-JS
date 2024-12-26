/* eslint-disable react/jsx-key */
import AddItems from "./AddItems";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
const ItemsList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <AddItems item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;

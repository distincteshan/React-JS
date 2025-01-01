/* eslint-disable react/prop-types */
import { useState } from "react";
import AddItems from "./AddItems";

const ItemsList = ({ items, onRemoveItems, onHandlePacked, onClear }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);
  console.log(items);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <AddItems
            item={item}
            key={item.id}
            onRemoveItem={onRemoveItems}
            onHandlePacked={onHandlePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}>Sort By Input Order</option>
          <option value={"description"}>Sort By Description</option>
          <option value={"packed"}>Sort By Packed Status</option>
          <option value={"quantity"}>Sort By Quantity</option>
        </select>
        <button onClick={() => onClear()}>Clear List</button>
      </div>
    </div>
  );
};

export default ItemsList;

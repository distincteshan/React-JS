import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import ItemsList from "./components/ItemsList";

const App = () => {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function removeItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function onClear() {
    setItems([]);
  }

  return (
    <div>
      <Header />
      <Items onAddItems={handleAddItems} />
      <ItemsList
        items={items}
        onRemoveItems={removeItem}
        onHandlePacked={handlePacked}
        onClear={onClear}
      />
      <Footer items={items} />
    </div>
  );
};

export default App;

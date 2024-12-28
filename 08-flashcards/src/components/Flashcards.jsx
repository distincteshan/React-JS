/* eslint-disable react/prop-types */
import { useState } from "react";

const Flashcards = ({ item }) => {
  function switchOpen(id) {
    setcurrId(id);
  }
  const [currid, setcurrId] = useState(null);
  return (
    <div
      onClick={() => switchOpen(item.id)}
      className={currid === item.id ? "selected" : ""}
    >
      {currid === item.id ? <p>{item.answer}</p> : <p>{item.question}</p>}
    </div>
  );
};

export default Flashcards;

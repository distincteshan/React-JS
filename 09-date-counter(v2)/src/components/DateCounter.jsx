/* eslint-disable react/prop-types */
import { useState } from "react";

const DateCounter = ({ steps }) => {
  const [count, setCount] = useState(0);
  const curdate = new Date();
  curdate.setDate(curdate.getDate() + count);
  function increaseCount() {
    setCount(count + steps);
  }
  function decreaseCount() {
    setCount(count - steps);
  }
  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      ></input>
      <button onClick={increaseCount}>+</button>
      <span>
        {count} days from today is {curdate.toDateString()}
      </span>
    </div>
  );
};

export default DateCounter;

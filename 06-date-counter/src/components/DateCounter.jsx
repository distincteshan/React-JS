import { useState } from "react";
const DateCounter = () => {
  const currdate = new Date();
  const [days, setDays] = useState(0);
  function nextday() {
    setDays((days) => days + 1);
  }
  function prevday() {
    setDays((days) => days - 1);
  }
  currdate.setDate(currdate.getDate() + days);
  return (
    <div className="date">
      <div className="count">
        <button onClick={prevday}>-</button>
        <span>Count: {days}</span>
        <button onClick={nextday}>+</button>
      </div>
      <span>
        {days} days from today is {currdate.toDateString()}
      </span>
    </div>
  );
};

export default DateCounter;

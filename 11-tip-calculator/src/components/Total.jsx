/* eslint-disable react/prop-types */
const Total = ({ amount, tip1, tip2, onReset }) => {
  const total_tip = (tip1 + tip2) / 2;

  return (
    <div>
      <h1>
        You pay ${amount + amount * total_tip * 0.01} (${amount} + $
        {amount * total_tip * 0.01} tip)
      </h1>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Total;

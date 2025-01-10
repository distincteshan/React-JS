/* eslint-disable react/prop-types */
const Bill = ({ amount, onAmountChange }) => {
  return (
    <div className="bill">
      <h2>How much was the Bill?</h2>
      <input
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
      ></input>
    </div>
  );
};

export default Bill;

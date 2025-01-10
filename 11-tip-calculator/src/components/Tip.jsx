/* eslint-disable react/prop-types */

const Tip = ({ children, tip, onHandleTip }) => {
  console.log(tip);
  return (
    <div className="tip">
      <h2>{children}</h2>
      <select value={tip} onChange={(e) => onHandleTip(Number(e.target.value))}>
        <option value="0" key="0">
          Dissatisfied- 0%
        </option>
        <option value="5" key="5">
          It was Okay- 5%
        </option>
        <option value="10" key="10">
          It was Good- 10%
        </option>
        <option value="20" key="20">
          It was Amazing- 20%
        </option>
      </select>
    </div>
  );
};

export default Tip;

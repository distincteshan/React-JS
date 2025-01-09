/* eslint-disable react/prop-types */
const Items = ({ title, number, selectedKey, onHandleClick, children }) => {
  const toggleAns = number === selectedKey;

  return (
    <div
      className={toggleAns ? "open item" : "item"}
      onClick={() => onHandleClick(toggleAns ? null : number)}
    >
      <p className="number">{number}</p>
      <p className="title ">{title}</p>
      <p className="icon">{toggleAns ? "-" : "+"}</p>
      {toggleAns && <div className="content-box ">{children}</div>}
    </div>
  );
};

export default Items;

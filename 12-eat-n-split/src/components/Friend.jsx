import Submit from "./Submit";

const Friend = ({ currFriend, onHandleSelected, selectedFriend }) => {
  let isSelected = currFriend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={currFriend.image} alt={currFriend.name}></img>
      <h3>{currFriend.name}</h3>
      {currFriend.balance > 0 && (
        <p className="green">
          {currFriend.name} owes you {currFriend.balance}$
        </p>
      )}
      {currFriend.balance < 0 && (
        <p className="red">
          You owe {currFriend.name} {Math.abs(currFriend.balance)}$
        </p>
      )}
      {currFriend.balance == 0 && <p>You and {currFriend.name} are even</p>}
      <Submit handleOnClick={() => onHandleSelected(currFriend)}>
        {isSelected ? "Close" : "Select"}
      </Submit>
    </li>
  );
};
export default Friend;

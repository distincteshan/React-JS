import Submit from "./Submit";

const SplitBill = ({ currFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {currFriend.name}</h2>
      <label>💸 Bill Value</label>
      <input type="text"></input>
      <label>🧘‍♂️ Your expense</label>
      <input type="text"></input>
      <label>🧑‍🤝‍🧑 {currFriend.name}'s Expense</label>
      <input type="text" disabled></input>
      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{currFriend.name}</option>
      </select>
      <Submit>Split bill</Submit>
    </form>
  );
};

export default SplitBill;

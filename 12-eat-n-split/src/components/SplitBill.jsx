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
      <input type="text"></input>
      <label>🤑 Who is paying the bill?</label>
      <input type="dropdown"></input>
      <Submit>Split bill</Submit>
    </form>
  );
};

export default SplitBill;

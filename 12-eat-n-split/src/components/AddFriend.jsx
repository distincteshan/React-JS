import Submit from "./Submit";

const AddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type="text"></input>
      <label>🌃 Image URL</label>
      <input type="text"></input>
      <Submit>Add</Submit>
    </form>
  );
};

export default AddFriend;

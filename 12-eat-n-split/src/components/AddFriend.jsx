// eslint-disable no-unused-vars
import { useState } from "react";
import Submit from "./Submit";

const AddFriend = ({ handleAddFriends }) => {
  const [addFriend, openAddFriend] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!name || !url) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${url}`,
      balance: 0,
    };

    console.log(newFriend);
    handleAddFriends(newFriend);
    setName("");
    setUrl("");
    openAddFriend(!addFriend);
  }

  function handleAddFriend() {
    openAddFriend(!addFriend);
  }

  return (
    <>
      {addFriend ? (
        <>
          <form className="form-add-friend" onSubmit={(e) => handleOnSubmit(e)}>
            <label>🧑‍🤝‍🧑 Friend Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label>🌃 Image URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>
            <Submit>Add</Submit>
          </form>
          <Submit handleOnClick={handleAddFriend}>Close</Submit>
        </>
      ) : (
        <>
          <Submit handleOnClick={handleAddFriend}>Add friend</Submit>
        </>
      )}
    </>
  );
};

export default AddFriend;

//  eslint-disable no-unused-vars
import React, { useState } from "react";
import AddFriend from "./components/AddFriend";
import SplitBill from "./components/SplitBill";
import FriendsList from "./components/Friends";
import Submit from "./components/Submit";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelected(curr) {
    setSelectedFriend((currFriend) =>
      currFriend.id === curr.id ? null : curr
    );
  }

  function handleAddFriend(friend) {
    setFriendsList((friendsList) => [...friendsList, friend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          onHandleSelected={handleSelected}
          selectedFriend={selectedFriend}
        />
        <AddFriend handleAddFriends={handleAddFriend} />
      </div>
      {selectedFriend && <SplitBill currFriend={selectedFriend} />}
    </div>
  );
};

export default App;

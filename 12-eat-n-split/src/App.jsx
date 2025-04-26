/* eslint-disable no-unused-vars */
import React from "react";
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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <AddFriend />
        <Submit>Add Friend</Submit>
      </div>
      <SplitBill currFriend={initialFriends[0]} />
    </div>
  );
};

export default App;

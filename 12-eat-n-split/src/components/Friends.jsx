import Friend from "./Friend";

const FriendsList = ({ friends, onHandleSelected, selectedFriend }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            currFriend={friend}
            key={friend.id}
            onHandleSelected={onHandleSelected}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;

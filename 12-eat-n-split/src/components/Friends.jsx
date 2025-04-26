import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend currFriend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;

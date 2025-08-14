import css from "../FriendList.module.css";

export const FriendListItem = ({ friend }) => {
  return (
    <div className={css.friendCard}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p style={{ color: friend.isOnline ? "green" : "red" }}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

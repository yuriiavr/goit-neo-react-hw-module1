import css from './Profile.module.css'

export const Profile = ({ userData: {username , tag, location, avatar, stats} }) => {
  return (
    <div className={css.profileCont}>
      <div>
        <img
          src={avatar}
          alt="User avatar"
        />
        <p className={css.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

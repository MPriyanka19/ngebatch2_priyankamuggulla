export interface UserInfoProps {
  user: {
    avatarUrl: string;
    name: string;
  };
}

export interface User {
  avatarUrl: string;
  name: string;
}

const UserInfo = (props: UserInfoProps) => {
  const { user } = props;
  return (
    <div className="user">
      <img
        className="user-image"
        src={user.avatarUrl}
        alt={`${user.name} avatar`}
      />
      <div className="user-name">{user.name}</div>
    </div>
  );
};

export default UserInfo;

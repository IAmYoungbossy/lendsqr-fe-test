import { dashboardUsersDetails as users } from "../../constant/textConstant";

type userType = {
  tile: string;
  number: string;
  iconUrl: string;
};

export default function UsersDetails() {
  return (
    <div>
      <h1>Users</h1>
      <UserDetailsCard />
    </div>
  );
}

function UserDetailsCard() {
  return <div>{users.map(card)}</div>;
}

function card(user: userType) {
  return (
    <div>
      <img
        src={user.iconUrl}
        alt={user.tile}
      />
      <h2>{user.tile}</h2>
      <p>{user.number}</p>
    </div>
  );
}

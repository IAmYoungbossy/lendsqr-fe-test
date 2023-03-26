import "./styles/SideNavBar.css";
import { sideNavBar } from "../../constant/textConstant";
import SignOut from "../../assets/dashboard-assets/side-bar-icons/sign-out-icon.png";

type ListType = {
  name: string;
  icon: string;
};

type CategoryType = {
  name: string;
  lists: {
    name: string;
    icon: string;
  }[];
};

export default function SideNavBar() {
  return (
    <nav>
      <div>
        <SwitchOrganisation />
        <Dashboard />
        <Categories />
        <LogOut />
      </div>
    </nav>
  );
}

function SwitchOrganisation() {
  return (
    <div>
      <img
        src={sideNavBar.switch.iconUrl}
        alt={sideNavBar.switch.name}
      />
      <h3>{sideNavBar.switch.name}</h3>
      <img
        src={sideNavBar.switch.expand}
        alt={sideNavBar.switch.name}
      />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <img
        src={sideNavBar.dashboard.icon}
        alt={sideNavBar.dashboard.name}
      />
      <p>{sideNavBar.dashboard.name}</p>
    </div>
  );
}

function Categories() {
  return <div>{sideNavBar.categories.map(category)}</div>;
}

function category(category: CategoryType) {
  return (
    <div key={category.name}>
      <h4>{category.name}</h4>
      <ul>{category.lists.map(categoryList)}</ul>
    </div>
  );
}

function categoryList(list: ListType) {
  return (
    <li key={list.name}>
      <img
        src={list.icon}
        alt={list.name}
      />
      <span>{list.name}</span>
    </li>
  );
}

function LogOut() {
  return (
    <div className="logout">
      <div>
        <img
          src={SignOut}
          alt="Logout Icon"
        />{" "}
        <p>Logout</p>
      </div>
      <p>v1.2.0</p>
    </div>
  );
}

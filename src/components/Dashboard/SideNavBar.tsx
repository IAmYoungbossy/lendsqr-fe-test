import "./styles/SideNavBar.css";
import { sideNavBar } from "../../constant/textConstant";

interface ListProps {
  name: string;
  icon: string;
}

interface CategoryProps {
  name: string;
  lists: {
    name: string;
    icon: string;
  }[];
}

export default function SideNavBar() {
  return (
    <nav>
      <div>
        <SwitchOrganisation />
        <Dashboard />
        <Categories />
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

function category(category: CategoryProps) {
  return (
    <div key={category.name}>
      <h4>{category.name}</h4>
      <ul>{category.lists.map(categoryList)}</ul>
    </div>
  );
}

function categoryList(list: ListProps) {
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

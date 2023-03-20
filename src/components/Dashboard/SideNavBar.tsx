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
        alt={sideNavBar.switch.name}
      />
      <p>{sideNavBar.switch.name}</p>
    </div>
  );
}

function Categories() {
  return <>{sideNavBar.categories.map(Category)}</>;
}

function Category(category: CategoryProps) {
  return (
    <div>
      <h4>{category.name}</h4>
      <ul>{category.lists.map(categoryList)}</ul>
    </div>
  );
}

function categoryList(list: ListProps) {
  return (
    <li>
      <img
        src={list.icon}
        alt={list.name}
      />
      {list.name}
    </li>
  );
}

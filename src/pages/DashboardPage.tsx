import "./styles/Dashboard.css";
// import Table from "../components/Dashboard/table";
import Header from "../components/Dashboard/Header";
import NavPanel from "../components/UserInfo/NavPanel";
import SideNavBar from "../components/Dashboard/SideNavBar";
// import UsersDetails from "../components/Dashboard/UsersDetails";

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Header />
      <div>
        <SideNavBar />
        <div>
          {/* <UsersDetails />
          <Table /> */}
          <NavPanel />
        </div>
      </div>
    </div>
  );
}

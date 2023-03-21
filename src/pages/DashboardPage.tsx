import "./styles/Dashboard.css";
import Header from "../components/Dashboard/Header";
import SideNavBar from "../components/Dashboard/SideNavBar";
import UsersDetails from "../components/Dashboard/UsersDetails";
import Table from "../components/Dashboard/table";

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Header />
      <div>
        <SideNavBar />
        <div>
          <UsersDetails />
          <Table />
        </div>
      </div>
    </div>
  );
}

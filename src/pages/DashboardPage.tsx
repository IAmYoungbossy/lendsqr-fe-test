import "./styles/Dashboard.css";
import Header from "../components/Dashboard/Header";
import SideNavBar from "../components/Dashboard/SideNavBar";

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Header />
      <div>
        <SideNavBar />
      </div>
    </div>
  );
}

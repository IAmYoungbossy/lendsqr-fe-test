import "./styles/DashboardLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Dashboard/Header";
import SideNavBar from "../components/Dashboard/SideNavBar";

export const HomeLayout = () => <Outlet />;

export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <Header />
      <div>
        <SideNavBar />
        <Outlet />
      </div>
    </div>
  );
}

import "./styles/DashboardLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Dashboard/Header";
import PhoneNav from "../components/PhoneNav/PhoneNav";
import SideNavBar from "../components/Dashboard/SideNavBar";

export const HomeLayout = () => <Outlet />;

export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <Header />
      <div>
        <PhoneNav />
        <SideNavBar />
        <Outlet />
      </div>
    </div>
  );
}

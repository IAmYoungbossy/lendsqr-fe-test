// Side Navigation Icons
import LoanMoney from "../assets/dashboard-assets/side-bar-icons/loan-money-icon.png";
import Savings from "../assets/dashboard-assets/side-bar-icons/savings-piggy-bank.png";
import Karma from "../assets/dashboard-assets/side-bar-icons/karma-user-times-icon.png";
import Switch from "../assets/dashboard-assets/side-bar-icons/switch-briefcase-icon.png";
import Dasboard from "../assets/dashboard-assets/side-bar-icons/dashboard-home-icon.png";
import Transaction from "../assets/dashboard-assets/side-bar-icons/transaction-icon.png";
import LoanRequest from "../assets/dashboard-assets/side-bar-icons/loan-request-icon.png";
import UserFriends from "../assets/dashboard-assets/side-bar-icons/user-friends-icon.png";
import LoanProduct from "../assets/dashboard-assets/side-bar-icons/loan-product-icon.png";
import Services from "../assets/dashboard-assets/side-bar-icons/services-galaxy-icon.png";
import Guarantor from "../assets/dashboard-assets/side-bar-icons/guarantor-users-icon.png";
import Reports from "../assets/dashboard-assets/side-bar-icons/reports-chart-bar-icon.png";
import Organisation from "../assets/dashboard-assets/side-bar-icons/org-briefcase-icon.png";
import Waitlist from "../assets/dashboard-assets/side-bar-icons/waitlist-user-check-icon.png";
import Discision from "../assets/dashboard-assets/side-bar-icons/discision-handshake-icon.png";
import Settlement from "../assets/dashboard-assets/side-bar-icons/settlements-scroll-icon.png";
import SwitchExpand from "../assets/dashboard-assets/side-bar-icons/switch-chevron-down-icon.png";
import Preferrences from "../assets/dashboard-assets/side-bar-icons/preferrences-sliders-icon.png";
import AuditLogs from "../assets/dashboard-assets/side-bar-icons/audit-logs-clipboard-list-icon.png";
import SavingsProduct from "../assets/dashboard-assets/side-bar-icons/savings-product-bank-icon.png";
import FeesAndCharges from "../assets/dashboard-assets/side-bar-icons/fees-and-charges-coins-icon.png";
import ServiceAccount from "../assets/dashboard-assets/side-bar-icons/service-acc-user-config-icon.png";
import FeesAndPricing from "../assets/dashboard-assets/side-bar-icons/fees-and-pricing-badge-percent-icon.png";

// Users Details Card Icons
import Users from "../assets/dashboard-assets/users-details-icons/users-icon.png";
import ActiveUsers from "../assets/dashboard-assets/users-details-icons/active-users-icon.png";
import UsersWithLoan from "../assets/dashboard-assets/users-details-icons/users-with-loan-icon.png";
import UsersWithSavings from "../assets/dashboard-assets/users-details-icons/users-with-savings-icon.png";

// Table Filter Icon
import FilterIcon from "../assets/dashboard-assets/table-icons/filter-results-button-icon.png";

// View User Details Icons
import ViewIcon from "../assets/dashboard-assets/user-details-pop-up/view-icon.png";
import Activate from "../assets/dashboard-assets/user-details-pop-up/activate-icon.png";
import Blacklist from "../assets/dashboard-assets/user-details-pop-up/blacklist-icon.png";

export const loginFields = ["Email", "Password"];

export const sideNavBar = {
  switch: {
    name: "Switch Organisation",
    iconUrl: Switch,
    expand: SwitchExpand,
  },
  dashboard: { name: "Dashboard", icon: Dasboard },
  categories: [
    {
      name: "Customers",
      lists: [
        { name: "Users", icon: UserFriends },
        { name: "Gaurantor", icon: Guarantor },
        { name: "Loans", icon: LoanMoney },
        { name: "Descision", icon: Discision },
        { name: "Savings", icon: Savings },
        { name: "Loan Requests", icon: LoanRequest },
        { name: "Whitelist", icon: Waitlist },
        { name: "Karma", icon: Karma },
      ],
    },
    {
      name: "Businesses",
      lists: [
        { name: "Organisation", icon: Organisation },
        { name: "Loan Products", icon: LoanProduct },
        { name: "Savings Products", icon: SavingsProduct },
        { name: "Fees and Charges", icon: FeesAndCharges },
        { name: "Transaction", icon: Transaction },
        { name: "Services", icon: Services },
        { name: "Service Account", icon: ServiceAccount },
        { name: "Settlements", icon: Settlement },
        { name: "Reports", icon: Reports },
      ],
    },
    {
      name: "Settings",
      lists: [
        { name: "Preferrences", icon: Preferrences },
        { name: "Fees and Pricing", icon: FeesAndPricing },
        { name: "Audit Logs", icon: AuditLogs },
      ],
    },
  ],
};

export const dashboardUsersDetails = [
  { iconUrl: Users, tile: "Users", number: "2,453" },
  { iconUrl: ActiveUsers, tile: "Active Users", number: "2,453" },
  { iconUrl: UsersWithLoan, tile: "Users With Loans", number: "12,453" },
  { iconUrl: UsersWithSavings, tile: "Users With Savings", number: "102,453" },
];

export const tableText = {
  iconUrl: FilterIcon,
  header: [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status",
  ],
};

export const filterInputFields = [
  { label: "Organization", placeholder: "Select", type: "select" },
  { label: "Username", placeholder: "User", type: "name" },
  { label: "Email", placeholder: "Email", type: "email" },
  { label: "Phone Number", placeholder: "Phone Number", type: "tel" },
  { label: "Status", placeholder: "Select", type: "select" },
];

export const userPopUp = [
  { name: "View Details", icon: ViewIcon },
  { name: "Blacklist User", icon: Blacklist },
  { name: "Activate User", icon: Activate },
];

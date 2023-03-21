import BackArrow from "../../assets/dashboard-assets/details-page-icon/back-arrow-icon.png";

export default function NavPanel() {
  return (
    <div>
      <button>
        <img
          src={BackArrow}
          alt="Back Arrow"
        />
        <span>Back to Users</span>
      </button>
      <div>
        <h2>Users Details</h2>
        <div>
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
    </div>
  );
}

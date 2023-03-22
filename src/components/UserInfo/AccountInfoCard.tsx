import { views } from "../../constant/textConstant";
import AvatarIcon from "../../assets/dashboard-assets/details-page-icon/avatar-icon.png";
import StarChecked from "../../assets/dashboard-assets/details-page-icon/avatar-icon.png";
import StartUncheck from "../../assets/dashboard-assets/details-page-icon/avatar-icon.png";

export default function AccountInfoCard() {
  return (
    <div>
      <div>
        <Avatar />
        <UserTier />
        <AccountInfo />
      </div>
      <InfoLinks />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        src={AvatarIcon}
        alt="Avatar"
      />
    </div>
  );
}

function UserTier() {
  return (
    <div>
      <p>User's Tier</p>
      <div>
        <img
          src={StarChecked}
          alt="star"
        />
        <img
          src={StartUncheck}
          alt="star"
        />
        <img
          src={StartUncheck}
          alt="star"
        />
      </div>
    </div>
  );
}

function AccountInfo() {
  return (
    <div>
      <h3>N200,000.00</h3>
      <p>01537741/Providus Bank</p>
    </div>
  );
}

function InfoLinks() {
  return (
    <ul>
      {views.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

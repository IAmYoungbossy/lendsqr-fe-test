import { useContext } from "react";
import "./styles/AccountInfoCard.css";
import {
  AppContext,
  AppContextProps,
} from "../../context/AppContext";
import { UserDataType } from "../../types/types";
import { views } from "../../constant/textConstant";
import StarChecked from "../../assets/dashboard-assets/details-page-icon/star-checked-icon.png";
import StartUncheck from "../../assets/dashboard-assets/details-page-icon/star-unchecked-icon.png";

export default function AccountInfoCard() {
  return (
    <div className="account-info-card">
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
  const {
    state: { singleUserDetails },
  } = useContext(AppContext) as AppContextProps;

  const userDetails = singleUserDetails as UserDataType;
  const firstName = userDetails.profile.firstName;
  const lastName = userDetails.profile.lastName;

  return (
    <div>
      <img
        src={userDetails.profile.avatar}
        alt="Avatar"
      />
      <div>
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{userDetails.accountNumber}</p>
      </div>
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
  const { state } = useContext(
    AppContext
  ) as AppContextProps;
  const userDetails =
    state.singleUserDetails as UserDataType;

  return (
    <div>
      <h4>₦{userDetails.accountBalance}</h4>
      <p>{userDetails.profile.bvn}/Providus Bank</p>
    </div>
  );
}

function InfoLinks() {
  return (
    <ul>
      {views.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

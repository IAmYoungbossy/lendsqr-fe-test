import "./styles/UserNotification.css";
import UserAvatar from ".././../assets/dashboard-assets/user-avatar.png";
import ChevronDown from ".././../assets/dashboard-assets/chevron-down.png";
import NotificationIcon from ".././../assets/dashboard-assets/notification-icon.png";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function UserNotification() {
  const [isDropdown, setIsDropDown] = useState(false);

  useEffect(() => {
    const setDropdown = () => setIsDropDown(false);
    document.addEventListener("click", setDropdown);
    return () => {
      document.removeEventListener("click", setDropdown);
    };
  });

  return (
    <div className="user-notification">
      {isDropdown && <PhoneDropDown />}
      <FiSearch />
      <p className="docs">Docs</p>
      <img
        src={NotificationIcon}
        alt="Notification Icon"
        className="notification-icon"
      />
      <img
        src={UserAvatar}
        className="avatar"
        alt="Notification Icon"
      />
      <p className="name">Adedeji</p>
      <img
        src={ChevronDown}
        alt="Notification Icon"
        className="chevron-down"
        onClick={(e) => {
          e.stopPropagation();
          setIsDropDown(!isDropdown);
        }}
      />
    </div>
  );
}

function PhoneDropDown() {
  return (
    <div
      className="phone-drop-down"
      onClick={(e) => e.stopPropagation()}
    >
      <FiSearch />
      <img
        src={NotificationIcon}
        alt="Notification Icon"
      />
      <p>Docs</p>
      <p>Adedeji</p>
    </div>
  );
}

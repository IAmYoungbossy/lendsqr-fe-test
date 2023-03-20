import "./styles/UserNotification.css";
import UserAvatar from ".././../assets/dashboard-assets/user-avatar.png";
import ChevronDown from ".././../assets/dashboard-assets/chevron-down.png";
import NotificationIcon from ".././../assets/dashboard-assets/notification-icon.png";

export default function UserNotification() {
  return (
    <div className="user-notification">
      <p>Docs</p>
      <img
        src={NotificationIcon}
        alt="Notification Icon"
      />
      <img
        src={UserAvatar}
        alt="Notification Icon"
      />
      <p>Adedeji</p>
      <img
        src={ChevronDown}
        alt="Notification Icon"
      />
    </div>
  );
}

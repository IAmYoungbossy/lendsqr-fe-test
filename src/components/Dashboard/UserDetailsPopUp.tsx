import "./styles/UserDetailsPopUp.css";
import { userPopUp } from "../../constant/textConstant";

export default function UserDetailsPopUp() {
  return (
    <div className="user-details-pop-up">
      {userPopUp.map((item) => (
        <button key={item.name}>
          <img
            src={item.icon}
            alt={item.name}
          />
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}

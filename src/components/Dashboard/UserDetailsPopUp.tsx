import "./styles/UserDetailsPopUp.css";
import { Link } from "react-router-dom";
import { userPopUp } from "../../constant/textConstant";

interface IUserDetailsPopUp {
  id: string;
}

export default function UserDetailsPopUp({
  id,
}: IUserDetailsPopUp) {
  return (
    <div
      className="user-details-pop-up"
      onClick={(e) => e.stopPropagation()}
    >
      {userPopUp.map((item) => (
        <Link to={`user/${id}`}>
          <img
            src={item.icon}
            alt={item.name}
          />
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

import { userPopUp } from "../../constant/textConstant";

export default function UserDetailsPopUp() {
  return (
    <div>
      {userPopUp.map((item) => (
        <button>
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

import { UserDataType } from "../types/types";
import { addStatusProp } from "../helpers/helpers";

export default function saveToLS(
  allUserData: UserDataType[]
) {
  // Checks if data is already saved to storage
  if (localStorage.getItem("allUserData") === null) {
    // Adds "Status" property to "allUserData" to update UI
    const statusAdded = allUserData.map(addStatusProp);

    // Sets updated data to localStorage
    localStorage.setItem(
      "allUserData",
      JSON.stringify(statusAdded)
    );
  }
}

// Function retrieves data from storage for use
export function getUsersFromLS() {
  const data = localStorage.getItem("allUserData");
  if (data) return JSON.parse(data) as UserDataType[];
}

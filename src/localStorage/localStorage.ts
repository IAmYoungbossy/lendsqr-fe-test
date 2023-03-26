import { UserDataType } from "../types/types";
import { addStatusProp } from "../helpers/helpers";

interface ISaveToLS {
  fileName: string;
  singleUser?: UserDataType;
  allUsersData?: UserDataType[];
}

export default function saveToLS({
  fileName,
  singleUser,
  allUsersData,
}: ISaveToLS) {
  // Checks if data is already saved to storage
  if (
    allUsersData &&
    localStorage.getItem(fileName) === null
  ) {
    // Adds "Status" property to "allUserData" to update UI
    const statusAdded = allUsersData.map(addStatusProp);

    // Sets updated data to localStorage
    localStorage.setItem(
      fileName,
      JSON.stringify(statusAdded)
    );
  }

  // Stores single user data
  if (
    singleUser &&
    localStorage.getItem(fileName) === null
  ) {
    localStorage.setItem(
      fileName,
      JSON.stringify(singleUser)
    );
  }
}

// Function retrieves data from storage for use
export function getUsersFromLS(filname: string) {
  const data = localStorage.getItem(filname);
  if (data) return JSON.parse(data) as UserDataType[];
}
